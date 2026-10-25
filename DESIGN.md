---
name: Nothin replica editor
description: Isolated editing controls within the captured studio website
colors:
  ink: "#161616"
  action: "#111111"
  paper: "#f9f9f6"
  line: "#dededb"
  muted: "#666660"
  selection: "#2463eb"
typography:
  title:
    fontFamily: 'Ppneuemontreal, PingFang SC, Microsoft YaHei, sans-serif'
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: 'Ppneuemontreal, PingFang SC, Microsoft YaHei, sans-serif'
    fontSize: "13px"
    lineHeight: 1.5
  label:
    fontSize: "12px"
    fontWeight: 500
rounded:
  control: "5px"
  panel: "12px"
spacing:
  compact: "8px"
  regular: "16px"
  panel: "20px"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "#ffffff"
    rounded: "{rounded.control}"
  input:
    backgroundColor: "#ffffff"
    rounded: "{rounded.control}"
    padding: "9px 10px"
---

# Design System: Nothin replica editor

## Overview

**Creative North Star: "The quiet inspector"**

This records the editor addition. The captured Nothin’ website remains the visual authority for the page itself. Controls sit in a separate Shadow DOM surface so they can be used without overriding original typography, artwork and animation.

**Key Characteristics:**

- Restrained neutral controls.
- Blue indicates the selected page element and keyboard focus.
- Persistent header and footer frame an internally scrolling form.

## Colors

Dark actions and ink sit on warm paper; thin neutral lines separate groups. Blue is reserved for selection and focus. Error text uses a dark red.

## Typography

PP Neue Montreal is paired with the Chinese system sans fallback. Titles are semibold; form text stays compact. Label and hint hierarchy follows the actual stylesheet; the narrow-screen title becomes 18px.

## Layout

The panel is fixed to the right, 352px wide with 16px viewport insets. At 700px and below it uses 310px width and 8px insets, constrained to the viewport. The middle scrolls independently; the header, editing modes and completion footer remain visible. Forms use two columns; directional spacing fields use four.

## Elevation & Depth

Fine borders and a soft ambient shadow separate the editing panel from the original page. Page artwork retains its captured depth and motion.

## Shapes

Gently rounded fields and a larger panel radius distinguish the controls. The collapsed entry is pill shaped. Selection is a rectangular outline following the actual element bounds.

## Components

Buttons use dark fill for upload and completion, neutral borders for secondary actions, and visible keyboard focus. Fields always have labels. Selected-element names truncate, while editable text uses a resizable textarea. Image previews contain their source without cropping; user-selected crop settings affect the page image. The mode switch distinguishes point selection from normal page navigation. Blue margin/gap handles follow the selected element and image container; each label names the property and shows pixels. Canvas mode collapses the inspector while keeping these controls active. Handles support pointer capture, keyboard arrows, Shift precision and Escape cancellation.

## Do's and Don'ts

- Do keep editor styling inside its Shadow DOM.
- Do preserve original assets and unedited page motion.
- Do use explicit layout scopes and unit labels.
- Don't apply the inspector's compact typography to the captured page.
- Don't treat browser-local drafts as a backend publishing system.
