var camera, scene, renderer;

var isUserInteracting = false,
    onMouseDownMouseX = 0, onMouseDownMouseY = 0,
    lon = 0, onMouseDownLon = 0,
    lat = 0, onMouseDownLat = 0,
    phi = 0, theta = 0;
var boxWidth = document.getElementById('vr-wrp').clientWidth;
var boxHeight = document.getElementById('vr-wrp').clientHeight;

init();
animate();

function init() {

    var container, mesh;

    container = document.getElementById( 'vr-wrp' );

    camera = new THREE.PerspectiveCamera( 75, boxWidth/boxHeight, 1, 1100 );
    camera.target = new THREE.Vector3( 0, 0, 0 );
    camera.position.x = 100;
    camera.position.y = 200;
    camera.position.z = -400; 

    scene = new THREE.Scene();

    var geometry = new THREE.SphereBufferGeometry( 500, 60, 40 );
    // invert the geometry on the x-axis so that all of the faces point inward
    geometry.scale( - 1, 1, 1 );

    var texture = new THREE.TextureLoader().load( img_url);
    var material = new THREE.MeshBasicMaterial( { map: texture } );

    mesh = new THREE.Mesh( geometry, material );

    scene.add( mesh );

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( boxWidth, boxHeight);
    container.appendChild( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize, false );
 
}
function onWindowResize() {
    boxWidth = document.getElementById('vr-wrp').clientWidth;
    boxHeight = document.getElementById('vr-wrp').clientHeight;
    
    camera.aspect = boxWidth/boxHeight
    camera.updateProjectionMatrix();

    renderer.setSize(boxWidth, boxHeight);

}

function cameraMove() {
    if(camera.position.x==400) return;
    camera.position.x += 3;
    camera.position.y -= 2;
    camera.position.z+= 4;
    lat += parseFloat(85/100);
    lon += 2;

}


function animate() {

    requestAnimationFrame( animate );
    update();

}

function update() {

    if ( isUserInteracting === true ) {
        cameraMove();
    }

    lat = Math.max( - 85, Math.min( 85, lat ) );
    phi = THREE.MathUtils.degToRad( 90 - lat );
    theta = THREE.MathUtils.degToRad( lon );

    camera.target.x = 500 * Math.sin( phi ) * Math.cos( theta );
    camera.target.y = 500 * Math.cos( phi );
    camera.target.z = 500 * Math.sin( phi ) * Math.sin( theta );

    camera.lookAt( camera.target );

    /*
    // distortion
    camera.position.copy( camera.target ).negate();
    */

    renderer.render( scene, camera );

}
