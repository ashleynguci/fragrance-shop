webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.2f02230d498381a0c430.hot-update.js.map