from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "images"
OUTPUT = ROOT / "public" / "images"
META = ROOT / "public" / "meta"
OUTPUT.mkdir(parents=True, exist_ok=True)
META.mkdir(parents=True, exist_ok=True)


def crop_to_ratio(image: Image.Image, ratio: float) -> Image.Image:
    width, height = image.size
    current = width / height
    if current > ratio:
        target_width = int(height * ratio)
        left = (width - target_width) // 2
        return image.crop((left, 0, left + target_width, height))
    target_height = int(width / ratio)
    top = (height - target_height) // 2
    return image.crop((0, top, width, top + target_height))


portrait = Image.open(SOURCE / "imagenAgustin.jpg").convert("RGB")
portrait = crop_to_ratio(portrait, 4 / 5).resize((800, 1000), Image.Resampling.LANCZOS)
portrait.save(OUTPUT / "agustin-portrait.webp", "WEBP", quality=84, method=6)
portrait.save(OUTPUT / "agustin-portrait.avif", "AVIF", quality=72)

memorium = Image.open(SOURCE / "logo_memorium.png").convert("RGB")
memorium = crop_to_ratio(memorium, 16 / 9).resize((1200, 675), Image.Resampling.LANCZOS)
memorium.save(OUTPUT / "memorium-cover.webp", "WEBP", quality=82, method=6)

favicon = Image.open(SOURCE / "icono.png").convert("RGBA")
favicon.save(OUTPUT / "favicon.png", "PNG", optimize=True)

canvas = Image.new("RGB", (1200, 630), "#f6f7f2")
draw = ImageDraw.Draw(canvas)
for x in range(0, 1200, 48):
    draw.line((x, 0, x, 630), fill="#e6e9e2", width=1)
for y in range(0, 630, 48):
    draw.line((0, y, 1200, y), fill="#e6e9e2", width=1)

draw.rounded_rectangle((54, 54, 1146, 576), radius=32, fill="#101828")
draw.rounded_rectangle((790, 88, 1104, 542), radius=24, fill="#2457ff")
og_portrait = portrait.resize((314, 392), Image.Resampling.LANCZOS)
canvas.paste(og_portrait, (790, 150))

font_regular = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
font_bold = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
label = ImageFont.truetype(font_regular, 20)
title = ImageFont.truetype(font_bold, 49)
subtitle = ImageFont.truetype(font_regular, 24)

draw.text((104, 115), "AGUSTÍN GOMEZ D'ADDARIO", font=label, fill="#c9ff55")
draw.multiline_text((104, 190), "Negocio, procesos\ny tecnología.", font=title, fill="white", spacing=8)
draw.text((104, 385), "Analista Funcional Técnico · Citizen Developer", font=subtitle, fill="#cbd3df")
draw.text((104, 488), "curriculum-with-bootstrap.vercel.app", font=label, fill="#98a2b3")
canvas.save(META / "og-cover.png", "PNG", optimize=True)

print("Generated optimized portrait, project cover, favicon and social cover.")
