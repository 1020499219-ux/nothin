# Chinese localization — 2026-10-22

- 25 documents translated with a 405-entry source dictionary in src/zh-CN.json.
- Navigation, headings, body copy, project explanations, FAQs, buttons, document titles, image alternatives and contact launcher localized. Names, original artwork and image-embedded content remain unchanged.
- All documents declare zh-CN. Protected scripts, SVG markup, links and asset paths retain their structure; the original line/character animation processes Chinese source text.
- Translation script is idempotent across every document; regeneration pipeline reapplies it.
- HTTP checked home, studio, works and FAQ content/title. Browser checked Chinese home and content region at the current narrow viewport. Evidence: evidence/zh-home.png and evidence/zh-content.png.
- Vite production build passed. No new tests were added for reversible copy edits.
- Browser-local custom text drafts intentionally take precedence over translated defaults; source translation does not erase user edits. The existing editor can restore an element's translated default.
