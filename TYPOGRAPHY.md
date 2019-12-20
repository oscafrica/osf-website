# OSCA Festival Website Typography

OSCA Festival Website typography is based on the [styleguide](https://www.figma.com/file/vO0aThJUcmB7VhsxW66q7h/Style-guide?node-id=4:98) provided by the design team.

## Font sizes

The custom classes are used to override tailwind custom font sizes and can be uses by attaching the classes below into the className of a jsx element. E.g

    <p  className="text-h1">this will show a font size of 36px</p>

| CSS classes  | font size |
| ------------ | --------- |
| `.text-h1`   | 36px      |
| `.text-h2`   | 32px      |
| `.text-h3`   | 28px      |
| `.text-h4`   | 24px      |
| `.text-h5`   | 20px      |
| `.text-h6`   | 16px      |
| `.text-base` | 16px      |

The typography levels are collected into the `tailwind.config.js` file which is used to generate the CSS.

## Font Family and Styles

### Font families

There are curreentl 4 font families on the website and it can be used by adding the respective class name. E.g
`<p className="font-avenir">Bold</p>` give the paragraph an avenir font family

| Font family  | CSS classes          |
| ------------ | -------------------- |
| Avenir Roman | `.font-avenir`       |
| Avenir Black | `.font-avenir-black` |
| Avenir Book  | `.font-avenir-book`  |

### Font styles

each font has its own font style which are in the table below. Use by adding class to the element `<p className="font-bold">Bold</p>` gives a bold paragraph. This applies to all font styles

| Font Style    | CSS classes             |
| ------------- | ----------------------- |
| regular       | `.font-normal`          |
| italic        | `.italic`               |
| light         | `.font-light`           |
| light italic  | `.font-light` `.italic` |
| medium italic | `.font-medium` `italic` |
| bold          | `.font-bold`            |
| bold italic   | `.font-bold` `.italic`  |
