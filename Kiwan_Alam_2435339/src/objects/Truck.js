class Truck extends THREE.Group {

    constructor() {
        super();

        this.animations = new Array();
        this.addParts();
    }

    addParts() {

        const SCALE = 5;
        const SCALE2 = 2.5;

        var truck = new THREE.Group();

    //Fahrerhaus (Modellierung in Blender; gerundete Koordinaten übernommen)
        var fahrerhausGroup = new THREE.Group();
        fahrerhausGroup.position.set(20.5,6,0);

        var fahrerhausShape = new THREE.Shape();
        fahrerhausShape.moveTo(-2.15 * SCALE,2.65 * SCALE);
        fahrerhausShape.lineTo(-0.95 * SCALE,2.65 * SCALE);
        fahrerhausShape.lineTo(0.9 * SCALE,1.45 * SCALE);
        fahrerhausShape.lineTo(1.9 * SCALE ,1.15 * SCALE);
        fahrerhausShape.lineTo(2.15 * SCALE ,0.95 * SCALE);
        fahrerhausShape.lineTo(2.25 * SCALE ,0.6 * SCALE);
        fahrerhausShape.lineTo(2.3 * SCALE,-1 * SCALE);
        fahrerhausShape.lineTo(-2.15 * SCALE,-1 * SCALE);
        fahrerhausShape.lineTo(-2.15 * SCALE,2.65 * SCALE);
        var extrudeSettings = {
            steps: 1,
            depth: 20,
            bevelEnabled: false
        };
        var fahrerhausGeometry = new THREE.ExtrudeGeometry(fahrerhausShape, extrudeSettings);
        var fahrerhausMaterial = new THREE.MeshLambertMaterial({
            color: 0xFFFFFF
        });
        var fahrerhaus = new THREE.Mesh(fahrerhausGeometry, fahrerhausMaterial);
        //fahrerhaus.position.set(20.5, 16, 0);

        fahrerhausGroup.add(fahrerhaus);


    //Autoglas

        var windschutzscheibeGeometry = new THREE.BoxGeometry(0.1, 8, 18);
        var windschutzscheibeMaterial = new THREE.MeshLambertMaterial({
            color: 0x444444
        });
        var windschutzscheibe = new THREE.Mesh(windschutzscheibeGeometry, windschutzscheibeMaterial);
        //windschutzscheibe.position.set(20.75,26,10);
        windschutzscheibe.position.x = 0.25;
        windschutzscheibe.position.y = 10;
        windschutzscheibe.position.z = 10;
        windschutzscheibe.rotation.z = 57 * DEG_TO_RAD;
        windschutzscheibe.name = "Windschutzscheibe";
        fahrerhausGroup.add(windschutzscheibe);


        var fenster = new THREE.Group();
        //fenster.position.set(18,21,0);
        fenster.position.x = -2.5;
        fenster.position.y = 5;

        var fensterShape = new THREE.Shape();
        fensterShape.moveTo(-2.15 * SCALE2,2.65 * SCALE2);
        fensterShape.lineTo(-0.95 * SCALE2,2.65 * SCALE2);
        fensterShape.lineTo(0.9 * SCALE2,1.45 * SCALE2);
        fensterShape.lineTo(0.9 * SCALE2,0 * SCALE2);
        fensterShape.lineTo(-2.15 * SCALE2,0 * SCALE2);
        fensterShape.lineTo(-2.15 * SCALE2,2.65 * SCALE2);

        var extrudeSettings2 = {
            steps: 1,
            depth: 0.5,
            bevelEnabled: false
        };
        var fensterGeometry = new THREE.ExtrudeGeometry(fensterShape, extrudeSettings2);
        var fensterMaterial = new THREE.MeshLambertMaterial({
            color: 0x444444
        });
        var fenster1 = new THREE.Mesh(fensterGeometry, fensterMaterial);
        fenster1.position.z = -0.1;
        fenster.add(fenster1);

        var fenster2 = new THREE.Mesh(fensterGeometry, fensterMaterial);
        fenster2.position.z = 19.6;
        fenster.add(fenster2);

        fahrerhausGroup.add(fenster);


    //Leuchten
        var lampen = new THREE.Group();
        lampen.position.set(32, 4, 10);
        //var lampeGeometry = new THREE.CylinderGeometry(1, 1, 1, 8, 1, false);
        var frontlampeGeometry = new THREE.BoxGeometry(0.5, 2.5, 4);
        var frontlampeMaterial = new THREE.MeshLambertMaterial({
            color: 0xFFFF70
        });
        var frontlampe1 = new THREE.Mesh(frontlampeGeometry, frontlampeMaterial);
        frontlampe1.position.z = 7;
        //frontlampe1.rotation.z = -90 * DEG_TO_RAD;
        var frontlampe2 = new THREE.Mesh(frontlampeGeometry, frontlampeMaterial);
        frontlampe2.position.z = -7;
        //frontlampe2.rotation.z = -90 * DEG_TO_RAD;

        var reflektorGeometry = new THREE.BoxGeometry(0.5, 1.5, 4);
        var reflektorMaterial = new THREE.MeshLambertMaterial({
            color: 0xBA0000,
            emissive: 0xBA0000,
            transparent: true,
            opacity: 0.8
        });

        var reflektor1 = new THREE.Mesh(reflektorGeometry, reflektorMaterial);
        reflektor1.position.x = -53;
        reflektor1.position.z = 8;
        var reflektor2 = new THREE.Mesh(reflektorGeometry, reflektorMaterial);
        reflektor2.position.x = -53;
        reflektor2.position.z = -8;
        lampen.add(frontlampe1, frontlampe2, reflektor1, reflektor2);

        truck.add(lampen);




        truck.add(fahrerhausGroup);


    //Anhänger
        var anhängerGeometry = new THREE.BoxGeometry(30, 20, 25);
        var anhängerMaterial = new THREE.MeshLambertMaterial({
            color: 0xECD5E3
        });
        /*
        var anhängerMaterialArray = [
            anhängerMaterial,
            anhängerMaterial,
            anhängerMaterial,
            anhängerMaterial,
            texturMaterial,
            texturMaterial
        ];
         */
        var anhänger = new THREE.Mesh(anhängerGeometry, anhängerMaterial);
        anhänger.position.set(-5, 15, 10);
        truck.add(anhänger);

        var texturPlaneGeometry = new THREE.PlaneGeometry(24,12);
        var texturPlaneMaterial = new THREE.MeshLambertMaterial({
            color: 0xFFFFFF,
            transparent: true
        });
        texturPlaneMaterial.map = new THREE.TextureLoader().load('src/images/1024px-WebGL.png');
        texturPlaneMaterial.map.anisotropy = 8;

        var texturPlaneMesh1 = new THREE.Mesh(texturPlaneGeometry, texturPlaneMaterial);
        texturPlaneMesh1.position.set(anhänger.position.x, anhänger.position.y,
            anhänger.position.z + anhängerGeometry.parameters.depth/2 + 0.05);
        var texturPlaneMesh2 = new THREE.Mesh(texturPlaneGeometry, texturPlaneMaterial);
        texturPlaneMesh2.position.set(anhänger.position.x, anhänger.position.y,
            anhänger.position.z - anhängerGeometry.parameters.depth/2 - 0.05);
        texturPlaneMesh2.rotation.y = 180 * DEG_TO_RAD;

        truck.add(texturPlaneMesh1, texturPlaneMesh2);



    //Reifen und Felgen
        var reifen = new THREE.Group();
        //reifen.rotation.x = -90 * DEG_TO_RAD;

        var reifenGeometry = new THREE.CylinderGeometry(5,5,2.5,16,1,false);
        var reifenMaterial = new THREE.MeshLambertMaterial({
            color: 0x333333
        });

        var felgeGeometry = new THREE.CylinderGeometry(2.5,2.5,1.25,16,1,false);
        var felgeMaterial = new THREE.MeshLambertMaterial({
            color: 0x888888
        });

        var reifen1 = new THREE.Mesh(reifenGeometry, reifenMaterial);
        reifen1.rotation.x = -90 * DEG_TO_RAD;
        reifen1.position.x = 20;

        var felge1 = new THREE.Mesh(felgeGeometry, felgeMaterial);
        felge1.position.y = 0.65;
        reifen1.add(felge1);

        var reifen2 = new THREE.Mesh(reifenGeometry, reifenMaterial);
        reifen2.rotation.x = -90 * DEG_TO_RAD;
        reifen2.position.x = 20;
        reifen2.position.z = 20;

        var felge2 = new THREE.Mesh(felgeGeometry, felgeMaterial);
        felge2.position.y = -0.65;
        reifen2.add(felge2);

        var reifen3 = new THREE.Mesh(reifenGeometry, reifenMaterial);
        reifen3.rotation.x = -90 * DEG_TO_RAD;
        reifen3.position.x = -10;

        var felge3 = new THREE.Mesh(felgeGeometry, felgeMaterial);
        felge3.position.y = 0.65;
        reifen3.add(felge3);

        var reifen4 = new THREE.Mesh(reifenGeometry, reifenMaterial);
        reifen4.rotation.x = -90 * DEG_TO_RAD;
        reifen4.position.x = -10;
        reifen4.position.z = 20;

        var felge4 = new THREE.Mesh(felgeGeometry, felgeMaterial);
        felge4.position.y = -0.65;
        reifen4.add(felge4);

        reifen.add(reifen1, reifen2, reifen3, reifen4);
        truck.add(reifen);


    //Animationen
        var speed = 3000;
        var translate = 100;
        var rotate = 1000;

        //EDIT
        var tweens = {
            forward: false,

            forwardTruckTranslation : new TWEEN.Tween(truck.position).to(new THREE.Vector3(truck.position.x + translate,
                truck.position.y, truck.position.z), speed).easing(TWEEN.Easing.Quadratic.InOut),
            forwardReifenRotation1: new TWEEN.Tween(reifen1.rotation).to(new THREE.Vector3(reifen1.rotation.x,
                reifen1.rotation.y + rotate, reifen1.rotation.z), speed).easing(TWEEN.Easing.Quadratic.InOut),
            forwardReifenRotation2: new TWEEN.Tween(reifen2.rotation).to(new THREE.Vector3(reifen2.rotation.x,
                reifen2.rotation.y + rotate, reifen2.rotation.z), speed).easing(TWEEN.Easing.Quadratic.InOut),
            forwardReifenRotation3: new TWEEN.Tween(reifen3.rotation).to(new THREE.Vector3(reifen3.rotation.x,
                reifen3.rotation.y + rotate, reifen3.rotation.z), speed).easing(TWEEN.Easing.Quadratic.InOut),
            forwardReifenRotation4: new TWEEN.Tween(reifen4.rotation).to(new THREE.Vector3(reifen4.rotation.x,
                reifen4.rotation.y + rotate, reifen4.rotation.z), speed).easing(TWEEN.Easing.Quadratic.InOut),


            backwardTruckTranslation: new TWEEN.Tween(truck.position).to(new THREE.Vector3(truck.position.x,
                truck.position.y, truck.position.z), speed).easing(TWEEN.Easing.Quadratic.InOut),
            backwardReifenRotation1: new TWEEN.Tween(reifen1.rotation).to(new THREE.Vector3(reifen1.rotation.x,
                reifen1.rotation.y, reifen1.rotation.z), speed).easing(TWEEN.Easing.Quadratic.InOut),
            backwardReifenRotation2: new TWEEN.Tween(reifen2.rotation).to(new THREE.Vector3(reifen2.rotation.x,
                reifen2.rotation.y, reifen2.rotation.z), speed).easing(TWEEN.Easing.Quadratic.InOut),
            backwardReifenRotation3: new TWEEN.Tween(reifen3.rotation).to(new THREE.Vector3(reifen3.rotation.x,
                reifen3.rotation.y, reifen3.rotation.z), speed).easing(TWEEN.Easing.Quadratic.InOut),
            backwardReifenRotation4: new TWEEN.Tween(reifen4.rotation).to(new THREE.Vector3(reifen4.rotation.x,
                reifen4.rotation.y, reifen4.rotation.z), speed).easing(TWEEN.Easing.Quadratic.InOut),
        };
        windschutzscheibe.userData = tweens;

        this.add(truck);







    }
}