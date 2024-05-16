module.exports = {
  siteMetadata: {
    title: "Open Source Festival",
    description: "A high profile event with series of talks, workshops, and awareness of open-sourced developer tools.",
    siteUrl: "https://festival.oscafrica.org",
    image: "/og-image.png",
    twitterUsername: "@oscafest"
  },
  plugins: [
    "gatsby-plugin-gtag",
    {
      resolve: "gatsby-plugin-gtag",
      options: {
        trackingId: "UA-77563678-3",
        head: false,
        anonymize: true
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Open Source Festival",
        short_name: "OSF",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#1B352D",
        display: "minimal-ui",
        icon: "src/images/osca-logo.png"
      }
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/tailwind-config-demo"]
      }
    },
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/schedule/", "/travel/", "/speakers/", "/sustain-africa"]
      }
    },
    "gatsby-plugin-fontawesome-css"
  ]
};
