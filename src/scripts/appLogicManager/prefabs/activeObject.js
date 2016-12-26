import defaultVert from '../../app-viewer/materialDecorator/shaders/default.vert';
import activeObjectSelectionFrag from '../../app-viewer/materialDecorator/shaders/activeObjectSelection.frag';

class ActiveObject {
    constructor({type, controllerMesh, object} = {}) {
        this.type = type;
        this.controller = controllerMesh;
        this.controllableObject = object;

        this.outlineMesh = null;
        this.highlightMesh = null;

        this.selected = false;

        this.selectedColor = new THREE.Color(0x55aaaa);
        this.deselectedColor = new THREE.Color(0xff7777);

        this.controllerCollider = this.controller;
        for (let i = 0; i < this.controller.children.length; i++) {
            if (this.controller.children[i].name.includes('collider')) {
                this.controllerCollider = this.controller.children[i];
                break;
            }
        }
        this.controllerCollider.userData.activeObject = this;

        this.addOutlineMesh();
        this.addHighlightMesh();
    }

    addOutlineMesh() {
        const geom = this.controller.geometry;
        const mat = new THREE.MeshBasicMaterial({side: THREE.BackSide, transparent: true});

        mat.color = this.deselectedColor;
        mat.opacity = 0.2;
        const mesh = new THREE.Mesh(geom, mat);
        mesh.name = this.controller.name + '_outlineMesh';

        this.controller.parent.add(mesh);

        mesh.matrix.compose(this.controller.position, this.controller.quaternion, this.controller.scale);
        mesh.matrix.decompose(mesh.position, mesh.quaternion, mesh.scale);
        mesh.scale.multiplyScalar(1.05);

        this.outlineMesh = mesh;
    }

    addHighlightMesh() {
        const geom = this.controller.geometry;
        const uniforms = THREE.UniformsUtils.clone(THREE.ShaderLib.basic.uniforms);
        const mat = new THREE.ShaderMaterial({
            uniforms,
            vertexShader: defaultVert,
            fragmentShader: activeObjectSelectionFrag,
            transparent: true
        });

        mat.uniforms.diffuse.value = this.deselectedColor;
        mat.opacity = 0.05;
        mat.uniforms.opacity.value = 0.2;

        mat.uniforms.time = {value: 0};

        const mesh = new THREE.Mesh(geom, mat);
        mesh.name = this.controller.name + '_outlineMesh';

        this.controller.parent.add(mesh);

        mesh.matrix.compose(this.controller.position, this.controller.quaternion, this.controller.scale);
        mesh.matrix.decompose(mesh.position, mesh.quaternion, mesh.scale);
        mesh.scale.multiplyScalar(1.03);

        this.highlightMesh = mesh;
    }

    update(time) {
        this.highlightMesh.material.uniforms.time.value = time;
    }

    selectObject() {
        if (!this.selected) {
            this.selected = true;
            this.highlightMesh.material.uniforms.diffuse.value = this.selectedColor;
            this.outlineMesh.material.color = this.selectedColor;
        }
    }

    deselectObject() {
        if (this.selected) {
            this.selected = false;
            this.highlightMesh.material.uniforms.diffuse.value = this.deselectedColor;
            this.outlineMesh.material.color = this.deselectedColor;
        }
    }

    makeAction() {
        if (this.type === 'door') {
            if (this.controllableObject.state === this.controllableObject.states.CLOSED) {
                this.controllableObject.open();
            } else if (this.controllableObject.state === this.controllableObject.states.OPEN) {
                this.controllableObject.close();
            }
        }
    }
}

export default ActiveObject;
