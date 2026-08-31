# Images

Drop real assets here and reference them from the data files in `/data`.
Paths are relative to `/public`, e.g. `/images/people/jane-doe.jpg`.

| Folder              | Used by                        | Suggested size        |
| ------------------- | ------------------------------ | --------------------- |
| `images/`           | hero, OpenGraph card           | 1600×1200 / 1200×630  |
| `images/research/`  | `data/research.ts` → `image`   | 1600×1000 (16:10)     |
| `images/people/`    | `data/people.ts` → `photo`     | 800×800 (square)      |
| `images/news/`      | `data/news.ts` → `image`       | 1600×1000 (16:10)     |

Any entry without an image renders a clearly-labelled placeholder instead,
so the site stays presentable while assets are being collected.

Notes:
- Use `.webp` or optimised `.jpg`; keep files under ~300 KB.
- The Next.js image optimizer is disabled (GitHub Pages is a static host),
  so resize and compress images before committing them.
- Always add meaningful `alt` text via the `imageAlt` field in the data files.
