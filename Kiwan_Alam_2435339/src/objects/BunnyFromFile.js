class BunnyFromFile extends THREE.Group {

    constructor() {
        super();
        this.fbxLoader = new THREE.FBXLoader();
        this.load(this);
    }

    load(thisBunny) {
        this.fbxLoader.load("src/models/Bunny/Bunny.fbx", function (fbx) {
            thisBunny.add(fbx);
        });
    }
}