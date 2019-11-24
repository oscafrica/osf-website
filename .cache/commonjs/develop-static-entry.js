"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _lodash = require("lodash");

var _apiRunnerSsr = _interopRequireDefault(require("./api-runner-ssr"));

var _jsxFileName = "/Users/kastens/Sites/gatsby/packages/gatsby/cache-dir/develop-static-entry.js";

// import testRequireError from "./test-require-error"
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.
const testRequireError = (moduleName, err) => {
  const regex = new RegExp(`Error: Cannot find module\\s.${moduleName}`);
  const firstLine = err.toString().split(`\n`)[0];
  return regex.test(firstLine);
};

let Html;

try {
  Html = require(`../src/html`);
} catch (err) {
  if (testRequireError(`../src/html`, err)) {
    Html = require(`./default-html`);
  } else {
    console.log(`There was an error requiring "src/html.js"\n\n`, err, `\n\n`);
    process.exit();
  }
}

Html = Html && Html.__esModule ? Html.default : Html;

var _default = (pagePath, callback) => {
  let headComponents = [_react.default.createElement("meta", {
    key: "environment",
    name: "note",
    content: "environment=development",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: void 0
  })];
  let htmlAttributes = {};
  let bodyAttributes = {};
  let preBodyComponents = [];
  let postBodyComponents = [];
  let bodyProps = {};
  let htmlStr;

  const setHeadComponents = components => {
    headComponents = headComponents.concat(components);
  };

  const setHtmlAttributes = attributes => {
    htmlAttributes = (0, _lodash.merge)(htmlAttributes, attributes);
  };

  const setBodyAttributes = attributes => {
    bodyAttributes = (0, _lodash.merge)(bodyAttributes, attributes);
  };

  const setPreBodyComponents = components => {
    preBodyComponents = preBodyComponents.concat(components);
  };

  const setPostBodyComponents = components => {
    postBodyComponents = postBodyComponents.concat(components);
  };

  const setBodyProps = props => {
    bodyProps = (0, _lodash.merge)({}, bodyProps, props);
  };

  const getHeadComponents = () => headComponents;

  const replaceHeadComponents = components => {
    headComponents = components;
  };

  const getPreBodyComponents = () => preBodyComponents;

  const replacePreBodyComponents = components => {
    preBodyComponents = components;
  };

  const getPostBodyComponents = () => postBodyComponents;

  const replacePostBodyComponents = components => {
    postBodyComponents = components;
  };

  (0, _apiRunnerSsr.default)(`onRenderBody`, {
    setHeadComponents,
    setHtmlAttributes,
    setBodyAttributes,
    setPreBodyComponents,
    setPostBodyComponents,
    setBodyProps,
    pathname: pagePath
  });
  (0, _apiRunnerSsr.default)(`onPreRenderHTML`, {
    getHeadComponents,
    replaceHeadComponents,
    getPreBodyComponents,
    replacePreBodyComponents,
    getPostBodyComponents,
    replacePostBodyComponents,
    pathname: pagePath
  });

  const htmlElement = _react.default.createElement(Html, { ...bodyProps,
    body: ``,
    headComponents: headComponents.concat([_react.default.createElement("script", {
      key: `io`,
      src: "/socket.io/socket.io.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: void 0
    })]),
    htmlAttributes,
    bodyAttributes,
    preBodyComponents,
    postBodyComponents: postBodyComponents.concat([_react.default.createElement("script", {
      key: `commons`,
      src: "/commons.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: void 0
    })])
  });

  htmlStr = (0, _server.renderToStaticMarkup)(htmlElement);
  htmlStr = `<!DOCTYPE html>${htmlStr}`;
  callback(null, htmlStr);
};

exports.default = _default;