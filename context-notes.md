# Context Notes

- The source `http://dkischool.org/` returned HTTP 200. Its HTML uses EUC-KR; decoded correctly, it shows a school logo, seven primary navigation sections, five main-image slides, quick links, notice/letter/photo boards, event calendar, meal information, banners, and a school footer.
- REA target discovery succeeded, but REA DOM/screenshot capture was rejected as `target_not_allowed`. The reconstruction therefore uses directly fetched homepage HTML/assets and prior local comparison captures. A true per-element source screenshot comparison was not possible.
- Frontend is React + Vite. It reproduces the homepage layout and interactive affordances, with sample notice entries rather than copied board records. Login, forms, and external board actions are not implemented.
- The source school's logo and public homepage banner images are included as local visual assets. The repo identifies the page as unofficial and should be removed or replaced if the school requests it.
- Axum serves the built frontend locally and exposes `/api/health`. GitHub Pages only hosts the frontend; the API is not deployed there.
- Validation passed: `npm ci`, `npm run build --workspace frontend`, and `cargo test --manifest-path server/Cargo.toml` (zero Rust unit tests are currently defined). Local smoke checks returned HTTP 200 for `/` and `{"status":"ok","service":"dkischool-remake"}` from `/api/health`.
- A 1365px desktop screenshot was inspected locally and on the published site. Major page sections and source images loaded. Exact pixel parity across all pages/devices is not claimed.
- Public repo: `https://github.com/dogebi/dkischool-remake`.
- Pages URL: `https://dogebi.github.io/dkischool-remake/`.
- First Pages workflow run `43194444533` succeeded. Follow-up code run `43194598262` succeeded after fixing the notice category tabs. Git commits: `5b5a4a8` initial page, `7953f30` tab filtering attempt, `4f6dd6d` tab state correction.
