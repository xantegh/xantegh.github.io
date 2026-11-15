// ─────────────────────────────────────────────────────────────
//  Landing page configuration — edit this file only.
//  Add a tool by copying one entry in `tools` and changing it.
// ─────────────────────────────────────────────────────────────
window.SITE_CONFIG = {
  title: "Daily Tools",
  tagline: "Small, fast, offline-friendly tools — brought to you by",
  author: "Antoine",
  footer: "Built with care. No tracking, no servers — your data stays in your browser.",

  // Optional: link shown in the footer (set to "" to hide)
  githubUrl: "https://github.com/xantegh",

  tools: [
    {
      name: "JSON Studio",
      description: "Paste raw JSON, then explore, search, and navigate it as a tree. Fully offline.",
      url: "json_explorer.html",
      icon: "{ }",
      tags: ["JSON", "Explorer"],
      color: "#77b8ff"        // glow color (any CSS color)
    },
    {
      name: "XML Studio",
      description: "Paste raw XML and browse, search, and export its structure without leaving your browser.",
      url: "xml_explorer.html",
      icon: "</>",
      tags: ["XML", "Explorer"],
      color: "#ff8a5c"
    },
    {
      name: "Sequence Studio",
      description: "Write Mermaid-style sequence syntax. The diagram updates as you type, with no data sent anywhere.",
      url: "sequence-studio.html",
      icon: "</>",
      tags: ["Mermaid", "Sequence", "Diagram"],
      color: "#77b8ff"
    }
    // Next tool goes here, e.g.:
    // { name: "Sequence Studio", description: "…", url: "sequence_studio.html", icon: "⇄", tags: ["Diagram"], color: "#b78cff" },
  ]
};
