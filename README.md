# Game Portal

A simple static website about games, created as a student project.

## How to run

1. Download or clone the project.
2. Open `index.html` in a browser.
3. For the AJAX table to work correctly, run the website through a local server.
==To run the project with AJAX, use Live Server in VS Code.==

Recommended options:

- Open the folder in VS Code and use the Live Server extension.
- Or run this command in the project folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

You can still open `index.html` directly, but the AJAX table may not load in some browsers.

## Pages

- Home
- Games
- Gallery
- News
- About
- Contact

## Features

- Static website with one home page and five subpages
- One custom CSS file: `css/style.css`
- Gallery page with JavaScript image preview
- Contact form with client-side JavaScript validation
- AJAX data table loaded from `data/games.json`
- JSON file with nested data structure

## Technologies

- HTML
- CSS
- JavaScript


## AJAX and JSON

The Games page includes a table loaded asynchronously from `data/games.json` using JavaScript `fetch()` in `js/ajax.js`.

The JSON file has a nested structure, for example:

```text
portal -> games -> details -> platform
portal -> games -> details -> rating
```

This satisfies the requirement for JSON data with at least 3 levels of nesting.

## 👤 Author
Sergei Valiaev