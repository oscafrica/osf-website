import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="w-full bg-dark-blue-primary p-8">
      <div className="flex flex items-center justify-between max-w-8xl mx-auto p-4 md:p-8 text-sm">
        <div className="w-1/2h-2">
          {[
            {
              route: "https://git.io/Jemzv",
              title: "Code of Conduct"
            },
            {
              route: "https://oscafrica.org/community",
              title: "Community"
            },
            {
              route: "https://opencollective.com/osca",
              title: "Open Collective"
            },
            {
              route: "https://blog.oscafrica.org",
              title: "Blog"
            }
          ].map(link => (
            <a
              className="pr-8 no-underline text-white"
              key={link.title}
              href={link.route}
            >
              {link.title}
            </a>
          ))}
        </div>
        <div className="w-1/2h-2">
          <a
            className="font-bold p-2 no-underline text-white"
            href="mailto:info@oscafrica.org"
          >
            <i className="pr-2">
              <FontAwesomeIcon icon="envelope" />
            </i>
          </a>
          <a
            className="font-bold p-2 no-underline text-white"
            href="https://twitter.com/oscafrica"
          >
            <i className="pr-2">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </i>
          </a>
          <a
            className="font-bold p-2 no-underline text-white"
            href="https://facebook.com/opensourcecommunityafrica"
          >
            <i className="pr-2">
              <FontAwesomeIcon icon={["fab", "facebook-square"]} />
            </i>
          </a>
          <a
            className="font-bold p-2 no-underline text-white"
            href="https://github.com/oscommunityafrica"
          >
            <i className="pr-2">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
