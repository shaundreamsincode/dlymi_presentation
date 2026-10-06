// Every component shown on the preview page is listed here.
// To add one: add an entry with a name and the HTML to show.
const examples = [
  {
    name: "Badge",
    html: Badge({ label: "Neutral" }) + " " + Badge({ label: "Accent", tone: "accent" }),
  },
];

const root = document.getElementById("gallery");
root.innerHTML = examples
  .map(
    (example) => `
      <section class="example">
        <h2>${example.name}</h2>
        <div class="example__stage">${example.html}</div>
      </section>`
  )
  .join("");
