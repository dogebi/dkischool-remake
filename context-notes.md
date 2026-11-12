# Context Notes

- The source `http://dkischool.org/` returned HTTP 200. Its HTML uses EUC-KR; decoded correctly, it shows a school logo, seven primary navigation sections, five main-image slides, quick login/admission links, notice/letter/photo boards, event calendar, meal information, banners, and a school footer.
- REA browser target discovery succeeded but REA DOM/screenshot capture was rejected as `target_not_allowed`; therefore direct fetched HTML and local archived comparison captures were used, and this limitation is explicit.
- Frontend is React + Vite. It reproduces the homepage layout and navigation affordances, with sample notice entries rather than copied board records. Login, forms, and external board actions are not implemented.
- The source school's logo and public homepage banner images are included as local visual assets. The repo identifies the page as unofficial and should be removed or replaced if the school requests it.
- Axum serves the built frontend locally and exposes `/api/health`. GitHub Pages only hosts the frontend; the API is not deployed there.
- Frontend build (`npm install`, `npm run build`) passed. Rust check (`cargo test --manifest-path server/Cargo.toml`) passed with zero unit tests discovered. A local smoke request initially exposed a working-directory/static path issue and occupied port 3000; both were accounted for by a path fallback and testing on port 3100. Page root returned HTTP 200 and `/api/health` returned `{"status":"ok","service":"dkischool-remake"}`.
- Desktop screenshot was captured at 1365px viewport and inspected. It showed all major page sections and assets loaded.
