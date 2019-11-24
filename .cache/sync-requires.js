const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/bolaji/Desktop/osf/osf-website/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/bolaji/Desktop/osf/osf-website/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/bolaji/Desktop/osf/osf-website/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/bolaji/Desktop/osf/osf-website/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/bolaji/Desktop/osf/osf-website/src/pages/index.js")))
}

