# Project Context & Details

## Project Description
This is a **Bilingual Portfolio** (English / Spanish) for **Leonardo Reyes**, designed with a modern, fluid aesthetic and a strong emphasis on a dark "glassmorphism" design. The site includes advanced animations, multi-language support, a dynamic hero section, and a responsive layout.

## Current Details
- **Internationalization**: Bilingual system implemented using `i18next`. Supports instant language switching between English (EN) and Spanish (ES).
- **Implemented Sections**:
  - **Navigation**: Fixed glassmorphism-style bar that adapts on scroll.
  - **Hero**: Dynamic presentation with floating elements, profile picture, availability badge, and CTAs.
  - **Projects**: Asymmetrical grid (bento-box style) displaying different projects with tags, hover effects, and gradient overlays.
  - **Experience**: Vertical timeline with details of roles, companies, and periods.
  - **Skills**: Animated progress bars and a grid of highlighted tools.
  - **Contact**: Eye-catching CTA for direct contact.
- **Recent Changes**: Replaced static placeholder text ("Juan Pérez") with "Leonardo Reyes" as the main identity of the site.

## Tech Stack
- **Core**: React 19, TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v4 (Vanilla CSS integrated via theme directives)
- **Animations**: Motion (`motion/react`)
- **Icons**: Lucide React
- **Translations**: i18next (`react-i18next`)

## Color Palette
The project uses custom CSS variables defined in `src/index.css` that override or extend the Tailwind theme:

### Backgrounds (Surface)
- `--color-surface`: `#09112d` (Main background, ultra-dark navy blue)
- `--color-surface-container`: `#161e3a`
- `--color-surface-container-low`: `#121a36`
- `--color-surface-container-high`: `#212845`
- `--color-surface-container-highest`: `#2c3351`

### Text (On Surface)
- `--color-on-surface`: `#dce1ff` (Main text)
- `--color-on-surface-variant`: `#c7c4d7` (Secondary / muted text)

### Primary Accents (Lilac/Blue)
- `--color-primary`: `#c0c1ff`
- `--color-primary-container`: `#8083ff`
- `--color-on-primary`: `#1000a9`

### Secondary Accents (Cyan/Mint)
- `--color-secondary`: `#48dada`
- `--color-secondary-container`: `#05bbbc`
- `--color-on-secondary`: `#003737`

### Tertiary Accents (Pink)
- `--color-tertiary`: `#ffafd3`
- `--color-tertiary-container`: `#b55787`

### Outline Elements
- `--color-outline`: `#908fa0`
- `--color-outline-variant`: `#464554`

## Typography
- **Headings (`font-headline`)**: `Space Grotesk`
- **Body Text (`font-sans`)**: `Inter`

## Custom Utility Classes
- `.glass-panel`: `bg-surface/40 backdrop-blur-xl border-t border-white/10`
- `.text-gradient`: `bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary`
