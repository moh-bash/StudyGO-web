# StudyGo Landing Page

StudyGo is a polished, responsive landing page for a university productivity application. It presents StudyGo as a friendly academic companion that helps students manage courses, grades, projects, deadlines, files, tasks, and focused study time.
<div align="center">
<img src="assets/Logo.png" alt="StudyGo logo" width="200" height="200">
<img src="assets/cover.png" alt="StudyGo landing page hero" width="800" height="400">
</div>

The project is a dependency-light static website built with semantic HTML, CSS, and vanilla JavaScript.

## Highlights

- Responsive desktop, tablet, and mobile layouts
- StudyGo blue visual identity with rounded product UI
- Supplied StudyGo logo and penguin mascot assets
- Product mockups for academic progress, calendar, tasks, Pomodoro, files, and project partners
- Interactive GoGo mascot emotion gallery
- Scroll progress indicator and scroll-triggered reveals
- Hero parallax effects on capable devices
- Animated counters and progress bars
- Responsive sticky navbar with mobile menu
- English and Arabic language support
- Arabic RTL layout with IBM Plex Sans Arabic typography
- Language persistence through `localStorage`
- Reduced-motion support through `prefers-reduced-motion`
- Accessible labels, focus states, and keyboard-friendly controls

## Project Structure

```text
StudyGo-WEB/
├── index.html
├── README.md
├── DESIGN.md
├── assets/
│   ├── Logo.png
│   ├── Happy.png
│   ├── Sad.png
│   ├── Angry.png
│   ├── Tired.png
│   ├── Worried.png
│   ├── GGrumpy.png
│   ├── Neutral.png
│   ├── آNeutral.png
│   ├── Explaining.png
│   └── Idea.png
├── css/
│   └── styles.css
└── js/
    └── main.js
```

## Running Locally

No package installation or build step is required.

Open `index.html` directly in a modern browser, or use a local server:

```powershell
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

Using a local server is recommended for the most accurate browser behavior. VS Code Live Server can also be used.

## Languages

The page supports:

- English: `en`
- Arabic: `ar`

English is the default language. The language switcher is available in the desktop navbar and mobile menu.

When Arabic is selected:

- The document changes to `lang="ar"` and `dir="rtl"`
- Relevant layouts and directional controls are mirrored
- Arabic translations are applied to the landing page and app mockups
- GoGo emotion messages are localized
- IBM Plex Sans Arabic is used for Arabic text

The selected language is persisted under `studygo-language` in `localStorage`.

## Motion and Interaction

Motion is implemented in `js/main.js` and styled in `css/styles.css`.

The page includes:

- Navbar state changes while scrolling
- Scroll progress tracking
- Hero phone, penguin, and decorative parallax
- IntersectionObserver-based reveal animations
- Animated numeric statistics
- Animated progress bars
- Staggered calendar and task entrances
- Interactive GoGo emotion switching
- Card and button hover states

Animations are reduced automatically when the user enables reduced motion in their operating system or browser.

## GoGo Mascot

The GoGo section introduces the StudyGo penguin as a companion throughout the student's academic journey.

Available interactive states:

- Happy
- Sad
- Angry
- Tired
- Worried
- Grumpy
- Friendly
- Idea
- Shy

Each state uses an existing asset from `assets/` and has English and Arabic title, label, and supporting copy.

## Accessibility

The page includes:

- Semantic sections and navigation
- Accessible image alt text
- Keyboard-accessible language controls
- Visible focus states
- `aria-expanded` for menus
- `aria-pressed` for GoGo emotion buttons
- Live updates for GoGo messages
- Reduced-motion handling
- Mobile-friendly touch targets

## External Resources

The page loads these Google Fonts:

- DM Sans
- Nunito
- IBM Plex Sans Arabic

The App Store and Google Play buttons are currently visual placeholders because production store URLs have not been provided.

## Validation

To validate the JavaScript syntax:

```powershell
node --check .\js\main.js
```

The page has been tested for:

- JavaScript syntax errors
- Desktop and mobile responsiveness
- Arabic RTL rendering
- Language persistence
- Mobile horizontal overflow
- Image loading
- GoGo emotion switching
- Navbar alignment

## Customization

### Update copy

Translations are stored in the `translations` object in:

```text
js/main.js
```

### Update colors and typography

Shared design tokens are defined at the top of:

```text
css/styles.css
```

### Add a new mascot state

1. Add the image to `assets/`.
2. Add the state to `gogoStates` in `js/main.js`.
3. Add a corresponding emotion button in `index.html`.
4. Add English and Arabic title, copy, and label values.

## License

This project is intended for the StudyGo product website. Confirm the appropriate project and asset licensing terms before distributing it publicly.
