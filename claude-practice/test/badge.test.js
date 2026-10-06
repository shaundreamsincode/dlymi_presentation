const test = require("node:test");
const assert = require("node:assert");
const { Badge } = require("../components/badge.js");

test("Badge shows its label", () => {
  assert.match(Badge({ label: "New" }), />New</);
});

test("Badge is neutral unless told otherwise", () => {
  assert.match(Badge({ label: "New" }), /badge--neutral/);
});

test("Badge can use the accent tone", () => {
  assert.match(Badge({ label: "New", tone: "accent" }), /badge--accent/);
});
