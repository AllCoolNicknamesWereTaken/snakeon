function boardView() {
  //camera.position
  console.log('property: position; to: \'0 1.5 0\'; from: \'0 ' + (mazeSize*10) + ' 0\'; dur: ' + ((mazeSize * 2) + 1000));
  camera.setAttribute('animation', 'property: position; to: \'0 1.5 0\'; from: \'0 ' + (mazeSize*10) + ' 0\'; dur: ' + ((mazeSize * 2) + 10000));//  + (direction - rotation_delta) + ' 0 \'');
  setTimeout(() => {
    camera.setAttribute('camera_component', '0 0 0');
    floor.setAttribute('moving', '0 0 0');
		//camera_component= "0 0 0" moving="0 0 0"
}, 11000);
}
