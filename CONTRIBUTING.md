# Contributors Guide

Hey, there! 👋 We welcome all kinds of contributions, please feel free to contribute and/or ask questions.

To get started:

- Ensure you read the [Getting Started](https://github.com/oscommunityafrica/osf-website#getting-started) && [Installation](https://github.com/oscommunityafrica/osf-website#installation-guide) guide.

- Join our [Discord Server](https://discord.gg/YmzrTvt) and subscribe to the #engineering channel.

- Check the [issues](https://github.com/oscommunityafrica/osf-website/issues) for open tickets and request to be assigned to whichever you want to work on.

- Ensure to explain the estimated duration it would take you to complete the task upon assignment.

- Feel free to also open issue(s) if you want to work on something else, propose an idea or report a bug.

- We use [commitizen](https://github.com/commitizen/cz-cli) on this project, ensure to read the docs if you are not familar with commitizen.

> When you commit with Commitizen, you'll be prompted to fill out any required commit fields at commit time.

- [Create a pull request](https://help.github.com/articles/creating-a-pull-request/) and ensure to follow the PULL REQUEST TEMPLATE

- Wait for a review, you will be notified if your PR is ready to be merged or still needs some modifications or clarifications.

- Once merged, feel free and pick another ticket :tada:

- We recognize contributors in a way that rewards each and every contribution, not just code. Check out the reward [Emoji keys](https://allcontributors.org/docs/en/emoji-key).

## Tech Stacks

> A tech stack is the set of technologies an organization uses to build a web or mobile application. It is a combination of programming languages, frameworks, libraries, patterns, servers, design tools, and tools used by its developers.

- 🌈 [Figma](https://figma.com): For designing common reusable UI components, prototypes and collaboration.
- 📚 [Storybook](http://storybook.js.org/): For developing UI components in isolation
  - 📝 [Storysource](https://github.com/storybookjs/storybook/tree/master/addons/storysource): Addon to view story code to paste it in your project
  - 🔍 [Viewport](https://github.com/storybookjs/storybook/tree/release/3.4/addons/viewport): Addon to allow stories to be displayed in different sizes and layouts in Storybook
  - 📕 [Docs](https://github.com/storybookjs/storybook/tree/master/addons/docs): Addon for automatic documentation generation from stories
- ⚛️ [Gatsby](https://gatsbyjs.org) [React + GraphQL + Webpack]: For building declarative component-centric UI and static websites
- 🖌️ [Tailwindcss](https://tailwindcss.com/): For building rapidly custom designs
- 💥 [PostCSS](https://postcss.org/): For transforming CSS with JavaScript
- ✨ [Prettier](https://prettier.io/) for automatic code formatting
- 🚥 [CircleCI](https://circleci.com/): For continuous integration
- 🃏 [Jest](https://jestjs.io/): For unit testing components
- ✅ [Cypress](https://www.cypress.io/): For JavaScript e2e testing
- 📐 [ESLint](https://eslint.org/): For JavaScript linting
- 📦 [npm](https://www.npmjs.com/): For distributing JavaScript libraries
- 🗃️ [GitHub](https://github.com): Hosting service for version control
- 🚀 [Netlify](https://www.netlify.com/): For fast & continuous deployment
- 🛠 [Commitizen](https://github.com/commitizen/cz-cli): Command line utility tool for git commits

## Conventions

> Conventions include generic patterns that ensure that written code adheres to certain formatting conventions.

### Code

- Tabs or two-space indentation
- Use shorthand for conditional statements
- Always open braces on the same line as the previous statement and close braces on the same indent as the original function like so:

```js
function textComponent() {
  return {
    name: "OSCA"
  };
}
```

### Naming

- Constructor functions should use the TitleCase
- Variables, directories and methods should use the camelCase
- Variables or elements with multiple words should always use an underscore between words.

```js
const user_params = null;
```

- Private methods should start with a leading underscore to separate them from public methods

```js
const _inputType = inputType;
```

- Abbreviations should be avoided please to avoid confusion
- Comments should include enough information about what a part of code is supposed to do.

```js
// Define default props of the TextBox component
TextBox.defaultProps = {
  className: "",
  disabled: false,
  inputType: "text"
};
```

### Styling

This project uses the [BEM](https://en.bem.info) Methodology with camelCase style. Read the start guide [here](https://en.bem.info/methodology/quick-start/)

> BEM (Block, Element, Modifier) is a component-based approach to web development. The idea behind it is to divide the user interface into independent blocks

Naming Rules:

```css
blockName__elementName_modifierName_modifierValue
```

- Names are written in lowercase Latin letters.
- Each word inside a name begins with an uppercase letter.
- The block name defines the namespace for its elements and modifiers.
- The element name is separated from the block name by a double underscore (\_\_).
- The modifier name is separated from the block or element name by a single underscore (\_).
- The modifier value is separated from the modifier name by a single underscore (\_).
- For boolean modifiers, the value is not included in the name.

---

## Financial contributions

We also welcome financial contributions in full transparency on our [open collective](https://opencollective.com/osca).
Anyone can file an expense. If the expense makes sense for the development of the community, it will be "merged" in the ledger of our open collective by the core contributors and the person who filed the expense will be reimbursed.

## Credits

### Financial Contributors

Become a financial contributor and help us sustain our community. [[Contribute](https://opencollective.com/osca/contribute)]

#### Individuals

<a href="https://opencollective.com/osca"><img src="https://opencollective.com/osca/individuals.svg?width=890"></a>

#### Organizations

Support this project with your organization. Your logo will show up here with a link to your website. [[Contribute](https://opencollective.com/osca/contribute)]

<a href="https://opencollective.com/osca/organization/0/website"><img src="https://opencollective.com/osca/organization/0/avatar.svg"></a>
<a href="https://opencollective.com/osca/organization/1/website"><img src="https://opencollective.com/osca/organization/1/avatar.svg"></a>
<a href="https://opencollective.com/osca/organization/2/website"><img src="https://opencollective.com/osca/organization/2/avatar.svg"></a>
<a href="https://opencollective.com/osca/organization/3/website"><img src="https://opencollective.com/osca/organization/3/avatar.svg"></a>
<a href="https://opencollective.com/osca/organization/4/website"><img src="https://opencollective.com/osca/organization/4/avatar.svg"></a>
<a href="https://opencollective.com/osca/organization/5/website"><img src="https://opencollective.com/osca/organization/5/avatar.svg"></a>
<a href="https://opencollective.com/osca/organization/6/website"><img src="https://opencollective.com/osca/organization/6/avatar.svg"></a>
<a href="https://opencollective.com/osca/organization/7/website"><img src="https://opencollective.com/osca/organization/7/avatar.svg"></a>
<a href="https://opencollective.com/osca/organization/8/website"><img src="https://opencollective.com/osca/organization/8/avatar.svg"></a>
<a href="https://opencollective.com/osca/organization/9/website"><img src="https://opencollective.com/osca/organization/9/avatar.svg"></a>
