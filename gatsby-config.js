module.exports = {
  siteMetadata: {
    title: "Open Source Festival",
    description: "An annual open source gathering under Open Source Community Africa",
    siteUrl: "https://festival.oscafrica.org",
    author: "@oscafrica"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Open Source Festival",
        short_name: "OSF",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#081e32",
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
        exclude: ["/tailwind-config-demo"]
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/schedule/", "/travel/"]
      }
    }
  ]
};
