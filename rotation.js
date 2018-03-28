AFRAME.registerComponent('contener_rotation', {
  schema: {type: 'vec3'},
  // tick: function (time, timeDelta) {
  //
  // },
  update: function () {
    var object3D = this.el.object3D;
    var data = this.data;
    direction = direction + data.y;
    object3D.rotation.set(data.x, direction, data.z);
  },
  // tick: function () {},
  // remove: function () {},
  // pause: function () {},
  // play: function () {}
});
