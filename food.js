function food(n, lenght) {
  let sideXZ = getRandomInt(2,3) === 2 ? 'x' : 'z';
  let side = Math.radom() > 0.5 ? 1 : -1;

}
AFRAME.registerComponent('food', {
  schema: {type: 'vec3'},
  init: function () {

    let sideZ = Math.random() > 0.5 ? 1 : -1;

    this.el.object3D.position.z = ((wallLenght * (mazeSize/2)) * sideZ) - sideZ*(wallLenght/2)
    sideX = Math.random() > 0.5 ? 1 : -1;
    this.el.object3D.position.x = ((wallLenght * (mazeSize/2)) * sideX) - sideX * (wallLenght/2);
},
});
