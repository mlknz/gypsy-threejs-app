!function(e){function t(a){if(n[a])return n[a].exports;var o=n[a]={exports:{},id:a,loaded:!1};return e[a].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=n(2),i=a(r),s=n(11),c=a(s),u=n(14),d=function e(){function t(){var e=Math.floor(a.clientWidth*s),t=Math.floor(a.clientHeight*s);a.width===e&&a.height===t||(a.width=e,a.height=t,r.setSize(a.clientWidth,a.clientHeight,!1),d.resize(e,t))}function n(){t(),d.update(p.getDelta()),l.update(),requestAnimationFrame(n)}if(o(this,e),!u())return void(document.body.innerHTML="Unable to initialize WebGL. Your browser may not support it.");var a=document.getElementById("canvas"),r=new THREE.WebGLRenderer({antialias:!0,alpha:!1,canvas:a}),s=window.devicePixelRatio||1;r.setPixelRatio(s);var d=new i.default(r),l=new c.default(r),p=new THREE.Clock;n()};window.app=new d},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(3),s=a(i),c=n(4),u=a(c),d=n(9),l=a(d),p=function(){function e(t){o(this,e),this.renderer=t,this.renderer.setClearColor(s.default.renderer.clearColor,s.default.renderer.clearAlpha),this.renderer.setPixelRatio(s.default.renderer.devicePixelRatio);var n=this.renderer.getContext(),a=n.canvas.clientWidth/n.canvas.clientHeight;this.sceneManager=new u.default,this.camera=new THREE.PerspectiveCamera(60,a,s.default.camera.near,s.default.camera.far),this.controls=new l.default(this.camera,this.renderer.domElement,this.scene),this.controls.resetCameraOrbit(),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=THREE.PCFShadowMap,this.sceneReady=!1,document.addEventListener("sceneReady",this.onSceneReady.bind(this))}return r(e,[{key:"onSceneReady",value:function(){this.sceneReady=!0}},{key:"update",value:function(e){this.sceneReady&&(s.default.time+=e,this.sceneManager.update(e,s.default.time),this.controls.update(e),this.renderer.render(this.sceneManager.scene,this.camera))}},{key:"resize",value:function(e,t){var n=e/t;this.camera.aspect!==n&&(this.camera.aspect=n,this.camera.updateProjectionMatrix())}},{key:"dispose",value:function(){this.controls.dispose()}}]),e}();t.default=p},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={isDebug:"debug"===window.location.hash.substr(1),isIOS:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,useDDSTextures:!0,usePVRTextures:!0,time:0,renderer:{clearColor:5570560,clearAlpha:!0,devicePixelRatio:window.devicePixelRatio||1},camera:{cameraPos:[10,7,12],near:1,far:1400},controls:{minDistance:1,maxDistance:1e3,rotateSpeed:.25}};t.default=n},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(5),c=a(s),u=n(8),d=a(u),l=new Event("sceneReady"),p=function(){function e(){r(this,e),this.scene=new THREE.Scene,this.assetsLoader=new c.default(this.scene),document.addEventListener("assetsLoaded",this.onAssetsLoaded.bind(this)),this.assetsLoader.loadAssets(d.default.assets)}return i(e,[{key:"onAssetsLoaded",value:function(){this.createSceneFromDescription(this.scene),this.cube=this.scene.getObjectByName("Cube");var e=this.scene.getObjectByName("spotLight");e.shadow=new THREE.LightShadow(new THREE.PerspectiveCamera(60,1,1,2500)),e.shadow.bias=1e-4,e.shadow.mapSize.width=1024,e.shadow.mapSize.height=1024,document.dispatchEvent(l)}},{key:"update",value:function(e,t){this.cube.position.x=3*Math.cos(t),this.cube.position.z=3*Math.sin(t),this.cube.rotation.y+=e,this.cube.rotation.z+=e/3}},{key:"createSceneFromDescription",value:function(e){this.addChildrenFromDescription(e,d.default.model.children)}},{key:"addChildrenFromDescription",value:function(e,t){var n=this,a=void 0;t.forEach(function(t){a=n.createObjectFromDescription(t),e.add(a),t.children&&t.children.length>0&&n.addChildrenFromDescription(a,t.children)})}},{key:"createObjectFromDescription",value:function(e){var t=null,n=null,a="Object3D";e.object&&e.object.type?a=e.object.type:e.type&&(a=e.type),e.object&&e.object.args?n=e.object.args:e.args&&(n=e.args);for(var r in n)n.hasOwnProperty(r)&&n[r].type&&"asset/texture"===n[r].type&&(n[r]=this.assetsLoader.assets.textures[n[r].name]);if("asset/json"===a)t=this.assetsLoader.assets.objects[e.name];else if("Mesh"===a||e.object&&e.object.geometry){var i=this.createObjectFromDescription(e.object.geometry),s=null;e.object.material&&(s=this.createObjectFromDescription(e.object.material)),t=new THREE.Mesh(i,s)}else t=n instanceof Array?new(Function.prototype.bind.apply(THREE[a],[null].concat(o(n)))):new THREE[a](n);return t||(t=new THREE.Object3D),e.properties&&this.addObjectProperties(t,e.properties),t}},{key:"addObjectProperties",value:function(e,t){var n=void 0,a=void 0;for(n in t)if(t.hasOwnProperty(n))if(t[n]instanceof Object){e[n]||(e[n]={});for(a in t[n])t[n].hasOwnProperty(a)&&(e[n][a]=t[n][a])}else e[n]=t[n]}}]),e}();t.default=p},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(3),s=a(i),c=new Event("assetsLoaded");window.THREE=THREE,n(6),n(7);var u=function(){function e(t){o(this,e),this.scene=t,this.assets={objects:{},textures:{}},this.objectLoader=new THREE.ObjectLoader,this.textureLoader=new THREE.TextureLoader,this.useDDS=!s.default.isIOS&&s.default.useDDSTextures,this.usePVR=s.default.isIOS&&s.default.usePVRTextures,this.DDSLoader=new THREE.DDSLoader,this.PVRLoader=new THREE.PVRLoader}return r(e,[{key:"loadAssets",value:function(e){var t=this,n=[],a=void 0,o=void 0,r=void 0,i=void 0,s=void 0;e.forEach(function(e){switch(e.type){case"json":o=e.path,i=t.objectLoader,s=t.assets.objects,r=e.name;break;case"texture":if(o=e.path,i=t.textureLoader,s=t.assets.textures,r=e.name,e.path instanceof Array)for(var c=0;c<e.path.length;c++){if(o=e.path[c],t.useDDS&&e.path[c].includes(".dds")){i=t.DDSLoader;break}if(t.usePVR&&e.path[c].includes(".pvr")){i=t.PVRLoader;break}}break;default:throw new Error("unknow asset type in sceneDescription: "+e.type)}a=t.loadEntry(o,s,r,i),n.push(a)}),Promise.all(n).then(function(){document.dispatchEvent(c)})}},{key:"loadEntry",value:function(e,t,n,a){return new Promise(function(o,r){a.load(e,function(e){t[n]=e,o()},function(e){console.log(e.loaded/e.total*100+"% loaded")},function(e){console.log("error while loading model",e),r(e)})})}}]),e}();t.default=u},function(e,t){THREE.DDSLoader=function(){this._parser=THREE.DDSLoader.parse},THREE.DDSLoader.prototype=Object.create(THREE.CompressedTextureLoader.prototype),THREE.DDSLoader.prototype.constructor=THREE.DDSLoader,THREE.DDSLoader.parse=function(e,t){function n(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function a(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}function o(e,t,n,a){for(var o=n*a*4,r=new Uint8Array(e,t,o),i=new Uint8Array(o),s=0,c=0,u=0;u<a;u++)for(var d=0;d<n;d++){var l=r[c];c++;var p=r[c];c++;var h=r[c];c++;var m=r[c];c++,i[s]=h,s++,i[s]=p,s++,i[s]=l,s++,i[s]=m,s++}return i}var r={mipmaps:[],width:0,height:0,format:null,mipmapCount:1},i=542327876,s=131072,c=512,u=1024,d=2048,l=4096,p=8192,h=16384,m=32768,f=4,E=n("DXT1"),b=n("DXT3"),v=n("DXT5"),y=n("ETC1"),R=31,g=0,T=1,w=2,P=3,H=4,C=7,x=20,O=21,D=22,j=23,L=24,M=25,_=26,S=28,k=new Int32Array(e,0,R);if(k[g]!==i)return console.error("THREE.DDSLoader.parse: Invalid magic number in DDS header."),r;if(!k[x]&f)return console.error("THREE.DDSLoader.parse: Unsupported format, must contain a FourCC code."),r;var A,V=k[O],F=!1;switch(V){case E:A=8,r.format=THREE.RGB_S3TC_DXT1_Format;break;case b:A=16,r.format=THREE.RGBA_S3TC_DXT3_Format;break;case v:A=16,r.format=THREE.RGBA_S3TC_DXT5_Format;break;case y:A=8,r.format=THREE.RGB_ETC1_Format;break;default:if(!(32===k[D]&&16711680&k[j]&&65280&k[L]&&255&k[M]&&4278190080&k[_]))return console.error("THREE.DDSLoader.parse: Unsupported FourCC code ",a(V)),r;F=!0,A=64,r.format=THREE.RGBAFormat}r.mipmapCount=1,k[w]&s&&t!==!1&&(r.mipmapCount=Math.max(1,k[C]));var N=k[S];if(r.isCubemap=!!(N&c),r.isCubemap&&(!(N&u)||!(N&d)||!(N&l)||!(N&p)||!(N&h)||!(N&m)))return console.error("THREE.DDSLoader.parse: Incomplete cubemap faces"),r;r.width=k[H],r.height=k[P];for(var U=k[T]+4,B=r.isCubemap?6:1,z=0;z<B;z++)for(var I=r.width,G=r.height,Y=0;Y<r.mipmapCount;Y++){if(F)var Z=o(e,U,I,G),X=Z.length;else var X=Math.max(4,I)/4*Math.max(4,G)/4*A,Z=new Uint8Array(e,U,X);var W={data:Z,width:I,height:G};r.mipmaps.push(W),U+=X,I=Math.max(I>>1,1),G=Math.max(G>>1,1)}return r}},function(e,t){THREE.PVRLoader=function(e){this.manager=void 0!==e?e:THREE.DefaultLoadingManager,this._parser=THREE.PVRLoader.parse},THREE.PVRLoader.prototype=Object.create(THREE.CompressedTextureLoader.prototype),THREE.PVRLoader.prototype.constructor=THREE.PVRLoader,THREE.PVRLoader.parse=function(e,t){var n=13,a=new Uint32Array(e,0,n),o={buffer:e,header:a,loadMipmaps:t};if(55727696===a[0])return THREE.PVRLoader._parseV3(o);if(559044176===a[11])return THREE.PVRLoader._parseV2(o);throw new Error("[THREE.PVRLoader] Unknown PVR format")},THREE.PVRLoader._parseV3=function(e){var t,n,a=e.header,o=a[12],r=a[2],i=a[6],s=a[7],c=(a[9],a[10]),u=a[11];switch(r){case 0:t=2,n=THREE.RGB_PVRTC_2BPPV1_Format;break;case 1:t=2,n=THREE.RGBA_PVRTC_2BPPV1_Format;break;case 2:t=4,n=THREE.RGB_PVRTC_4BPPV1_Format;break;case 3:t=4,n=THREE.RGBA_PVRTC_4BPPV1_Format;break;default:throw new Error("pvrtc - unsupported PVR format "+r)}return e.dataPtr=52+o,e.bpp=t,e.format=n,e.width=s,e.height=i,e.numSurfaces=c,e.numMipmaps=u,e.isCubemap=6===c,THREE.PVRLoader._extract(e)},THREE.PVRLoader._parseV2=function(e){var t,n,a=e.header,o=a[0],r=a[1],i=a[2],s=a[3],c=a[4],t=(a[5],a[6]),u=(a[7],a[8],a[9],a[10]),d=(a[11],a[12]),l=255,p=24,h=25,m=c&l,f=u>0;if(m===h)n=f?THREE.RGBA_PVRTC_4BPPV1_Format:THREE.RGB_PVRTC_4BPPV1_Format,t=4;else{if(m!==p)throw new Error("pvrtc - unknown format "+m);n=f?THREE.RGBA_PVRTC_2BPPV1_Format:THREE.RGB_PVRTC_2BPPV1_Format,t=2}return e.dataPtr=o,e.bpp=t,e.format=n,e.width=i,e.height=r,e.numSurfaces=d,e.numMipmaps=s+1,e.isCubemap=6===d,THREE.PVRLoader._extract(e)},THREE.PVRLoader._extract=function(e){var t={mipmaps:[],width:e.width,height:e.height,format:e.format,mipmapCount:e.numMipmaps,isCubemap:e.isCubemap},n=e.buffer,a=e.dataPtr,o=e.bpp,r=e.numSurfaces,i=0,s=0,c=0,u=0,d=0,l=0;2===o?(c=8,u=4):(c=4,u=4),s=c*u*o/8,t.mipmaps.length=e.numMipmaps*r;for(var p=0;p<e.numMipmaps;){var h=e.width>>p,m=e.height>>p;d=h/c,l=m/u,d<2&&(d=2),l<2&&(l=2),i=d*l*s;for(var f=0;f<r;f++){var E=new Uint8Array(n,a,i),b={data:E,width:h,height:m};t.mipmaps[f*e.numMipmaps+p]=b,a+=i}p++}return t}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={assets:[{name:"model",type:"json",path:"assets/model.json"},{name:"planeTex",type:"texture",path:["assets/textures/uv_grid.dds.gz","assets/textures/uv_grid.pvr","assets/textures/uv_grid.jpg"]}],model:{children:[{type:"asset/json",name:"model",properties:{name:"JSON Model"}},{object:{geometry:{type:"PlaneBufferGeometry",args:[20,20,80,90]},material:{type:"MeshStandardMaterial",args:{color:"#ffffff",map:{type:"asset/texture",name:"planeTex"},side:2,metalness:.2,roughness:.7},properties:{name:"planeMaterial"}}},properties:{name:"Plane",rotation:{x:Math.PI/2},castShadow:!1,receiveShadow:!0}},{object:{geometry:{type:"BoxBufferGeometry",args:[3,3,5]},material:{type:"MeshStandardMaterial",args:{color:"#88cc55",metalness:.2}}},properties:{name:"Cube",position:{y:3},castShadow:!0,receiveShadow:!1}},{object:{type:"DirectionalLight",args:7368816},properties:{name:"directLight",position:{x:-30,y:20,z:10}}},{object:{type:"SpotLight",args:16777215},properties:{name:"spotLight",position:{x:5,y:20,z:10},castShadow:!0}}]}};t.default=n},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(3),s=a(i);window.THREE=THREE,n(10);var c=function(){function e(t,n){o(this,e),this.camera=t,this.domElement=n,this.orbitControls=new THREE.OrbitControls(t,n),this.orbitControls.enableDamping=!0,this.orbitControls.minDistance=s.default.controls.minDistance,this.orbitControls.maxDistance=s.default.controls.maxDistance,this.orbitControls.rotateSpeed=s.default.controls.rotateSpeed,this.resetCameraOrbit()}return r(e,[{key:"resetCameraOrbit",value:function(){this.camera.position.fromArray(s.default.camera.cameraPos),this.camera.lookAt(new THREE.Vector3(0,0,0)),this.camera.near=s.default.camera.near,this.camera.far=s.default.camera.far,this.camera.updateProjectionMatrix()}},{key:"update",value:function(){this.orbitControls.update()}},{key:"dispose",value:function(){this.orbitControls.dispose()}}]),e}();t.default=c},function(e,t){THREE.OrbitControls=function(e,t){function n(){return 2*Math.PI/60/60*_.autoRotateSpeed}function a(){return Math.pow(.95,_.zoomSpeed)}function o(e){B.theta-=e}function r(e){B.phi-=e}function i(e){_.object instanceof THREE.PerspectiveCamera?z/=e:_.object instanceof THREE.OrthographicCamera?(_.object.zoom=Math.max(_.minZoom,Math.min(_.maxZoom,_.object.zoom*e)),_.object.updateProjectionMatrix(),G=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),_.enableZoom=!1)}function s(e){_.object instanceof THREE.PerspectiveCamera?z*=e:_.object instanceof THREE.OrthographicCamera?(_.object.zoom=Math.max(_.minZoom,Math.min(_.maxZoom,_.object.zoom/e)),_.object.updateProjectionMatrix(),G=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),_.enableZoom=!1)}function c(e){Y.set(e.clientX,e.clientY)}function u(e){Q.set(e.clientX,e.clientY)}function d(e){W.set(e.clientX,e.clientY)}function l(e){Z.set(e.clientX,e.clientY),X.subVectors(Z,Y);var t=_.domElement===document?_.domElement.body:_.domElement;o(2*Math.PI*X.x/t.clientWidth*_.rotateSpeed),r(2*Math.PI*X.y/t.clientHeight*_.rotateSpeed),Y.copy(Z),_.update()}function p(e){J.set(e.clientX,e.clientY),$.subVectors(J,Q),$.y>0?i(a()):$.y<0&&s(a()),Q.copy(J),_.update()}function h(e){K.set(e.clientX,e.clientY),q.subVectors(K,W),ne(q.x,q.y),W.copy(K),_.update()}function m(e){}function f(e){e.deltaY<0?s(a()):e.deltaY>0&&i(a()),_.update()}function E(e){switch(e.keyCode){case _.keys.UP:ne(0,_.keyPanSpeed),_.update();break;case _.keys.BOTTOM:ne(0,-_.keyPanSpeed),_.update();break;case _.keys.LEFT:ne(_.keyPanSpeed,0),_.update();break;case _.keys.RIGHT:ne(-_.keyPanSpeed,0),_.update()}}function b(e){Y.set(e.touches[0].pageX,e.touches[0].pageY)}function v(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,a=Math.sqrt(t*t+n*n);Q.set(0,a)}function y(e){W.set(e.touches[0].pageX,e.touches[0].pageY)}function R(e){Z.set(e.touches[0].pageX,e.touches[0].pageY),X.subVectors(Z,Y);var t=_.domElement===document?_.domElement.body:_.domElement;o(2*Math.PI*X.x/t.clientWidth*_.rotateSpeed),r(2*Math.PI*X.y/t.clientHeight*_.rotateSpeed),Y.copy(Z),_.update()}function g(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);J.set(0,o),$.subVectors(J,Q),$.y>0?s(a()):$.y<0&&i(a()),Q.copy(J),_.update()}function T(e){K.set(e.touches[0].pageX,e.touches[0].pageY),q.subVectors(K,W),ne(q.x,q.y),W.copy(K),_.update()}function w(e){}function P(e){if(_.enabled!==!1){if(e.preventDefault(),e.button===_.mouseButtons.ORBIT){if(_.enableRotate===!1)return;c(e),F=V.ROTATE}else if(e.button===_.mouseButtons.ZOOM){if(_.enableZoom===!1)return;u(e),F=V.DOLLY}else if(e.button===_.mouseButtons.PAN){if(_.enablePan===!1)return;d(e),F=V.PAN}F!==V.NONE&&(document.addEventListener("mousemove",H,!1),document.addEventListener("mouseup",C,!1),_.dispatchEvent(k))}}function H(e){if(_.enabled!==!1)if(e.preventDefault(),F===V.ROTATE){if(_.enableRotate===!1)return;l(e)}else if(F===V.DOLLY){if(_.enableZoom===!1)return;p(e)}else if(F===V.PAN){if(_.enablePan===!1)return;h(e)}}function C(e){_.enabled!==!1&&(m(e),document.removeEventListener("mousemove",H,!1),document.removeEventListener("mouseup",C,!1),_.dispatchEvent(A),F=V.NONE)}function x(e){_.enabled===!1||_.enableZoom===!1||F!==V.NONE&&F!==V.ROTATE||(e.preventDefault(),e.stopPropagation(),f(e),_.dispatchEvent(k),_.dispatchEvent(A))}function O(e){_.enabled!==!1&&_.enableKeys!==!1&&_.enablePan!==!1&&E(e)}function D(e){if(_.enabled!==!1){switch(e.touches.length){case 1:if(_.enableRotate===!1)return;b(e),F=V.TOUCH_ROTATE;break;case 2:if(_.enableZoom===!1)return;v(e),F=V.TOUCH_DOLLY;break;case 3:if(_.enablePan===!1)return;y(e),F=V.TOUCH_PAN;break;default:F=V.NONE}F!==V.NONE&&_.dispatchEvent(k)}}function j(e){if(_.enabled!==!1)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:if(_.enableRotate===!1)return;if(F!==V.TOUCH_ROTATE)return;R(e);break;case 2:if(_.enableZoom===!1)return;if(F!==V.TOUCH_DOLLY)return;g(e);break;case 3:if(_.enablePan===!1)return;if(F!==V.TOUCH_PAN)return;T(e);break;default:F=V.NONE}}function L(e){_.enabled!==!1&&(w(e),_.dispatchEvent(A),F=V.NONE)}function M(e){e.preventDefault()}this.object=e,this.domElement=void 0!==t?t:document,this.enabled=!0,this.target=new THREE.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-(1/0),this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.25,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={ORBIT:THREE.MOUSE.LEFT,ZOOM:THREE.MOUSE.MIDDLE,PAN:THREE.MOUSE.RIGHT},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return U.phi},this.getAzimuthalAngle=function(){return U.theta},this.reset=function(){_.target.copy(_.target0),_.object.position.copy(_.position0),_.object.zoom=_.zoom0,_.object.updateProjectionMatrix(),_.dispatchEvent(S),_.update(),F=V.NONE},this.update=function(){var t=new THREE.Vector3,a=(new THREE.Quaternion).setFromUnitVectors(e.up,new THREE.Vector3(0,1,0)),r=a.clone().inverse(),i=new THREE.Vector3,s=new THREE.Quaternion;return function(){var e=_.object.position;return t.copy(e).sub(_.target),t.applyQuaternion(a),U.setFromVector3(t),_.autoRotate&&F===V.NONE&&o(n()),U.theta+=B.theta,U.phi+=B.phi,U.theta=Math.max(_.minAzimuthAngle,Math.min(_.maxAzimuthAngle,U.theta)),U.phi=Math.max(_.minPolarAngle,Math.min(_.maxPolarAngle,U.phi)),U.makeSafe(),U.radius*=z,U.radius=Math.max(_.minDistance,Math.min(_.maxDistance,U.radius)),_.target.add(I),t.setFromSpherical(U),t.applyQuaternion(r),e.copy(_.target).add(t),_.object.lookAt(_.target),_.enableDamping===!0?(B.theta*=1-_.dampingFactor,B.phi*=1-_.dampingFactor):B.set(0,0,0),z=1,I.set(0,0,0),!!(G||i.distanceToSquared(_.object.position)>N||8*(1-s.dot(_.object.quaternion))>N)&&(_.dispatchEvent(S),i.copy(_.object.position),s.copy(_.object.quaternion),G=!1,!0)}}(),this.dispose=function(){_.domElement.removeEventListener("contextmenu",M,!1),_.domElement.removeEventListener("mousedown",P,!1),_.domElement.removeEventListener("wheel",x,!1),_.domElement.removeEventListener("touchstart",D,!1),_.domElement.removeEventListener("touchend",L,!1),_.domElement.removeEventListener("touchmove",j,!1),document.removeEventListener("mousemove",H,!1),document.removeEventListener("mouseup",C,!1),window.removeEventListener("keydown",O,!1)};var _=this,S={type:"change"},k={type:"start"},A={type:"end"},V={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},F=V.NONE,N=1e-6,U=new THREE.Spherical,B=new THREE.Spherical,z=1,I=new THREE.Vector3,G=!1,Y=new THREE.Vector2,Z=new THREE.Vector2,X=new THREE.Vector2,W=new THREE.Vector2,K=new THREE.Vector2,q=new THREE.Vector2,Q=new THREE.Vector2,J=new THREE.Vector2,$=new THREE.Vector2,ee=function(){var e=new THREE.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),I.add(e)}}(),te=function(){var e=new THREE.Vector3;return function(t,n){e.setFromMatrixColumn(n,1),e.multiplyScalar(t),I.add(e)}}(),ne=function(){var e=new THREE.Vector3;return function(t,n){var a=_.domElement===document?_.domElement.body:_.domElement;if(_.object instanceof THREE.PerspectiveCamera){var o=_.object.position;e.copy(o).sub(_.target);var r=e.length();r*=Math.tan(_.object.fov/2*Math.PI/180),ee(2*t*r/a.clientHeight,_.object.matrix),te(2*n*r/a.clientHeight,_.object.matrix)}else _.object instanceof THREE.OrthographicCamera?(ee(t*(_.object.right-_.object.left)/_.object.zoom/a.clientWidth,_.object.matrix),te(n*(_.object.top-_.object.bottom)/_.object.zoom/a.clientHeight,_.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),_.enablePan=!1)}}();_.domElement.addEventListener("contextmenu",M,!1),_.domElement.addEventListener("mousedown",P,!1),_.domElement.addEventListener("wheel",x,!1),_.domElement.addEventListener("touchstart",D,!1),_.domElement.addEventListener("touchend",L,!1),_.domElement.addEventListener("touchmove",j,!1),window.addEventListener("keydown",O,!1),this.update()},THREE.OrbitControls.prototype=Object.create(THREE.EventDispatcher.prototype),THREE.OrbitControls.prototype.constructor=THREE.OrbitControls,Object.defineProperties(THREE.OrbitControls.prototype,{center:{get:function(){return console.warn("THREE.OrbitControls: .center has been renamed to .target"),this.target}},noZoom:{get:function(){return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom},set:function(e){console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!e}},noRotate:{get:function(){return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),!this.enableRotate},set:function(e){console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),this.enableRotate=!e}},noPan:{get:function(){return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),!this.enablePan},set:function(e){console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),this.enablePan=!e}},noKeys:{get:function(){return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),!this.enableKeys},set:function(e){console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),this.enableKeys=!e}},staticMoving:{get:function(){return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),!this.enableDamping},set:function(e){console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),this.enableDamping=!e}},dynamicDampingFactor:{get:function(){return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor},set:function(e){console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor=e}}})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(3),s=a(i),c=n(12),u=a(c),d=function(){function e(t){o(this,e),s.default.isDebug&&(this.statsUi=new u.default(t))}return r(e,[{key:"update",value:function(){this.statsUi&&this.statsUi.update()}}]),e}();t.default=d},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(13),i=[["drawcalls","render","calls",0],["programs","programs","length",0],["geometries","memory","geometries",0],["textures","memory","textures",0],["faces","render","faces",0]],s=null,c=null,u=function(){function e(t){a(this,e),this.rInfo=t.info,this.stats=new r;var n=this.createRenderInfoDiv(),o=this.createRenderInfoTableDiv();n.appendChild(o),this.stats.domElement.appendChild(n),document.body.appendChild(this.stats.domElement)}return o(e,[{key:"update",value:function(){this.updateRenderInfo(),this.stats.update()}},{key:"updateRenderInfo",value:function(){for(s=0;s<i.length;s++)c=this.rInfo[i[s][1]][i[s][2]],c!==i[s][3]&&(i[s][3]=c,i[s][4].nodeValue=c)}},{key:"createRenderInfoDiv",value:function(){var e=document.createElement("div");return e.id="render-info",e.style.width="80px",e.style.backgroundColor="rgb(0, 0, 34)",e.style.color="rgb(0, 255, 255)",e.style.fontSize="11px",e.style.fontFamily="Helvetica, Arial, sans-serif",e}},{key:"createRenderInfoTableDiv",value:function(){var e=document.createElement("TABLE"),t=document.createElement("TBODY");e.appendChild(t);var n=void 0,a=void 0,o=void 0;for(s=0;s<i.length;s++)n=document.createElement("TR"),t.appendChild(n),a=document.createElement("TD"),a.width=35,a.style.maxWidth="35px",a.appendChild(document.createTextNode(i[s][0])),n.appendChild(a),a=document.createElement("TD"),a.width=35,a.style.textAlign="right",a.style.float="right",o=document.createTextNode(i[s][3]),i[s].push(o),a.appendChild(o),n.appendChild(a);return e}}]),e}();t.default=u},function(e,t,n){var a=function(){var e=Date.now(),t=e,n=0,a=1/0,o=0,r=0,i=1/0,s=0,c=0,u=0,d=document.createElement("div");d.id="stats",d.addEventListener("mousedown",function(e){e.preventDefault(),v(++u%2)},!1),d.style.cssText="width:80px;opacity:0.9;cursor:pointer";var l=document.createElement("div");l.id="fps",l.style.cssText="padding:0 0 3px 3px;text-align:left;background-color:#002",d.appendChild(l);var p=document.createElement("div");p.id="fpsText",p.style.cssText="color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px",p.innerHTML="FPS",l.appendChild(p);var h=document.createElement("div");for(h.id="fpsGraph",h.style.cssText="position:relative;width:74px;height:30px;background-color:#0ff",l.appendChild(h);h.children.length<74;){var m=document.createElement("span");m.style.cssText="width:1px;height:30px;float:left;background-color:#113",h.appendChild(m)}var f=document.createElement("div");f.id="ms",f.style.cssText="padding:0 0 3px 3px;text-align:left;background-color:#020;display:none",d.appendChild(f);var E=document.createElement("div");E.id="msText",E.style.cssText="color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px",E.innerHTML="MS",f.appendChild(E);var b=document.createElement("div");for(b.id="msGraph",b.style.cssText="position:relative;width:74px;height:30px;background-color:#0f0",f.appendChild(b);b.children.length<74;){var m=document.createElement("span");m.style.cssText="width:1px;height:30px;float:left;background-color:#131",b.appendChild(m)}var v=function(e){switch(u=e){case 0:l.style.display="block",f.style.display="none";break;case 1:l.style.display="none",f.style.display="block"}},y=function(e,t){var n=e.appendChild(e.firstChild);n.style.height=t+"px"};return{REVISION:12,domElement:d,setMode:v,begin:function(){e=Date.now()},end:function(){var u=Date.now();return n=u-e,a=Math.min(a,n),o=Math.max(o,n),E.textContent=n+" MS ("+a+"-"+o+")",y(b,Math.min(30,30-n/200*30)),c++,u>t+1e3&&(r=Math.round(1e3*c/(u-t)),i=Math.min(i,r),s=Math.max(s,r),p.textContent=r+" FPS ("+i+"-"+s+")",y(h,Math.min(30,30-r/100*30)),t=u,c=0),u},update:function(){e=this.end()}}};e.exports=a},function(e,t){"use strict";e.exports=function(){if(window.WebGLRenderingContext){for(var e=document.createElement("canvas"),t=["webgl","experimental-webgl","moz-webgl"],n=!1,a=0;a<t.length;a++)try{if(n=e.getContext(t[a]),n&&"function"==typeof n.getParameter)return!0}catch(e){console.log("Unable to initialize WebGL. Your browser may not support it.")}return!1}return!1}}]);