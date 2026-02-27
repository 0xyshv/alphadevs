# AlphaDevs Revamp – Project Context

## Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Language**: TypeScript
- **Package Manager**: pnpm (always use `pnpm` — never `npm` or `npx`)

## Color Palette

Defined in `app/globals.css` as CSS variables, exposed as Tailwind tokens via `@theme inline`.

| Token | Hex | Description |
|---|---|---|
| `background` | `#070F2B` | Main page background (Dark Navy) |
| `foreground` | — | Default text color |
| `card` / `popover` | `#1B1A55` | Card and popover surfaces (Deep Indigo) |
| `primary` | `#9290C3` | Primary accent / CTA (Soft Lavender) |
| `secondary` | `#535C91` | Secondary / muted elements (Muted Blue) |
| `muted` / `accent` | — | Slightly lighter indigo surfaces |
| `border` / `input` | — | Borders and input outlines |
| `ring` | — | Focus ring (Soft Lavender) |
| `destructive` | — | Error / destructive actions (Red) |

### Tailwind class usage

```tsx
// Backgrounds
bg-background       // Dark Navy page bg
bg-card             // Deep Indigo card surface
bg-primary          // Soft Lavender accent
bg-secondary        // Muted Blue
bg-muted            // Lighter Indigo surface

// Text
text-foreground           // Default text
text-primary              // Lavender text
text-muted-foreground     // Subdued / caption text
text-primary-foreground   // Text on primary bg
text-card-foreground      // Text on card bg

// Borders & ring
border-border       // Standard border
ring-ring           // Focus ring

// Destructive
bg-destructive      // Error / delete actions

// Opacity modifier
bg-primary/20       // 20% opacity
border-border/50    // 50% opacity border
```
