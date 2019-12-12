(this["webpackJsonpquanturi-layout"] = this["webpackJsonpquanturi-layout"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styling/sensorList.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styling/sensorList.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".sensor-list {\n  position: absolute;\n  left: -180px;\n  top: 0px;\n  border: 1px solid black;\n  width: 13.5%;\n  z-index: 10;\n  height: 60%;\n  padding: 15px;\n  padding-top: 0;\n  font-size: 13px;\n  box-sizing: border-box;\n  background-color: #fff;\n  line-height: 2.3;\n  overflow: scroll;\n}\nli {\n  list-style-type: none;\n  padding: 4px;\n  padding-bottom: 0px;\n}\n.button {\n  display: none;\n}\n.button-active {\n  display: inline-block;\n}\n\nli:hover .button {\n  display: inline-block;\n  color: green;\n  font-weight: 500;\n  margin-left: 10px;\n}\nli:hover {\n  background-color: gray;\n}\n.list-active {\n  background-color: rgba(\n    169,\n    169,\n    169,\n    0.4\n  );\n}\n.square {\n  height: 18px;\n  width: 18px;\n  background-color: yellow;\n  display: inline-block;\n  margin-right: 8px;\n}\nh4 {\n  margin: 10px;\n  font-size: 18px;\n}\n", ""]);



/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.js */ "./src/Layout.js");
/* harmony import */ var _SensorList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SensorList.js */ "./src/SensorList.js");
var _jsxFileName = "/Users/ashleyng/Documents/quanturi-layout/src/App.js";

 // import BootstrapSwitchButton from 'bootstrap-switch-button-react';
// import styled from "styled-components";

 // const Wrapper = styled.div`
// position:absolute;
// right:100px;
// top: 50px;
// `

class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      modeOn: false
    };

    this.turnModeOn = () => {
      this.setState({
        modeOn: true
      });
    };

    this.turnModeOff = () => {
      this.setState({
        modeOn: false
      });
    };
  }

  render() {
    const _this$state$modeOn = this.state.modeOn,
          modeOn = _this$state$modeOn === void 0 ? false : _this$state$modeOn;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        position: "relative",
        left: "300px",
        top: "50px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SensorList_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      turnModeOn: this.turnModeOn,
      turnModeOff: this.turnModeOff,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      mode: this.state.modeOn,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      style: {
        position: "absolute",
        left: "600px",
        top: "5px",
        zIndex: "9",
        fontSize: "20px"
      },
      onClick: () => this.setState(state => ({
        modeOn: !state.modeOn
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, modeOn ? "modeOn" : "modeOff")));
  }

}

/***/ }),

/***/ "./src/Layout.js":
/*!***********************!*\
  !*** ./src/Layout.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three_dragcontrols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three-dragcontrols */ "./node_modules/three-dragcontrols/lib/index.module.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
var _jsxFileName = "/Users/ashleyng/Documents/quanturi-layout/src/Layout.js";



 // import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

const style = {
  height: 700,
  position: "relative",
  width: 800 // we can control scene size by setting container dimensions

};
class Layout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.sceneSetup = () => {
      // get container dimensions and use them for scene sizing
      const width = this.el.clientWidth;
      const height = this.el.clientHeight;
      this.scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
      this.scene.background = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xf0f0f0);
      this.camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](45, // fov = field of view
      width / height, // aspect ratio
      1, // near plane
      10000 // far plane
      );
      this.camera.position.set(0, 1500, 0);
      this.camera.lookAt(0, 0, 0); // is used here to set some distance from a cube that is located at z = 0
      // OrbitControls allow a camera to orbit around the object

      this.controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__["OrbitControls"](this.camera, this.el);
      this.controls.enableRotate = false; // this.controls.mouseButtons = {
      //     LEFT: THREE.MOUSE.PAN, // now you can move the object with left mouse (default right mouse)
      // }

      this.renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]({
        antialias: true
      });
      this.renderer.setSize(width, height);
      this.el.appendChild(this.renderer.domElement); // mount using React ref
    };

    this.lightSetup = () => {
      const lights = [];
      lights[0] = new three__WEBPACK_IMPORTED_MODULE_2__["AmbientLight"](0x606060);
      lights[1] = new three__WEBPACK_IMPORTED_MODULE_2__["DirectionalLight"](0xffffff);
      lights[1].position.set(1, 2.5, 1).normalize();
      this.scene.add(lights[0]);
      this.scene.add(lights[1]);
    };

    this.addCustomObject = () => {
      // hoverbox helpers
      const hoverGeo = new three__WEBPACK_IMPORTED_MODULE_2__["BoxBufferGeometry"](50, 50, 50);
      this.hoverMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({
        color: 0xff0000,
        opacity: 0.5,
        transparent: true
      });
      this.hoverMesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](hoverGeo, this.hoverMaterial);
      this.scene.add(this.hoverMesh); // cubes

      this.objects = [];
      this.cubeGeo = new three__WEBPACK_IMPORTED_MODULE_2__["BoxBufferGeometry"](50, 50, 50);
      this.cubeMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshLambertMaterial"]({
        color: Math.random() * 0xffffff,
        opacity: 0.8,
        transparent: true
      }); // grid

      const gridHelper = new three__WEBPACK_IMPORTED_MODULE_2__["GridHelper"](1000, 20); // gridHelper.position.x = 100;

      this.scene.add(gridHelper); //

      this.raycaster = new three__WEBPACK_IMPORTED_MODULE_2__["Raycaster"]();
      this.mouse = new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"]();
      const geometry = new three__WEBPACK_IMPORTED_MODULE_2__["PlaneBufferGeometry"](1000, 1000); //equal to

      geometry.rotateX(-Math.PI / 2);
      this.plane = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({
        visible: false
      }));
      this.scene.add(this.plane);
      this.objects.push(this.plane);
    };

    this.addTestingObject = () => {
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      } //var array = ["T123", "T32", "T45", "T455", "T23"];


      let geometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxBufferGeometry"](50, 50, 50);

      const addSensor = () => {
        var object = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, new three__WEBPACK_IMPORTED_MODULE_2__["MeshLambertMaterial"]({
          color: Math.random() * 0xffffff
        }));
        object.position.x = getRandomInt(20) * 50 - 500; //object.position.y = Math.random() * 600 - 300;

        object.position.z = getRandomInt(20) * 50 - 500;
        object.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);
        object.castShadow = true;
        object.receiveShadow = true;
        this.scene.add(object); // var earthDiv = document.createElement('div');
        // earthDiv.className = 'label';
        // earthDiv.textContent = array[i];
        // earthDiv.style.marginTop = '-0.3em';
        // var earthLabel = new CSS2DObject(earthDiv);
        // earthLabel.position.set(0, 1, 0);
        // object.add(earthLabel);
        ////////////////LABELS

        const root = new three__WEBPACK_IMPORTED_MODULE_2__["Object3D"]();
        this.addLabel(root, 32, "T34");
        this.scene.add(root);
        console.log(root);
        this.objects.push(object);
      };

      addSensor();
    };

    this.startAnimationLoop = mode => {
      if (mode === false) {
        this.hoverMaterial.opacity = 0;
        const control = new three_dragcontrols__WEBPACK_IMPORTED_MODULE_1__["default"](this.objects, this.camera, this.renderer.domElement);
        control.addEventListener("dragstart", function (event) {});
        control.addEventListener("dragend", function (event) {
          event.object.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);
        });
      } else if (mode === true) {
        this.hoverMaterial.opacity = 0.5;
        window.addEventListener("mousemove", this.onDocumentMouseMove);
        window.addEventListener("mousedown", this.onDocumentMouseDown);
      } // The window.requestAnimationFrame() method tells the browser that you wish to perform
      // an animation and requests that the browser call a specified function
      // to update an animation before the next repaint


      this.renderer.render(this.scene, this.camera); // this.labelRenderer.render(this.scene, this.camera);

      this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
    };

    this.handleWindowResize = () => {
      const width = this.el.clientWidth;
      const height = this.el.clientHeight;
      this.renderer.setSize(width, height);
      this.camera.aspect = width / height; // Note that after making changes to most of camera properties you have to call
      // .updateProjectionMatrix for the changes to take effect.

      this.camera.updateProjectionMatrix();
    };

    this.onDocumentMouseMove = event => {
      event.preventDefault();
      this.rect = this.renderer.domElement.getBoundingClientRect();
      this.mouse.set((event.clientX - this.rect.left) / this.rect.width * 2 - 1, -(event.clientY - this.rect.top) / this.rect.height * 2 + 1);
      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObjects(this.objects);

      if (intersects.length > 0) {
        var intersect = intersects[0];
        this.hoverMesh.position.copy(intersect.point).add(intersect.face.normal);
        this.hoverMesh.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);
      }

      this.renderer.render(this.scene, this.camera);
    };

    this.onDocumentMouseDown = event => {
      event.preventDefault();
      this.mouse.set((event.clientX - this.rect.left) / this.rect.width * 2 - 1, -(event.clientY - this.rect.top) / this.rect.height * 2 + 1);
      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObjects(this.objects);

      if (intersects.length > 0) {
        const intersect = intersects[0]; // delete cube

        if (this.isShiftDown) {
          if (intersect.object !== this.plane) {
            this.scene.remove(intersect.object);
            this.objects.splice(this.objects.indexOf(intersect.object), 1);
          } // create cube

        } else {
          const voxel = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](this.cubeGeo, this.cubeMaterial);
          voxel.position.copy(intersect.point).add(intersect.face.normal);
          voxel.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);

          if (intersect.object !== this.plane) {
            alert("A sensor has been placed");
          } else {
            this.scene.add(voxel);
            this.objects.push(voxel);
          }

          console.log(this.objects);
        }

        this.renderer.render(this.scene, this.camera);
      }
    };

    this.onDocumentKeyDown = event => {
      switch (event.keyCode) {
        case 16:
          this.isShiftDown = true;
          break;
      }
    };

    this.onDocumentKeyUp = event => {
      switch (event.keyCode) {
        case 16:
          this.isShiftDown = false;
          break;
      }
    };
  }

  componentDidMount() {
    this.sceneSetup();
    this.lightSetup();
    this.addCustomObject();
    this.addTestingObject();
    this.startAnimationLoop(false);
    console.log("didmount", this.props.mode);
    window.addEventListener("resize", this.handleWindowResize);
    window.addEventListener("keydown", this.onDocumentKeyDown);
    window.addEventListener("keyup", this.onDocumentKeyUp);
  }

  componentDidUpdate() {
    console.log(this.el.querySelector("canvas"));
    window.removeEventListener("mousemove", this.onDocumentMouseMove);
    window.removeEventListener("mousedown", this.onDocumentMouseDown);
    this.startAnimationLoop(this.props.mode);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    this.controls.dispose();
  }

  addLabel(root, size, name) {
    const labelGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["PlaneBufferGeometry"](1, 1);
    const canvas = this.makeLabelCanvas(size, name);
    const texture = new three__WEBPACK_IMPORTED_MODULE_2__["CanvasTexture"](canvas);
    texture.minFilter = three__WEBPACK_IMPORTED_MODULE_2__["LinearFilter"];
    texture.wrapS = three__WEBPACK_IMPORTED_MODULE_2__["ClampToEdgeWrapping"];
    texture.wrapT = three__WEBPACK_IMPORTED_MODULE_2__["ClampToEdgeWrapping"];
    const labelMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({
      map: texture,
      side: three__WEBPACK_IMPORTED_MODULE_2__["DoubleSide"],
      transparent: true
    });
    const label = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](labelGeometry, labelMaterial);
    root.add(label);
  }

  makeLabelCanvas(size, name) {
    const borderSize = 2;
    const ctx = document.createElement("canvas").getContext("2d");
    const font = "".concat(size, "px bold sans-serif");
    ctx.font = font; // measure how long the name will be

    const doubleBorderSize = borderSize * 2;
    const width = ctx.measureText(name).width + doubleBorderSize;
    const height = size + doubleBorderSize;
    ctx.canvas.width = width;
    ctx.canvas.height = height; // need to set font again after resizing canvas

    ctx.font = font;
    ctx.textBaseline = "top";
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "white";
    ctx.fillText(name, borderSize, borderSize);
    console.log(ctx.fillText.name);
    return ctx.canvas;
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: style,
      ref: ref => this.el = ref,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 505
      },
      __self: this
    });
  }

}

/***/ }),

/***/ "./src/SensorList.js":
/*!***************************!*\
  !*** ./src/SensorList.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SensorList; });
/* harmony import */ var _Users_ashleyng_Documents_quanturi_layout_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styling_sensorList_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styling/sensorList.css */ "./src/styling/sensorList.css");
/* harmony import */ var _styling_sensorList_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styling_sensorList_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/ashleyng/Documents/quanturi-layout/src/SensorList.js";


function SensorList({
  turnModeOn,
  turnModeOff
}) {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
        _useState2 = Object(_Users_ashleyng_Documents_quanturi_layout_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        activeSensorList = _useState2[0],
        setActiveSensorList = _useState2[1];

  const sensor = ["T123", "T32", "T45", "T455", "T23 my sensor", "T240", "T231", "T237", "T232", "T231", "T237", "T232"];

  const addToActiveList = index => {
    turnModeOn();
    setActiveSensorList(activeSensorList.concat(sensor[index]));
  };

  const removeFromActiveList = index => {
    turnModeOff();
    setActiveSensorList(activeSensorList.filter(item => item !== sensor[index]));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "sensor-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, sensor.length, " Sensors"), sensor.map((i, index) => activeSensorList.includes(i) ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    id: index,
    key: index,
    className: "list-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), " ", i, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    id: index,
    onClick: () => {
      removeFromActiveList(index);
    },
    className: "button-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Remove"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    id: index,
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), " ", i, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    id: index,
    onClick: () => {
      addToActiveList(index);
    },
    className: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Place"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/ashleyng/Documents/quanturi-layout/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/styling/sensorList.css":
/*!************************************!*\
  !*** ./src/styling/sensorList.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./sensorList.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styling/sensorList.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./sensorList.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styling/sensorList.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./sensorList.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styling/sensorList.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ashleyng/Documents/quanturi-layout/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/ashleyng/Documents/quanturi-layout/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map