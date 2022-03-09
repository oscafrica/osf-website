module.exports = {
  siteMetadata: {
    title: "Open Source Festival",
    description:
      "Open Source Festival is a high profile event that would attract student delegates, developers, designers and corporate organizations on a large scale with series of talks, workshops, and awareness of open-sourced developer tools.",
    siteUrl: "https://festival.oscafrica.org",
    image: "/og-image.png",
    twitterUsername: "@oscafrica"
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
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/schedule/", "/travel/", "/speakers/", "/sustain-africa", "/2020"]
      }
    },
    "gatsby-plugin-fontawesome-css"
  ]
};
