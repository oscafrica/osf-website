import React from "react";

function Footer() {
    return (
        <footer className="bg-blue-700">
        <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
        {[
            {
              route: `https://git.io/Jemzv`,
              title: `Code of Conduct`
            },
            {
              route: `https://oscafrica.org/community`,
              title: `Community`
            },
            {
              route: `https://opencollective.com/osca`,
              title: `Open Collective`
            },
            {
              route: `https://blog.oscafrica.org`,
              title: `Blog`
            }
          ].map(link => (
            <a
              className="block md:inline-block mt-4 md:mt-0 md:ml-0 no-underline text-white"
              key={link.title}
              href={link.route}
            >
              {link.title}
            </a>
          ))}

          <p>
          <a
              className="font-bold p-2 no-underline text-white"
              href="/"
            >
              E
            </a>
            <a
              className="font-bold p-2 no-underline text-white"
              href="/"
            >
              T
            </a>
            <a
              className="font-bold p-2 no-underline text-white"
              href="/"
            >
              F
            </a>
            <a
              className="font-bold p-2 no-underline text-white"
              href="/"
            >
              G
            </a>
          </p>
        </nav>
      </footer>
    )
}

export default Footer;