# Portfolio — Agustín Gomez D'Addario

Currículum online bilingüe construido con React, Vite y TypeScript. El sitio presenta experiencia profesional, casos de estudio anonimizados, capacidades, formación y publicaciones con una identidad editorial tecnológica.

## Desarrollo

```bash
npm install
npm run dev
```

## Verificación

```bash
npm run lint
npm run test:run
npm run build
```

## Idiomas

- `/`: español.
- `/en/`: inglés.

El selector ES/EN actualiza el contenido y la URL sin recargar la página. Todo el contenido localizado se mantiene en `src/content.ts` y tiene pruebas de paridad estructural.

## Recursos

Las imágenes optimizadas se regeneran con:

```bash
python3 scripts/process_assets.py
```

Los CV descargables en español e inglés están publicados dentro de `public/cv/`. El teléfono se conserva únicamente en esos documentos, no en el sitio ni en sus fuentes.
