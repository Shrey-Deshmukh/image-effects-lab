# Image Effects Lab

## Overview
Image Effects Lab is a browser-based web application that allows users to experiment with visual effects on images using pixel-level manipulation. The project runs entirely on the client side and provides an interactive way to explore how simple image effects can be implemented using JavaScript.

Users can upload an image and apply various visual transformations, with the results rendered instantly on an HTML canvas.

## How It Works
The application follows a simple processing flow:

1. A user uploads an image from their local system
2. The image is rendered onto an HTML canvas
3. Pixel data is accessed using JavaScript
4. Visual effects are applied by modifying RGB values per pixel
5. The updated image is re-rendered on the canvas in real time

Each effect is implemented as a standalone transformation, making the code easy to read and extend.

## Implemented Effects
The project includes a variety of visual effects, such as:
- Color hue transformations (Red, Green, Blue)
- RGB split effect
- Grayscale and black-and-white conversion
- Sepia tone
- Negative image effect
- Noise effect
- Window/grid overlay effect

## System Design
The project is structured as a simple client-side application:

- **UI Layer**: HTML and CSS for layout, controls, and styling
- **Processing Layer**: JavaScript functions that perform pixel-level transformations
- **Rendering Layer**: HTML Canvas used to display and update images

All computation is performed locally in the browser, with no backend dependencies.

## Tech Stack
- **Languages**: HTML, CSS, JavaScript
- **Image Handling**: HTML Canvas and SimpleImage library
- **Architecture**: Client-side, event-driven web application

## How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Shrey-Deshmukh/image-effects-lab.git
