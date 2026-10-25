# Nothin’ reproduction — visual QA

final result: passed

## Scope and evidence

Reference: https://www.noth.in/?ref=land-book.com
Implementation: http://127.0.0.1:5199/

Source visual truth: `../.reference/evidence/source-desktop.png` and `../.reference/evidence/source-mobile.png`.
Implementation: `../.reference/evidence/local-desktop.png` and `../.reference/evidence/local-mobile-final.png`.

Combined comparison inputs, opened and visually reviewed:
- `../.reference/evidence/comparison-desktop.jpg`: same desktop window, settled homepage, browser chrome cropped out.
- `../.reference/evidence/comparison-mobile-final.png`: matched 390 × 844 emulation, normalized to 390 × 844 pixels per side.
- `../.reference/evidence/comparison-typography.png`: focused source/local headline and CTA, side by side at the same pixel scale.

Desktop source and implementation screenshots are both 3420 × 1962 pixels. The page region excludes the 355-pixel browser toolbar/infobar and represents approximately 1710 × 804 CSS pixels at 2× density. Mobile screenshots use the same 3420 × 1962 native window; the emulated content crop is 657 × 1423 pixels and is normalized to 390 × 844 for comparison. Browser page zoom is reset to 100% on both origins. The resizing state can briefly retain the source's existing animation transforms; screenshots are taken after settling and normalization.

Additional evidence: `source-intro.png`, `source-works.png`, `local-mobile-menu.png`, `local-mobile-works.png`, and `local-mobile-detail.png` in the same evidence directory.

## Findings and fixes

1. [Resolved P2] A local email launcher initially overlapped the mobile footer links. Moved it to 60px from the bottom on mobile and 2.4rem on desktop. Post-fix evidence: `local-mobile-menu.png` and `local-mobile-final.png`; footer links remain readable.
2. Comparison setup initially had different page zoom levels. This was a capture mismatch, not an implementation change. Reset both origins to 100%, captured again, and reviewed the final combined comparisons.
3. No remaining actionable P0/P1/P2 visual drift found in the compared homepage views.

## Required fidelity surfaces

- **Typography:** same local PP Neue Montreal font files and weights; local IBM Plex Mono. Desktop focused comparison confirms matching headline wraps, optical size and CTA label. Mobile headline, CTA, logo and footer align after normalization.
- **Spacing/layout:** same original CSS, responsive breakpoints, grid and section composition. Desktop hero logo and page-edge alignment match; mobile hero spacing and bottom metadata match.
- **Color/tokens:** original black/white tokens and original image/video colors retained. No new palette or decorative component system added.
- **Assets:** original logo/vector paths, imagery, seven Neue Montreal font weights, and videos are local. No screenshot-based UI, approximate logo, generated placeholder or external rendering hotlink is used. The demo email launcher is an intentional integration adaptation.
- **Copy/content:** original content retained across 25 documents, including navigation, seven projects and thirteen FAQ articles. Contact/social destinations remain the original public destinations.

## Functional validation

- Browser-tested mobile menu opening.
- Browser-tested menu → Works → Utopia detail → home navigation on local URLs; the actual route and page title changed correctly.
- Observed desktop/mobile source behavior, scroll and video sections. Original local animation bundle supplies reveal, parallax, menu, accordion, sound and page-transition logic.
- Local DevTools showed no error indicator in the inspected homepage/detail session. Source-site network/integration failures were not counted as local failures.
- All 25 routes returned HTTP 200 and the expected page titles.
- Local asset-reference scan found no missing document/CSS assets and no external rendering asset URLs.
- Production build passed. Existing four Sites packaging tests passed.

## Limitations / intentional deviations

The production chat service, tracking, consent tracking scripts, Cloudflare challenge code and WebMCP agent integration are excluded. ASK US is an email contact adaptation. External booking and social sites are not reproduced. Video playback frames and pointer effects are time-dependent, so this is a high-fidelity reproduction rather than a claim of bit-identical animation-frame screenshots. All 25 documents were checked over HTTP; exhaustive browser interaction coverage of every article and secondary page is not claimed.

## Implementation checklist

- [x] Original assets localized and provenance saved.
- [x] Desktop and mobile combined comparisons reviewed.
- [x] Focused typography comparison reviewed.
- [x] Primary internal navigation exercised in the browser.
- [x] Preview running; build and packaging checks passed.

## Follow-up polish

Optional: connect a separately authorized chat backend. No remaining P3 item blocks local review.
