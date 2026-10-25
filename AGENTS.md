# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Nothin’ replica preview

- Workspace: `/Users/huicheng/Documents/Codex Project/参考网站演示1022/nothin-replica`.
- Verified preview port: `5199`. Expected document title: `Nothin'｜首页`.
- Start from this directory with `npm run dev -- --host 0.0.0.0 --port 5199 --strictPort` after checking port ownership. Never stop an unrelated listener.
- Preserve the captured page composition and original local assets. Do not substitute approximate logos, fonts or stock imagery.
- Source documents live in `src/pages/`; root homepage is `index.html`. The Vite route plugin serves real documents for internal page transitions.
- Local-only adaptation is in `src/local.css` and `src/local.js`. ASK US intentionally opens the public email address; do not connect this demo to the production chat webhook.
- Resource acquisition/reference evidence is retained in the parent `.reference/` folder. Reuse saved files instead of recapturing or rebuilding from scratch.

## Whole-site editing

- User requires image uploads, editable text and typography, per-element/container spacing, image-grid gaps and blank spacers across all replica routes.
- Editor source: `src/editor.js`, `src/editor.css`, `src/editor-model.js`. The inspector uses an isolated Shadow DOM; preserve original page styles and motion when the inspector is closed.
- Entry: floating 编辑网站 button, or `/?customize=1`. `src/local.js` loads the standalone editor on every document; Vite serves and emits its three assets.
- Drafts are per browser origin in IndexedDB `nothin-website-editor` / `project` / `draft`; they are not written into source HTML or synced to a server. Keep JSON export/import available for backup and transfer.
- Editable content is plain text, and imported styling/image sources must pass the model's allowlist. Do not render imported user HTML.
- Run `npm run test:editor` for draft validation and image file rules. The preview remains port 5199 with title `Nothin'｜首页`; check current ownership before reusing it.

- Disable the captured Webflow legacy editor module (bundle module 322). It must never load remote editor/login scripts. Use `?customize=1` for the local inspector; default preview opens with the inspector collapsed.

## Chinese copy

- User requests all English website copy in Chinese. All 25 documents use zh-CN; keep brand, project and personal names in their original spelling. Source translation dictionary: `src/zh-CN.json`; apply idempotently with `python3 scripts/translate-zh.py`. Preserve SVG artwork and animation code.
- Local preview title is now `Nothin'｜首页`. Native CJK fallback fonts are specified in local.css. The local editor continues to support Chinese text.
- The editor element list, selection heading and layout-scope description must use Chinese labels. The inspector loads `/zh-CN.json` and maps original split/concatenated English phrases without changing saved user drafts. Unnamed images/sections use Chinese numbered labels, never CSS class names.
- User requires direct drag adjustment for text/image and image/image spacing. Selected elements expose blue margin sliders; the closest image grid/flex container exposes gap sliders. One pointer gesture = one undo checkpoint; Shift precision and Escape cancellation are supported. Canvas mode hides the inspector without disabling picking/dragging. Preserve keyboard operation and pointer capture.

## Deployment release — latest user decision (2026-10-25)

- The user explicitly requires NO website editor in the shared/deployed website. This supersedes prior instructions to mount the inspector. `src/local.js` must not import the editor; build emission is limited to local.js/local.css. Keep editor source only as inactive maintenance material.
- `npm run deploy:check` builds, runs 13 tests and checks 25 documents/resources including Linux case sensitivity and no editor assets/bootstrap in dist/client.
- Vercel deployment: Node24.x, npm ci, npm run build, output dist/client, explicit routes in vercel.json. A parent vercel.json supports the repository retaining the nothin-replica subfolder.
- Source public image filenames must not contain URL fragments (#); four legacy filenames have been sanitized. Keep acquisition/localization script consistent.
- Production preview port 5201, expected title `Nothin'｜首页`; check ownership before reuse. configurePreviewServer mirrors production document routing, and appType mpa prevents missing assets from silently returning the homepage.
- Latest browser export contained zero edited entries. User confirmed current source-rendered website is the final version; do not invent or import missing edits.
