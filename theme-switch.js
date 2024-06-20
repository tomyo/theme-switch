const root = document.documentElement;
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// React to theme changes from user's system preference
prefersDarkScheme.onchange = (e) =>
  (root.dataset.theme = e.matches ? "🌑" : "☀️");

// If unset at startup, reflect user's system preference
if (!root.dataset.theme)
  root.dataset.theme = prefersDarkScheme.matches ? "🌑" : "☀️";

customElements.define(
  "theme-switch",
  class extends HTMLElement {
    constructor() {
      super().attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = /*html*/ `
      <button aria-label="Toggle between dark and light theme">
        <slot></slot>
      </button>
      
      <style>
        button {
          all: unset;
          cursor: pointer;
        }
      </style>
    `;
    }

    connectedCallback() {
      this.shadowRoot.querySelector("button").addEventListener("click", this);
    }

    handleEvent() {
      // Toggle the current theme
      root.dataset.theme = root.dataset.theme === "☀️" ? "🌑" : "☀️";
    }
  }
);
