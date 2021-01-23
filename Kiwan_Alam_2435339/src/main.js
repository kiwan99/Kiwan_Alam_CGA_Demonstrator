document.write('<script type="text/javascript" src="./../lib/three.js-r121/build/three.js"></script>');
document.write('<script type="text/javascript" src="./../lib/three.js-r121/examples/js/controls/OrbitControls.js"></script>');
document.write('<script type="text/javascript" src="./../lib/three.js-r121/examples/js/libs/inflate.min.js"></script>');
document.write('<script type="text/javascript" src="./../lib/three.js-r121/examples/js/loaders/FBXLoader.js"></script>');
document.write('<script type="text/javascript" src="./../lib/three.js-r121/examples/js/libs/stats.min.js"></script>');
document.write('<script type="text/javascript" src="./../lib/dat.gui-0.7.7/build/dat.gui.js"></script>');
document.write('<script type="text/javascript" src="./../lib/ThreeCSG-1/three-csg.js"></script>');

// Own modules

document.write('<script type="text/javascript" src="src/objects/Lights.js"></script>');
document.write('<script type="text/javascript" src="src/objects/Truck.js"></script>');
document.write('<script type="text/javascript" src="src/objects/ContainerFromFile.js"></script>');
document.write('<script type="text/javascript" src="src/objects/BunnyFromFile.js"></script>');
document.write('<script type="text/javascript" src="src/objects/Road.js"></script>');
//document.write('<script type="text/javascript" src="src/animation/Animation.js"></script>');
document.write('<script type="text/javascript" src="src/animation/Tween.js"></script>');
//document.write('<script type="text/javascript" src="src/physics/Physics.js"></script>');
document.write('<script type="text/javascript" src="src/sound/Soundscape.js"></script>');

// Event functions

document.write('<script type="text/javascript" src="src/eventfunctions/updateAspectRatio.js"></script>');
document.write('<script type="text/javascript" src="src/eventfunctions/calculateMousePosition.js"></script>');
document.write('<script type="text/javascript" src="src/eventfunctions/executeRaycast.js"></script>');
document.write('<script type="text/javascript" src="src/eventfunctions/setTruckSound.js"></script>');

const DEG_TO_RAD = Math.PI / 180;

function main() {

    scene = new THREE.Scene();

    var axes = new THREE.AxesHelper(20);
    scene.add(axes);

    truck = new Truck();
    scene.add(truck);

    var container = new ContainerFromFile();
    container.position.set(20,0,40);
    container.scale.set(0.1, 0.1, 0.1);
    scene.add(container);

    scene.add(new Road(2000, 2000, 16));

    var lights = new Lights();
    scene.add(lights.createAmbientLight(0.4));
    var directionalLight = lights.createDirectionalLight(50, 50, 50, 0.7);
    scene.add(directionalLight);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(30, 40, 50);
    camera.lookAt(0, 0, 0);

    var gui = new dat.GUI();
    gui.add(directionalLight.position, "x", -50, 50);
    gui.add(directionalLight.position, "y", -50, 50);
    gui.add(directionalLight.position, "z", -50, 50);

    var stats = new Stats();
    stats.showPanel(0);
    document.body.appendChild(stats.dom);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(new THREE.Color(0xD5E3EC));
    renderer.shadowMap.enabled = true;

    document.getElementById("3d_content").appendChild(renderer.domElement);

    var orbitControls = new THREE.OrbitControls(camera, renderer.domElement);
    orbitControls.target = new THREE.Vector3(0, 0, 0);
    orbitControls.update();

    var soundscape = new Soundscape();
    truck.loadSounds(soundscape);
    camera.add(soundscape.getAudioListener());

    var clock = new THREE.Clock();

    function mainLoop() {

        stats.begin();

        var delta = clock.getDelta();

        if (truck.animationMixer != null) {
            truck.animationMixer.update(delta);
        }

        TWEEN.update();

        renderer.render(scene, camera);
        stats.end();
        requestAnimationFrame(mainLoop);
    }

    mainLoop();

    window.onresize = updateAspectRatio;
    window.onmousemove = calculateMousePosition;
    window.onclick = executeRaycast;

    window.addEventListener("truckStateChanged", setTruckSound);
    window.dispatchEvent(new Event("truckStateChanged"));
}

document.getElementById("startButton").addEventListener("click", function (event) {
    main();
    document.getElementById("overlay").remove();
});
