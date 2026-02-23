## Job Notification App – Design System Foundation

This repository contains the visual and interaction foundation for a premium B2C Job Notification App. It is a **design system shell only** – no product features or domain logic have been implemented yet.

### Principles

- **Calm, intentional, coherent, confident**
- No gradients, no glassmorphism, no neon, no playful or hackathon styling
- Predictable spacing, typography, and layout choices

### Stack

- **Build**: Vite + React + TypeScript
- **Entry**: `index.html` → `src/main.tsx` → `src/App.tsx`
- **Global styles and tokens**: `src/styles.css`

### Design tokens

Defined in `src/styles.css` as CSS variables:

- **Colors**
  - `--color-background`: `#F7F6F3` (off‑white)
  - `--color-text`: `#111111`
  - `--color-accent`: `#8B0000` (deep red)
  - `--color-success`: muted green
  - `--color-warning`: muted amber
- **Typography**
  - Headings: `--font-serif` (serif stack)
  - Body: `--font-sans` (system sans stack)
  - Body size: `--text-body-size` (16px)
  - Line height: `--text-body-line-height` (1.7)
  - Max text width: `--text-max-width` (720px)
- **Spacing scale**
  - `--space-1`: 8px
  - `--space-2`: 16px
  - `--space-3`: 24px
  - `--space-4`: 40px
  - `--space-5`: 64px
- **Radius**
  - `--radius-soft`: 8px (single radius across the app)
- **Transitions**
  - `--transition-fast`: 180ms ease‑in‑out

Only these spacing values should be used in new components.

### Global layout structure

Every screen must follow this structure (see `src/App.tsx` for a reference implementation):

1. **Top Bar**
   - Left: app name (`Job Notification App`)
   - Center: progress indicator (`Step X / Y`)
   - Right: status badge (`Not Started` / `In Progress` / `Shipped`)
2. **Context Header**
   - Large serif headline
   - One‑line subtext, max width 720px
3. **Primary Workspace (70%)**
   - Clean cards, subtle borders, no heavy shadows
   - Forms, tables, or content blocks live here
4. **Secondary Panel (30%)**
   - Step explanation
   - Copyable prompt box and related controls
5. **Proof Footer**
   - Checklist style: `UI Built`, `Logic Working`, `Test Passed`, `Deployed`

The layout is expressed through these main classes in `src/styles.css`:

- `app-shell`, `top-bar`, `context-header`
- `layout-main`, `layout-main__primary`, `layout-main__secondary`
- `proof-footer`, `proof-footer__list`, `proof-footer__item`

### Core components and patterns

Defined via class names and lightweight React usage in `src/App.tsx` and `src/styles.css`:

- **Cards**
  - `.card`, `.card__title`, `.card__body`
  - Subtle border, no drop shadow, soft radius
- **Buttons**
  - `.button.button-primary`: solid deep red primary action
  - `.button.button-secondary`: outlined secondary action
  - Shared radius and 180ms ease‑in‑out transitions
- **Inputs**
  - `.input-text`, `.input-textarea`, `.form-row`, `.form-label`
  - Clean borders, clear focus state (border + subtle outline)
- **Status badge**
  - `.status-badge` with variants: `--not-started`, `--in-progress`, `--shipped`
- **Copyable prompt box**
  - `.copy-box`, `.copy-box__content` + secondary button
- **Empty and error states**
  - `.empty-state`, `.error-state` with title/body patterns
  - Errors explain what happened and how to recover, never blame the user

### Interaction rules

- Transitions use `var(--transition-fast)` (180ms ease‑in‑out)
- No bounce, no parallax, no decorative animation
- Hover and focus states are subtle, driven by color and border changes

### Running the design system shell

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser to inspect the design system and layout shell. Use `src/App.tsx` as your canonical example when wiring future product features into this foundation.

