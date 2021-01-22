class Primitives {

    constructor() {

    }

    createCube(width, height, depth, posX, posY, posZ, cShadow, rShadow, color) {
        var cubeGeometry = new THREE.BoxGeometry(width, height, depth);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: color, wireframe: false});
        var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.set(posX, posY, posZ);
        cube.castShadow = cShadow;
        cube.receiveShadow = rShadow;
        return cube;
    }

    createSphere(radius, wSeg, hSeg, posX, posY, posZ, cShadow, rShadow, color) {
        var sphereGeometry = new THREE.SphereGeometry(radius, wSeg, hSeg);
        var sphereMaterial = new THREE.MeshLambertMaterial({color: color, wireframe: false});
        var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(posX, posY, posZ);
        sphere.castShadow = cShadow;
        sphere.receiveShadow = rShadow;
        return sphere;
    }

    createPlane(width, height, posX, posY, posZ, cShadow, rShadow, color) {
        var planeGeometry = new THREE.PlaneGeometry(width, height);
        var planeMaterial = new THREE.MeshLambertMaterial({color: color, wireframe: false});
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.position.set(posX, posY, posZ);
        plane.rotation.x = -90 * DEG_TO_RAD;
        plane.castShadow = cShadow;
        plane.receiveShadow = rShadow;
        return plane;
    }

    createCylinder(radTop, radBottom, height, rSeg, hSeg, posX, posY, posZ, openEnded, cShadow, rShadow, color) {
        var cylinderGeometry = new THREE.CylinderGeometry(radTop, radBottom, height, rSeg, hSeg, openEnded);
        var cylinderMaterial = new THREE.MeshLambertMaterial({color: color});
        var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
        cylinder.position.set(posX, posY, posZ);
        cylinder.castShadow = cShadow;
        cylinder.receiveShadow = rShadow;
        return cylinder;
    }
}