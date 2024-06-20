# `<theme-switch>`

Theme switcher web component

- Current active theme reflected via `[data-theme]` attribute in `html` element.
- Reacts to user-agent's `prefers-color-scheme` changes.
- Let user toggle the active theme by clicking the `<theme-switch>` element.

## Usage

```html
<html data-theme="☀️ / 🌑">
  <!-- `data-theme` reacts to the user and user-agent changes -->

  <style>
    [data-theme="☀️"] {
      color-theme: light;

      --color: black;
      --background-color: white;
      ...;
    }

    [data-theme="🌑"] {
      color-theme: dark;

      --color: white;
      --background-color: black;
      ...;
    }
  </style>

  ...

  <theme-switch>
    <img src="cool-theme-icon.png" witdth="20" height="20" />
  </theme-switch>
</html>
```
