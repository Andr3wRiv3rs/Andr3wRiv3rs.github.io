webpackHotUpdate("styles",{

/***/ "./pages/projects/index.sass":
/*!***********************************!*\
  !*** ./pages/projects/index.sass ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"projects":"_1UricrzVPY7DasPvl46kan","project":"_3WfCpp5Gymy2H9CY6TVBOy","screenshots":"_15xjgnntrOQYjRXk3wRIZ4","screenshot":"_1nf-9aSi8IVLjJbgRvajzJ","info":"_3-jWAAOrHIj0u5_U2L_-mN","project_link":"_3RDirZGct2iGX0lgjGgE5U","handle":"_2WWgapZHLNoRreoZT3xZD4","link":"_3zq_LcmRhKaKAwdJEQw9mK"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1558299222124");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.cbcb1d955c0b533d9b65.hot-update.js.map