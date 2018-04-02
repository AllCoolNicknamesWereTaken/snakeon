

AFRAME.registerComponent('moving', {
  schema: {type: 'vec3'},
  tick: function (time, timeDelta) {
    var pos = this.el.getAttribute('position');
    this.el.object3D.position[moveDirection.xz] =
    this.el.object3D.position[moveDirection.xz] + moveDirection.speed;
  },
  // update: function () {},
  // tick: function () {},
  // remove: function () {},
  // pause: function () {},
  // play: function () {}
});
