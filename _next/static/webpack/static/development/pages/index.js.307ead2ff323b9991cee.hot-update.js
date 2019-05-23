webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index_sass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.sass */ "./pages/index.sass");
/* harmony import */ var _index_sass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_sass__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var postprocessing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! postprocessing */ "./node_modules/postprocessing/build/postprocessing.esm.js");
/* harmony import */ var three_fbxloader_offical__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! three-fbxloader-offical */ "./node_modules/three-fbxloader-offical/index.js");
/* harmony import */ var three_fbxloader_offical__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(three_fbxloader_offical__WEBPACK_IMPORTED_MODULE_13__);








var _jsxFileName = "D:\\webdev\\poisonapple\\pages\\index.js";







var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(_default, _React$Component);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var container, fbx, scene, composer, camera, hemisphere, sun, ambient, pointlight, pointlightBack, plane, apple, scanlineEffect, noiseEffect, chromaticAberrationEffect, effectPass, clock, animate;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                container = document.querySelector(".".concat(_index_sass__WEBPACK_IMPORTED_MODULE_9___default.a.background));
                fbx = new three_fbxloader_offical__WEBPACK_IMPORTED_MODULE_13___default.a();
                scene = new three__WEBPACK_IMPORTED_MODULE_11__["Scene"]();
                composer = new postprocessing__WEBPACK_IMPORTED_MODULE_12__["EffectComposer"](new three__WEBPACK_IMPORTED_MODULE_11__["WebGLRenderer"]({
                  logarithmicDepthBuffer: true,
                  antialias: true
                }));
                camera = new three__WEBPACK_IMPORTED_MODULE_11__["PerspectiveCamera"](50, container.offsetWidth / container.offsetHeight, 0.1, 1000);
                hemisphere = new three__WEBPACK_IMPORTED_MODULE_11__["HemisphereLight"](0xd9efff, 0x313131, 0.8);
                sun = new three__WEBPACK_IMPORTED_MODULE_11__["DirectionalLight"](0xE0D5FF, 1);
                ambient = new three__WEBPACK_IMPORTED_MODULE_11__["AmbientLight"](0x303030);
                pointlight = new three__WEBPACK_IMPORTED_MODULE_11__["PointLight"](0xffffff, 0.4, 100);
                pointlightBack = new three__WEBPACK_IMPORTED_MODULE_11__["PointLight"](0xffffff, 0.3, 100);
                plane = new three__WEBPACK_IMPORTED_MODULE_11__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_11__["PlaneBufferGeometry"](40, 40, 40, 40), new three__WEBPACK_IMPORTED_MODULE_11__["MeshBasicMaterial"]({
                  color: 0x373737
                }));
                _context.next = 13;
                return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve) {
                  return fbx.load('static/apple.fbx', resolve);
                });

              case 13:
                apple = _context.sent;
                apple.traverse(function (child) {
                  if (!child.material) return;
                  child.material = new three__WEBPACK_IMPORTED_MODULE_11__["MeshStandardMaterial"]({
                    color: {
                      "Pink": 0xfe567f,
                      "Stem": 0x72624a,
                      "Leaf": 0x65fe82,
                      "Blue": 0x80d1fe
                    }[child.name],
                    roughness: 1
                  });
                });
                composer.setSize(container.offsetWidth * 2, container.offsetHeight * 2);
                composer.renderer.setSize(container.offsetWidth, container.offsetHeight);
                camera.position.z = 6;
                camera.position.y = 0.1;
                apple.scale.set(0.01, 0.01, 0.01);
                apple.rotation.set(0.5, -0.5, 0);
                sun.position.set(0, 0.5, 4);
                plane.position.set(0, 0, -4);
                pointlight.position.set(-4, 0, 12);
                pointlightBack.position.set(3, 3, 2);
                apple.position.set(0, -0.7, 0);
                sun.castShadow = true;
                scene.add(ambient, hemisphere, sun, pointlight, pointlightBack, apple, plane);
                scanlineEffect = new postprocessing__WEBPACK_IMPORTED_MODULE_12__["ScanlineEffect"]({
                  blendFunction: postprocessing__WEBPACK_IMPORTED_MODULE_12__["BlendFunction"].ALPHA,
                  density: 1.3
                });
                noiseEffect = new postprocessing__WEBPACK_IMPORTED_MODULE_12__["NoiseEffect"]({
                  blendFunction: postprocessing__WEBPACK_IMPORTED_MODULE_12__["BlendFunction"].COLOR_DODGE
                });
                chromaticAberrationEffect = new postprocessing__WEBPACK_IMPORTED_MODULE_12__["ChromaticAberrationEffect"]({
                  offset: new three__WEBPACK_IMPORTED_MODULE_11__["Vector2"](0, 0)
                });
                window.addEventListener('click', function () {
                  return window.onmousemove = function (event) {
                    var clientX = event.clientX,
                        clientY = event.clientY;
                    chromaticAberrationEffect.offset.x = (clientX - window.innerWidth / 2) * -0.000018;
                    chromaticAberrationEffect.offset.y = (clientY - window.innerHeight / 2) * -0.000022;
                  };
                });
                scanlineEffect.blendMode.opacity.value = 0.02;
                noiseEffect.blendMode.opacity.value = 0.08;
                effectPass = new postprocessing__WEBPACK_IMPORTED_MODULE_12__["EffectPass"](camera, scanlineEffect, noiseEffect, chromaticAberrationEffect);
                effectPass.renderToScreen = true;
                composer.addPass(new postprocessing__WEBPACK_IMPORTED_MODULE_12__["RenderPass"](scene, camera));
                composer.addPass(effectPass);
                clock = new three__WEBPACK_IMPORTED_MODULE_11__["Clock"]();

                animate = function animate() {
                  requestAnimationFrame(animate);
                  composer.render(clock.getDelta());
                };

                animate();
                setInterval(function () {
                  return apple.rotation.y += 0.01;
                }, 20);
                document.querySelector(".".concat(_index_sass__WEBPACK_IMPORTED_MODULE_9___default.a.background)).appendChild(composer.renderer.domElement);

              case 43:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "nav",
    value: function nav() {
      var html = [];

      for (var _i = 0, _arr = ['Projects', 'Contact', 'Social', 'About']; _i < _arr.length; _i++) {
        var i = _arr[_i];
        html.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          key: i,
          href: '/' + i.toLowerCase(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, i), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: "/static/icons/".concat(i.toLowerCase(), ".svg"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }))));
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _index_sass__WEBPACK_IMPORTED_MODULE_9___default.a.navigation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, html);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _index_sass__WEBPACK_IMPORTED_MODULE_9___default.a.home,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _index_sass__WEBPACK_IMPORTED_MODULE_9___default.a.background,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "Andres", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }), "Sweeney-", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }), "Rios"), this.nav(), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: _index_sass__WEBPACK_IMPORTED_MODULE_9___default.a.powered_by,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://nextjs.org/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/icons/nextjs.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://threejs.org/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/icons/threejs.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.307ead2ff323b9991cee.hot-update.js.map