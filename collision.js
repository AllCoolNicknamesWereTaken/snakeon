function collision() {
  camera.setAttribute('aabb-collider', 'objects: .dummy-class');
  camera.setAttribute('aabb-collider', 'objects: .wall');
  camera.addEventListener('hit', function(el) {console.log("dupa")});
}
