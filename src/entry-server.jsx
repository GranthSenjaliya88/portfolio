import { renderToString } from "react-dom/server";
import App from "./App.jsx";

// Build-time HTML for crawlers, link previews, and visitors before JS loads.
// React hydrates this same component tree in the browser.
export function render() {
  return renderToString(<App />);
}
