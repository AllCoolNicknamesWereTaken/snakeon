function collision() {
  cameraBox.setAttribute('aabb-collider', 'objects: .dummy-class');
  cameraBox.setAttribute('aabb-collider', 'objects: .wall, .princess');
  //cameraBox.setAttribute('aabb-collider', 'objects: .princess');
  cameraBox.addEventListener('hit', winerOrLoser);
}
