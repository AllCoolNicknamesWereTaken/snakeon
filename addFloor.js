function addFloor() {
  floor = null;
  var element = document.createElement('a-box');
  // element.setAttribute('height', '10');
  // element.setAttribute('width', '2');
  // element.setAttribute('depth', '8');
  element.setAttribute('height', 1);
  // element.setAttribute('color', 'green');
  element.setAttribute('width', '40');
  element.setAttribute('depth', '40');
  element.setAttribute('position', '0 -0.5 0');
  element.setAttribute("src", "#grass");
  element.setAttribute('roughness', "1");
  element.setAttribute('metalness', "0" );
  element.setAttribute('id', "floor");
  document.querySelector('#moving_contener').appendChild(element);
  var foodelement = document.createElement('a-box')
  foodelement.setAttribute('id', 'princess');
  foodelement.setAttribute('height', '7');
  foodelement.setAttribute('width', '5');
  foodelement.setAttribute("gltf-model", "#princess_obj");
  foodelement.setAttribute('scale', "2 3 2");
  foodelement.setAttribute('food', "0 0 0" );
  foodelement.setAttribute('class', "princess" );
  element.appendChild(foodelement);
  floor = document.getElementById("floor");
}
