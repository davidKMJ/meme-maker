# meme-maker
![Static Badge](https://img.shields.io/badge/status-done-brightgreen?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/type-learning_project-blue?style=for-the-badge)

A web-based meme creation tool that allows users to draw, add images, overlay text, and export their creations using the HTML5 Canvas API.

## How to Start

### Environment
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No package manager or build tools required
- Local web server (optional, recommended for file uploads)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/davidKMJ/meme-maker.git
cd meme-maker

# Open index.html directly in your browser
# Or use a local server (recommended):
python -m http.server 8000
# or
npx serve

# Open in browser
# http://localhost:8000
```

## Key Features

1. **Freehand Drawing** – Draw on canvas with customizable line width (1-10px) and color selection
2. **Color Selection** – Choose from 10 preset colors or use a custom color picker
3. **Fill Mode** – Toggle between drawing and fill modes to color the entire canvas background
4. **Image Upload** – Add photos to the canvas as a base layer for meme creation
5. **Text Overlay** – Double-click on canvas to add text at any position
6. **Eraser Tool** – Remove parts of your drawing with the eraser functionality
7. **Export** – Save your creation as a PNG image file

## Technical Stack

- **HTML5** – Structure and canvas element for rendering graphics
- **CSS3** – Styling and layout with flexbox, responsive design
- **JavaScript (Vanilla)** – Canvas API interactions, event handling, and file operations
- **Canvas API** – 2D drawing context for rendering graphics, paths, and text
- **File API** – Image upload via file input and download via data URLs

## Project Structure

```
meme-maker/
├── index.html              # Main HTML structure, UI elements, and canvas setup
├── app.js                  # Core application logic, canvas interactions, and event handlers
├── basics.js               # Learning examples and canvas practice code
├── styles.css              # Application styles, layout, and component styling
├── reset.css               # CSS reset for cross-browser consistency
└── README.md               # Project documentation
```
