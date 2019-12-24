import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="z-20 md:flex w-full bg-dark-blue-500 p-8 items-center text-center justify-between max-w-8xl mx-auto md:px-40 p-4 md:p-8 text-sm">
      <div className="flex flex-col md:flex-row text-center">
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
          <ul className="m-0 p-0" key={link.title}>
            <li className="pb-8 md:pr-8 md:pb-0 p2">
              <a className="no-underline text-white" href={link.route}>
                {link.title}
              </a>
            </li>
          </ul>
        ))}
      </div>
      <div className="mt-4">
        {[
          {
            key: 0,
            label: "Email",
            faIcon: ["fa", "envelope"],
            href: "mailto:info@oscafrica.org"
          },
          {
            key: 1,
            label: "Twitter",
            faIcon: ["fab", "twitter"],
            href: "https://twitter.com/oscafrica"
          },
          {
            key: 2,
            label: "Facebook",
            faIcon: ["fab", "facebook-square"],
            href: "https://facebook.com/opensourcecommunityafrica"
          },
          {
            key: 3,
            label: "GitHub",
            faIcon: ["fab", "github"],
            href: "https://github.com/oscommunityafrica"
          }
        ].map(icon => (
          <a
            key={icon.key}
            aria-label={icon.label}
            className="font-bold p-2 no-underline text-white text-lg"
            href={icon.href}
          >
            <i className="pr-2">
              <FontAwesomeIcon icon={icon.faIcon} />
            </i>
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
