// Badge: a small label. Tones: "neutral" or "accent".
function Badge({ label, tone = "neutral" }) {
  return `<span class="badge badge--${tone}">${label}</span>`;
}

if (typeof module !== "undefined") {
  module.exports = { Badge };
}
