module.exports = {
  siteMetadata: {
    title: "Open Source Festival",
    description:
      "A high profile event for student delegates, developers, designers and corporate organizations with series of talks, workshops, and awareness of open-sourced developer tools.",
    siteUrl: "https://festival.oscafrica.org",
    image: "https://res.cloudinary.com/osca/image/upload/v1645850652/osf/2022/zjyzykiurmg1xqjrx720.png",
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
