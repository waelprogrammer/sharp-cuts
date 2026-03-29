# Sharp Cuts — Premium Barbershop Landing Page

A premium, fully responsive landing page for **Sharp Cuts**, a fictional barbershop based in Brooklyn, NY. Built with vanilla HTML, CSS, and JavaScript — no frameworks or dependencies.

---

## Preview

> Open `html/index.html` in your browser to view the page locally.

---

## Project Structure

```
sharp-cuts/
├── html/
│   └── index.html        # Main page markup
├── css/
│   └── styles.css        # All styles, layout, and animations
├── js/
│   └── main.js           # Interactivity and DOM logic
└── README.md
```

---

## Features

- **Hero** — Full-screen dark gradient with animated badge, gradient text title, and dual CTA buttons
- **Services** — 4 cards (Classic Haircut, Beard Trim, Combo, Hot Towel Shave) with hover lift + gold glow
- **About** — Two-column layout with pull quote, founder credit, and stat counters
- **Gallery** — 6-item asymmetric CSS grid with hover zoom and overlay effects
- **Hours & Location** — Weekly hours table (today auto-highlighted), address block, decorative SVG map
- **Contact Form** — Booking form with validation, success state, and animated feedback
- **Footer** — 4-column layout with social icons and navigation links

---

## Design System

| Token | Value |
|---|---|
| Primary accent | `#d4a843` (gold) |
| Background | `#0d0d0d` |
| Card background | `#181818` |
| Body font | Inter (Google Fonts) |
| Heading font | Playfair Display (Google Fonts) |

---

## JavaScript Behaviour

| Feature | Description |
|---|---|
| Navbar | Transparent → frosted-glass on scroll |
| Mobile menu | Full-screen overlay with close button |
| Scroll reveal | `IntersectionObserver` fade-up with staggered delays |
| Active nav | Section highlight synced to scroll position |
| Form validation | Red border + shadow on empty required fields |
| Date input | Locked to today or future dates |
| Today highlight | Current weekday row highlighted in gold automatically |

---

## Getting Started

No build tools or installs required.

```bash
# Clone the repo
git clone https://github.com/your-username/sharp-cuts.git

# Open in browser
open html/index.html
# or just double-click html/index.html in your file explorer
```

---

## Tech Stack

- HTML5
- CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript (ES6+)
- Google Fonts — [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) + [Inter](https://fonts.google.com/specimen/Inter)

---

## License

MIT — free to use for personal or commercial projects.
