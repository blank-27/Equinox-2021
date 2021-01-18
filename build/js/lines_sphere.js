const height = 200;
const width = 380;

const SCREEN_WIDTH = width,
    SCREEN_HEIGHT = height,
    r = 450;

let mouseY = 0,
    windowHalfY = height / 2,
    camera2,
    scene2,
    renderer2;

init2();
animate2();

function init2() {
    camera2 = new THREE.PerspectiveCamera(
        80,
        SCREEN_WIDTH / SCREEN_HEIGHT,
        1,
        3000
    );
    camera2.position.z = 1000;

    scene2 = new THREE.Scene();

    const parameters = [
        [0.25, 0xff7700, 1],
        [0.5, 0xff9900, 1],
        [0.75, 0xffaa00, 0.75],
        [1, 0xffaa00, 0.5],
        [1.25, 0x000833, 0.8],
    ];

    const geometry = createGeometry();

    for (let i = 0; i < parameters.length; ++i) {
        const p = parameters[i];

        const material = new THREE.LineBasicMaterial({
            color: p[1],
            opacity: p[2],
        });

        const line = new THREE.LineSegments(geometry, material);
        line.scale.x = line.scale.y = line.scale.z = p[0];
        line.userData.originalScale = p[0];
        line.rotation.y = Math.random() * Math.PI;
        line.updateMatrix();
        scene2.add(line);
    }

    renderer2 = new THREE.WebGLRenderer({ antialias: true, alpha:true });
    renderer2.setPixelRatio(window.devicePixelRatio);
    renderer2.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    renderer2
    document.getElementById("lines_sphere").appendChild(renderer2.domElement);

    document.getElementById("lines_sphere").style.touchAction = "none";
    document
        .getElementById("lines_sphere")
        .addEventListener("pointermove", onPointerMove, false);

    //

    window.addEventListener("resize", onWindowResize, false);

    // test geometry swapability

    setInterval(function () {
        const geometry = createGeometry();

        scene2.traverse(function (object) {
            if (object.isLine) {
                object.geometry.dispose();
                object.geometry = geometry;
            }
        });
    }, 1000);
}

function createGeometry() {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    const vertex = new THREE.Vector3();

    for (let i = 0; i < 1500; i++) {
        vertex.x = Math.random() * 2 - 1;
        vertex.y = Math.random() * 2 - 1;
        vertex.z = Math.random() * 2 - 1;
        vertex.normalize();
        vertex.multiplyScalar(r);

        vertices.push(vertex.x, vertex.y, vertex.z);

        vertex.multiplyScalar(Math.random() * 0.09 + 1);

        vertices.push(vertex.x, vertex.y, vertex.z);
    }

    geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
    );

    return geometry;
}

function onWindowResize() {
    windowHalfY = height / 2;
    camera2.aspect = width / height;
    camera2.updateProjectionMatrix();
    renderer2.setSize(width, height);
}

function onPointerMove(event) {
    if (event.isPrimary === false) return;
    mouseY = event.clientY - windowHalfY;
}

//

function animate2() {
    requestAnimationFrame(animate2);
    render();
}

function render() {
    camera2.position.y += (-mouseY + 200 - camera2.position.y) * 0.05;
    camera2.lookAt(scene2.position);

    renderer2.render(scene2, camera2);

    const time = Date.now() * 0.0001;

    for (let i = 0; i < scene2.children.length; i++) {
        const object = scene2.children[i];

        if (object.isLine) {
            object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));

            if (i < 5) {
                const scale =
                    object.userData.originalScale *
                    (i / 5 + 1) *
                    (1 + 0.5 * Math.sin(7 * time));

                object.scale.x = object.scale.y = object.scale.z = scale;
            }
        }
    }
}
