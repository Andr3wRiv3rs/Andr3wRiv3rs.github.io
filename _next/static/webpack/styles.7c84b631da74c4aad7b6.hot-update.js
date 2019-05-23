webpackHotUpdate("styles",{

/***/ "./pages/index.sass":
/*!**************************!*\
  !*** ./pages/index.sass ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"background":"_2uO0rGXrPINJpVBPpzkYvM","home":"_2u10LZfH0C6t9ekFhGgPm3","social":"_29VEMdxcCx3LZSYJxWVcRE","contact":"_1Qrx-e2R-2dQBVAfqXWyQn","navigation":"_2gW2cvZd7Yx_EI3cBd9l57","powered_by":"_2S2Ojzi5gaBXX4Y2uzAmwd"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1558585692384");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.7c84b631da74c4aad7b6.hot-update.js.map