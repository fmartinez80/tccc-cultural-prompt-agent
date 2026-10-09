# Scene Composer — design system

How this app looks, which building blocks it is made of, and the rules a UI
change has to follow. Read this before adding or restyling anything under
`src/client/`. Where this file and the code disagree, fix one of them in the
same change. The visual reference the user picked is
`uploads/design-reference.png` ("Poster grid").

## 1. Principles

1. **Neo-brutalist poster grid.** Retro paper canvas, white cards, pitch-black
   text. Every panel, card, button and dialog has a 3px black border and a
   hard offset shadow with no blur (`5px 5px 0`). No gradients, no soft
   shadows, no translucency except modal backdrops. Corners are small
   (3–6px); only pills and circles go round.
2. **Four fills, one ink.** Light grey `--neo-hover` (`#e5e5e5`) means
   *actively selecting*: the hover/press state of anything you can pick. Mid
   grey `--neo-cta` (`#a7a7a7`) is the primary call-to-action button.
   Coca-Cola red `--neo-selected` (`#e7223a`, user-picked) with white text (`--neo-on-selected`) means *selected*: the
   chosen card, segment, chip, dropdown item, the current step, the selected
   node and sketch item. Amber `--neo-amber` (`#ffcc33`)
   means "Change" and is **always** layered with `--neo-hatch` black stripes
   (and a pencil icon where there is room). Grey and amber are only ever
   fills behind black text — never a text colour.
3. **Poster type.** Headings are Tilt Warp, sentence case, tight
   (`--app-font-head`, one weight: never set bold on it; `font-synthesis` is
   off). A step's `<h1>` is `clamp(32px, 4.2vw, 56px)`, line-height 1.0.
   Paragraphs are Space Grotesk (`--bay-font-sans`, 400/500/700). Labels,
   step numbers, tags, IDs, prompts and JSON are Space Mono
   (`--bay-font-mono`). Every field label is the same: Space Mono 12px bold
   caps, black, a short name only ("Time of day", "Dining surface") — never an
   explanation; that goes in a hint line under the control if it is needed.
4. **Tactile.** Clickable things press: `transform: var(--neo-press)` with
   `box-shadow: var(--neo-shadow-active)` (small controls use
   `--neo-press-sm`). Hover on any button fills it light grey.
5. **Feedback is inline and plain.** Status lines name what the agent is
   doing and for how long; errors are an `Alert` next to what failed, in one
   sentence, naming the next step. Loading is a skeleton shaped like the real
   content, never a bare spinner.
6. **Everything works from the keyboard and reads to a screen reader.**
   Focus is a 3px black outline (`global.css`); never remove it.

## 2. Foundations

All colours, borders, shadows and type come from custom properties in
`src/client/styles/tokens.css`. Never hard-code a colour in a component.

| Facet | Value |
| --- | --- |
| Canvas | `--neo-paper` / `--bay-bg-canvas` `#f4f1ea`; `--bay-bg-sunken` `#ebe7dc`, `--bay-bg-subtle` `#faf8f3` |
| Surfaces | `--neo-card` / `--bay-bg-surface` `#ffffff` |
| Text | `--bay-text` `#000`, `-2` `#1c1c1c`, `-3` `#45433f` (hints, intro copy), `-4` `#77746d` (disabled, placeholders) |
| Borders | `--neo-border` (3px ink) for panels, cards, buttons, dialogs; `--neo-border-thin` (2px) for rows, inputs, pills, chips; `--bay-border-hair` `#c9c4b8` only for faint dividers and canvas grids |
| Shadows | `--neo-shadow` (5px), `--neo-shadow-sm` (3px, small buttons, change rows), `--neo-shadow-active` (pressed). Inputs, pills and anything inside a node card get no shadow |
| Fills | `--neo-hover` (hover/press), `--neo-cta` (primary buttons), `--neo-selected` / `--neo-selected-hover` + `--neo-on-selected` text (selected), `--neo-amber` + `--neo-hatch` (Change) |
| Legacy aliases | `--bay-accent` and `--app-highlight` are ink (text/borders); `--bay-accent-soft` and `--app-highlight-soft` are the hover grey (fills) |
| Status | `--bay-ok-*` pale green, warning alerts light grey (#e5e5e5) with an amber-filled triangle icon, `--bay-err-*` pale red, `--bay-info-*` white — black border from the component, via `Alert` |
| Fonts | Loaded in `index.html`: Tilt Warp, Space Grotesk 400/500/700, Space Mono 400/700 |

The app ships light-only. The `data-theme='dark'` selector in `tokens.css`
re-asserts the light values so nothing picks up a dark ramp. The `--bay-*`
names are kept from the original build; `tokens.css` defines all of them.

## 3. Layout

Set in `src/client/App.tsx` + `App.module.css`. No white window: content
sits directly on the paper canvas.

- **Header row**: the logo (unboxed) at the left, Learning / Start over / the user's name at the right, on one tight line aligned with the page column.
- **Step rail** (sticky, left): one
  bordered stack of rows — big step number in Tilt Warp, step name,
  a check on completed steps; the current step is a solid red row with
  white text, hover is light grey. An
  unreachable step is disabled. "Draft saved" sits below in Space Mono. On
  narrow screens the rail becomes a horizontal scroller above the step.
- **Step** (the main column): the step's own sentence-case `<h1>` as a frozen
  band (sticky at the top, paper background, no rule under it; the step
  scrolls behind it; App.tsx publishes its height as `--app-step-head-h` for
  other sticky parts), a short intro,
  then its content; `StepActions` is the sticky bottom bar (Back on the left
  as a white button, the primary action as a grey one). On Workspace the
  node canvas takes the full width.
- **Sketch review** is two columns on wide screens: the items list on the
  left, the sketch frame sticky on the right; the status bar runs full width
  above, scene notes and the prompt-changes box full width below.

## 4. Building blocks

### 4.1 Controls: `src/client/ui/`

Built on `react-aria-components` and styled with a sibling
`<Component>.module.css`. **This directory is the only place that imports
`react-aria-components`.**

| Component | Use it for | Notes |
| --- | --- | --- |
| `Button` | Every clickable action | `variant` `primary` (mid grey, Tilt Warp uppercase) / `default` (white, bordered) / `ghost`; `size` `md` (3px border, 5px shadow) / `sm` (2px, 3px shadow); `icon`, `loading`, `onPress`. No `autoFocus` prop |
| `TextInput`, `TextArea` | Single/multi-line text | White, 2px border, no shadow; `onPressEnter` submits |
| `Select` | Country / region / SKU / occasion dropdowns | Popover is a bordered card with the full shadow |
| `ChoiceCardGroup` | Mutually exclusive option cards | White card, 3px border + shadow; hover/press = light grey, selected = red with white text; "More details" is a white Space Mono pill that opens the detail dialog |
| `Accordion` | Collapsible sections | Bordered stack; the open row has a light grey header |
| `SegmentedControl` | Chip-style single-select rows | Bordered pills; hover = light grey, selected = red |
| `Switch` | One on/off toggle | Bordered track |
| `CodeBlock` | Prompts and JSON | White, 2px border, Space Mono, copy button with "Copied" feedback |
| `Alert` | Inline outcome the user must read | `tone` `error`/`warning`/`info`/`success` |
| `ProgressBar` | Long generations | Bordered track, mid grey fill |
| `LoadingOverlay` | A whole step waiting on content | The Coca-Cola bottle filling with cola on a bordered white card |
| `SkeletonText`, `SkeletonBlock` | Loading, shaped like the content | |
| `EmptyState` | A region with nothing in it yet | Heading + hint + optional action |
| `ErrorBoundary` | Around the rail and the step independently | |

`SignInPrompt` (`src/client/lib/signIn.tsx`) is rendered when a call finds
the session expired; its Reconnect button refreshes the magic-link session.
Signing in itself is `src/client/auth/LoginPage.tsx`.

### 4.2 Icons: `lucide-react`

One icon set; `size` always explicit (20 in the rail, 16 in `md` buttons/the
header, 14 in `sm` buttons and chips). Never emoji. In use here: `ClipboardList`
(Brief), `ChefHat` (Preparation), `UtensilsCrossed` (Plating), `Soup`
(Sides), `Store` (Scene), `Camera` (Camera), `Sparkles` (Accent),
`LayoutGrid` (Layout), `FileText` (Story), `Workflow` (Workspace),
`ArrowRight` (continue), `RotateCcw` (ask again / start over),
`Check`/`CircleCheck` (selected / passed), `Download` (downloads), `Copy`
(copy prompt), `LoaderCircle` (spinning, agent working), `ChevronDown`
(select trigger). The workspace canvas adds `ZoomIn`/`ZoomOut`/`Maximize`
(zoom, fit), `Undo2`/`Redo2`, `GripVertical` (node drag handle), `Wand2`
(generate scene), `Keyboard` (shortcuts popover).

### 4.3 Images

Visuals are icons, client-rendered three.js proxies
(`src/client/lib/renderProxy.ts`), the camera illustrations in
`public/camera/`, the logo and the loading bottle, and the Gemini-generated
sketches and scenes. Images sit in a 2–3px black frame.

## 5. Rules

### 5.1 Styling

CSS modules only; interactive states via react-aria's data attributes
(`[data-hovered]`, `[data-selected]`, `[data-focus-visible]`,
`[data-disabled]`) inside `src/client/ui/`, never `:hover`. The rail's plain
native `<button>`s (not react-aria) are the one exception and use ordinary
`:hover`/`:disabled`.

### 5.2 Feedback and copy

- Every agent-backed step (prep, plating, sides, surface, accent, story,
  validate) shows a status line naming what the agent is doing plus elapsed
  seconds, and 2–3 skeleton option cards, for the whole 10–90s a model call
  can take.
- A sign-in requirement renders `SignInPrompt`; a monthly-limit or permission denial (`FORBIDDEN`)
  renders a terminal `Alert` with no retry action; anything else renders an
  `Alert` with the server's own message and keeps the action armed.
- Changing an answer that has downstream choices already made shows an
  inline warning naming what will clear, before the operator commits to the
  change.
- Sentence case everywhere; buttons are a verb.

## 6. Surfaces

### Brief (`src/client/intake/BriefStep.tsx`)

The entry point: operating unit, country, region, product SKU, hero dish,
optional side request, occasion. Explains what the rest of the wizard does
in one line. `Select`s for country/region/SKU/occasion, `TextInput`s for the
free-text fields (Enter submits), a `primary` `Button` gated on every
required field.

### Preparation / Plating / Sides (`PrepStep.tsx`, `PlatingStep.tsx`,
`SidesStep.tsx`, sharing `DecisionStep.tsx`)

Each: an intro line, the cultural agent's status while it answers, then its
options as a `ChoiceCardGroup` (1 card when "resolved" and auto-picked, up
to 3 when "choose", A marked "Suggested"). "Ask again" re-runs the same
call; changing an earlier one of these three re-triggers the later ones.

### Scene (`SceneStep.tsx`)

Venue / setting / people / time as `SegmentedControl` rows, with hints for
disabled options (large SKUs are home-only, multi-person layouts aren't
built yet); an embedded surface decision (cards) that only appears for
"on the go"; the branded-glass yes/no toggle only when the rule allows a
choice; the resolved lighting preset shown as read-only text.

### Camera (`CameraStep.tsx`)

Look as a `ChoiceCardGroup` (2 columns), angle as a `SegmentedControl`.

### Accent (`AccentStep.tsx`)

Gated on the composition's item-count parity (`rules.needsAccent`, from
`trpc.rules`): a plain "no accent needed" message when the count is
already odd, or the cultural agent's small-accent options otherwise.

### Layout (`LayoutStep.tsx`)

`trpc.compose` solves up to 3 rule-compliant layouts; each renders as a
`ChoiceCardGroup` card whose `media` slot is the labeled 3D proxy
(`renderProxy`, 16:9) for that option, with its archetype name, one-line
rationale and score. A "show guides" `Switch` overlays the center-third and
horizon lines on every proxy. Zero options renders an `EmptyState` listing
why each archetype was infeasible.

### Story (`StoryStep.tsx`)

Two columns: the labeled proxy (widened framing, for the image model) with
its downloads (proxy PNG × 2, blueprint JSON, story JSON, both prompts) and
a collapsible rule-check list; and the agent-written story (scene summary,
cultural notes, a "Check cultural accuracy" action, and — on failure — the
validation notes with a "Rewrite with these notes" action). Below both: the
prompt segments, the per-label segments, and the composition/product-swap
prompts as `CodeBlock`s with copy buttons.

### Workspace (`WorkspaceStep.tsx`, `src/client/workspace/`)

Step 10: the composition prompt as an editable, node-based canvas — a
pannable/zoomable viewport (drag empty canvas to pan, ctrl/cmd+scroll to
zoom, toolbar zoom in/out/fit) holding absolutely positioned cards wired by
an SVG bezier layer underneath. Node types: **Proxy** (image 1, uploaded to
storage lazily on first scene generation), **Segment** (one per prompt
segment — editable text, a bypass `Switch`, and for objects/the environment
a Nano Banana Pro preview that can feed the scene as a reference image),
**Prompt** (the exact assembled prompt as a read-only `CodeBlock` plus the
numbered reference list), and **Generate** (aspect ratio / image size /
variant count, the Generate action, and the results — latest batch large,
older ones as a history strip). Every segment always wires to Prompt; Prompt
and the proxy both wire to Generate; a segment used as a reference gets a
second, dashed-accent wire straight to Generate. Click/shift-click a node
header to select it, shift-drag empty canvas to marquee-select, drag a
selected node's header to move the whole selection (snaps to a 16px grid).
Keyboard: arrow keys nudge the selection, `B` toggles bypass, Escape clears
selection, Ctrl/Cmd+Z / Shift+Z undo/redo canvas changes (never a generated
result), Ctrl/Cmd+Enter generates the scene from anywhere — a `Keyboard`
icon popover in the toolbar lists these. A full-size lightbox (`Modal`/
`Dialog`) opens on any image; Escape closes it.

## 7. Checklist for a UI change

- [ ] Built from `src/client/ui/` and `src/client/layouts/`; nothing new
      installed.
- [ ] New styles are in a `.module.css`; colours, borders, shadows and fonts
      via tokens; no `:hover` inside `ui/`. Yellow/amber only as fills;
      amber always with `--neo-hatch`.
- [ ] Icons from `lucide-react` with an explicit `size`; icon-only controls
      labelled. No emoji anywhere.
- [ ] Loading, empty and error states exist and use `Skeleton*`,
      `EmptyState`, `Alert`, `AgentStatus`. Every agent call shows elapsed
      time; every compose/story/validate call shows a loader for its whole
      duration.
- [ ] Works from the keyboard (Tab through it; arrow keys move between
      radio/segmented options).
- [ ] This file still describes the app — §4 for a new control, §6 for a
      new step surface.
