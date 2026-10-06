# Practice repo: how to work here

This is a small practice repo for learning the Figma to Claude Code to GitHub loop.
The people using it are mostly designers, not developers. Explain what you do in plain English.

## What this project is

A tiny component library with no dependencies and no build step.
Opening `index.html` in a browser shows every component.

## How a component is built

Each component is two files in `components/`, plus a test:

- `components/<name>.js`: one function that takes a props object and returns an HTML string. End the file with the same `module.exports` block that `badge.js` uses, so tests can load it.
- `components/<name>.css`: its styles. Use only the variables in `tokens.css`. Never write raw colors, sizes or fonts. If a Figma value has no matching token, use the closest token and say so.
- `test/<name>.test.js`: tests using Node's built-in test runner, in the style of `test/badge.test.js`.

Then show it on the preview page:

- add its stylesheet and script lines to `index.html` (script above `gallery.js`)
- add an entry to the `examples` list in `gallery.js`

`components/badge.js` is the reference example. Follow its pattern.

## Building from a Figma link

When given a Figma link, read the frame with the Figma tools and build it as a component as described above. Match layout, text and spacing, mapping every value to a token.

## Checking the work

- Run the tests with `npm test`. Nothing needs installing.
- To preview, open `index.html` in the browser (`open index.html` on a Mac).

## Git rules

- Never commit directly to `main`. Start every piece of work on a new branch.
- Several people practice in this repo at the same time and build the same component, so put the person's name in the branch: `<first-name>/add-<component-name>`. Get the name from `git config user.name`, or ask.
- Practice pull requests are for review only. Do not merge them.
- Write short commit messages that say what changed.
- When asked to open a pull request, push the branch and use `gh pr create`. In the description, list what was added and how it was tested, in plain English.
