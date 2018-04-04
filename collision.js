function collision() {
  cameraBox.setAttribute('aabb-collider', 'objects: .dummy-class');
  cameraBox.setAttribute('aabb-collider', 'objects: .wall, .princess');
  cameraBox.addEventListener('hit', winerOrLoser);
}
