# Claude practice repo

A safe sandbox for practicing one loop: a Figma frame becomes a coded component, on its own branch, with tests, and goes up as a pull request.

Nothing here is client work, and nothing needs installing beyond Node.js.

Everyone practices in this same repo, each on a branch with their own name in it. Practice pull requests are never merged, so `main` stays a clean starting point.

## Try it

1. Open Terminal in this folder and run `claude`.
2. Copy the link to the practice frame in Figma (right-click the frame, Copy link to selection).
3. Tell Claude: `Make a new branch and build this component:` and paste the link.
4. Tell Claude: `Add tests, run them, and explain what you changed in plain English.`
5. Tell Claude: `Open a pull request.`

## Look at the result

- Open `index.html` in a browser to see every component.
- Run `npm test` to run the tests.

## What is in here

- `tokens.css`: the design tokens (colors, spacing, type). Components only use these.
- `components/`: one `.js` and one `.css` file per component. `badge` is the example.
- `test/`: one test file per component.
- `gallery.js` and `index.html`: the preview page.
- `CLAUDE.md`: the instructions Claude follows in this repo.
