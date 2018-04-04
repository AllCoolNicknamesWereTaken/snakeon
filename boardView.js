function boardView() {
  //camera.position


rotation_contener

  document.getElementById('camera').removeAttribute('animation');
  document.getElementById('rotation_contener').setAttribute('contener_rotation', "0 0 0");
  camera.setAttribute('animation', 'property: position; to: \'1 1.5 1\'; from: \'0 ' + (mazeSize*10) + ' 0\'; dur: ' + ((mazeSize * 2) + 10000));//  + (direction - rotation_delta) + ' 0 \'');
  setTimeout(() => {
  //  camera.setAttribute('camera_component', '0 0 0');
    floor.setAttribute('moving', '0 0 0');
		//camera_component= "0 0 0" moving="0 0 0"
}, 11000);

}
