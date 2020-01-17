import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, keywords, title, image }) {
  const { site } = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          twitter
          fbAppID
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      meta={[
        {
          /* General tags */
        },
        {
          name: "description",
          content: metaDescription
        },
        {
          name: "image",
          content: image
        },
        {
          /* OpenGraph tags */
        },
        {
          name: "og:url",
          content: site.siteMetadata.siteUrl
        },
        {
          name: "og:title",
          content: title
        },
        {
          name: "description",
          content: metaDescription
        },
        {
          name: "image",
          content: image
        },
        {
          property: "fb:app_id",
          content: site.siteMetadata.fbAppID
        },
        {
          /* Twitter Card tags */
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata.twitter
        },
        {
          name: "twitter:title",
          content: title
        },
        {
          name: "twitter:description",
          content: metaDescription
        },
        {
          name: "twitter:image",
          content: image
        }
      ]
        .concat(
          keywords.length > 0
            ? {
                name: "keywords",
                content: keywords.join(", ")
              }
            : []
        )
        .concat(meta)}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    />
  );
}

SEO.defaultProps = {
  lang: "en",
  keywords: [],
  description: "",
  meta: []
};

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default SEO;
