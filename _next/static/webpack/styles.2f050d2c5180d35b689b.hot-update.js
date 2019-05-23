webpackHotUpdate("styles",{

/***/ "./pages/about/index.sass":
/*!********************************!*\
  !*** ./pages/about/index.sass ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"about":"_1kScm3A4fJ3wcsqXqO2rIP","info":"_1dgAwsMvissgJTxUb883ZB","contact":"Z2TpVqN3rdniWfUvwnGnS","skills":"_2JCtPyeWe5ihXbuXYcQmX"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1558582088156");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.2f050d2c5180d35b689b.hot-update.js.map