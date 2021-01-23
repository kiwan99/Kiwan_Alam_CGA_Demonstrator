class ContainerFromFile extends THREE.Group {

    constructor() {
        super();

        this.fbxLoader = new THREE.FBXLoader();

        this.load(this);
    }

    load(thisContainer) {

        this.fbxLoader.load("src/models/Container/dumpster.fbx", function (fbx) {

            fbx.traverse(function (child) {

/*
                if (child.isMesh) {
                    //child.material.map.anisotropy = 8;
                    child.castShadow = true;
                    child.receiveShadow = true;
                    const oldMat = child.material;
                    child.material = new THREE.MeshLambertMaterial({color: oldMat.color, map: oldMat.map});
                }

 */





            });

            thisContainer.add(fbx);

        });
    }
}