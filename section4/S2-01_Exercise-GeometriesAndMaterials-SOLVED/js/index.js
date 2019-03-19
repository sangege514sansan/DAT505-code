
var scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );

var renderer = new THREE.WebGLRenderer({antialias:true});

renderer.setClearColor("#000000");

renderer.setSize( window.innerWidth, window.innerHeight );


document.body.appendChild( renderer.domElement );

var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);

var geometry = new THREE.BoxGeometry(50, 50, 50);
var geometry2 = new THREE.SphereGeometry(135,10,80);
var geometry3 = new THREE.TorusGeometry( 500, 2, 16, 100 );
var geometry4 = new THREE.TorusGeometry( 800, 50,300);
var geometry6 = new THREE.SphereGeometry(350,5,5);


var material = new THREE.MeshLambertMaterial({
  color: '#D2BE82',
  lightMap: null,
  lightMapIntensity: 1,
  emissive: 0x000000,
  emissiveMap: null,
  emissiveIntensity: 1,
  specularMap: null
});
var material2 = new THREE.MeshNormalMaterial();
var material3 = new THREE.MeshBasicMaterial({color:"#428181"});
var material4 = new THREE.MeshBasicMaterial({color:"#9B9B9B"});
var material5 = new THREE.MeshBasicMaterial({color:"#F59797"});
var material6 = new THREE.MeshBasicMaterial({color:"#FFFF9B"});








var mesh1 = new THREE.Mesh( geometry, material2);
mesh1.position.z = -800;
mesh1.position.x =0;
mesh1.position.y =0;
mesh1.rotation.x = 1.55;
var mesh2 = new THREE.Mesh( geometry4, material4);
mesh2.position.z = -1300;
mesh2.position.x =0;
mesh2.position.y =0;

var mesh3 = new THREE.Mesh( geometry2, material3);
mesh3.position.z = -1100;
mesh3.position.x =0;
mesh3.position.y =0;
mesh3.rotation.x = 1.55;
var mesh4 = new THREE.Mesh( geometry3, material5);
mesh4.position.z = -800;
mesh4.position.x =0;
mesh4.position.y =0;
//mesh4.rotation.x = 1.55;
var mesh5 = new THREE.Mesh( geometry4, material5);
mesh5.position.z = -1400;
mesh5.position.x =0;
mesh5.position.y =0;
mesh5.rotation.x = 1.55;
var mesh6= new THREE.Mesh( geometry6, material6);
mesh6.position.z = -1400;
mesh6.position.x =0;
mesh6.position.y =0;
mesh6.rotation.x = 1.55;


scene.add(mesh1);
scene.add(mesh2);
scene.add(mesh3);
scene.add(mesh4);
scene.add(mesh5);
scene.add(mesh6);




/*var group = new THREE.Group();
group.add(mesh1);
group.add(mesh2);
scene.add(group);

function changePivot(0,0,-1000,group){
  let wrapper = new THREE.Object3D();
  wrapper.position.set(0,0,-1000,group);
  wrapper.add(group);
  obj.position.set(0,0,1000);
  return wrapper;
}*/

//var mesh13 = new THREE.Mesh(geometry2, material6);
//mesh13.position.z = -2500;
// ------------------------------------------------

// Add mesh to scene

//scene.add(mesh13);

var rot = 0;

// Render Loop
var render = function () {
  requestAnimationFrame( render );

mesh1.rotation.y += 0.01;
//mesh2.rotation.y += 0.01; //Continuously rotate the mesh
mesh3.rotation.y -= 0.01;
mesh4.rotation.x += 0.02;
mesh5.rotation.y += 0.03;
mesh6.rotation.y += 0.01;




  // Render the scene
  renderer.render(scene, camera);
};
render(); //Run the function render
