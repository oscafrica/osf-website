"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _router = require("@reach/router");

var _gatsbyReactRouterScroll = require("gatsby-react-router-scroll");

var _navigation = require("./navigation");

var _apiRunnerBrowser = require("./api-runner-browser");

var _loader = _interopRequireDefault(require("./loader"));

var _jsonStore = _interopRequireDefault(require("./json-store"));

var _ensureResources = _interopRequireDefault(require("./ensure-resources"));

var _errorOverlayHandler = require("./error-overlay-handler");

var _jsxFileName = "/Users/kastens/Sites/gatsby/packages/gatsby/cache-dir/root.js";

if (window.__webpack_hot_middleware_reporter__ !== undefined) {
  const overlayErrorID = `webpack`; // Report build errors

  window.__webpack_hot_middleware_reporter__.useCustomOverlay({
    showProblems(type, obj) {
      if (type !== `errors`) {
        (0, _errorOverlayHandler.clearError)(overlayErrorID);
        return;
      }

      (0, _errorOverlayHandler.reportError)(overlayErrorID, obj[0]);
    },

    clear() {
      (0, _errorOverlayHandler.clearError)(overlayErrorID);
    }

  });
}

(0, _navigation.init)(); // In gatsby v2 if Router is used in page using matchPaths
// paths need to contain full path.
// For example:
//   - page have `/app/*` matchPath
//   - inside template user needs to use `/app/xyz` as path
// Resetting `basepath`/`baseuri` keeps current behaviour
// to not introduce breaking change.
// Remove this in v3

const RouteHandler = props => _react.default.createElement(_router.BaseContext.Provider, {
  value: {
    baseuri: `/`,
    basepath: `/`
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: void 0
}, _react.default.createElement(_jsonStore.default, (0, _extends2.default)({}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: void 0
})));

class LocationHandler extends _react.default.Component {
  render() {
    let {
      location
    } = this.props;

    if (!_loader.default.isPageNotFound(location.pathname)) {
      return _react.default.createElement(_ensureResources.default, {
        location: location,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, locationAndPageResources => _react.default.createElement(_navigation.RouteUpdates, {
        location: location,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, _react.default.createElement(_gatsbyReactRouterScroll.ScrollContext, {
        location: location,
        shouldUpdateScroll: _navigation.shouldUpdateScroll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, _react.default.createElement(_router.Router, {
        basepath: __BASE_PATH__,
        location: location,
        id: "gatsby-focus-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, _react.default.createElement(RouteHandler, (0, _extends2.default)({
        path: encodeURI(locationAndPageResources.pageResources.page.matchPath || locationAndPageResources.pageResources.page.path)
      }, this.props, locationAndPageResources, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }))))));
    }

    const dev404PageResources = _loader.default.loadPageSync(`/dev-404-page`);

    const real404PageResources = _loader.default.loadPageSync(`/404.html`);

    let custom404;

    if (real404PageResources) {
      custom404 = _react.default.createElement(_jsonStore.default, (0, _extends2.default)({}, this.props, {
        pageResources: real404PageResources,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }));
    }

    return _react.default.createElement(_navigation.RouteUpdates, {
      location: location,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, _react.default.createElement(_router.Router, {
      basepath: __BASE_PATH__,
      location: location,
      id: "gatsby-focus-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, _react.default.createElement(RouteHandler, {
      path: location.pathname,
      location: location,
      pageResources: dev404PageResources,
      custom404: custom404,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    })));
  }

}

const Root = () => _react.default.createElement(_router.Location, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118
  },
  __self: void 0
}, locationContext => _react.default.createElement(LocationHandler, (0, _extends2.default)({}, locationContext, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119
  },
  __self: void 0
}))); // Let site, plugins wrap the site e.g. for Redux.


const WrappedRoot = (0, _apiRunnerBrowser.apiRunner)(`wrapRootElement`, {
  element: _react.default.createElement(Root, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: void 0
  })
}, _react.default.createElement(Root, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127
  },
  __self: void 0
}), ({
  result,
  plugin
}) => {
  return {
    element: result
  };
}).pop();

var _default = () => WrappedRoot;

exports.default = _default;