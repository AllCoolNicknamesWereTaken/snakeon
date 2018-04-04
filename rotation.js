var is_rotating = false;
AFRAME.registerComponent('contener_rotation', {
  schema: {type: 'int'},
  // tick: function (time, timeDelta) {
  //
  // },
 update: function () {
    if (is_rotating) {
      return;
    }

    is_rotating = true;
    var object3D = this.el.object3D;
    console.log('dir', direction);
   this.el.setAttribute('animation', 'property: rotation; to: \'0 ' + direction + ' 0\'; from: \'0 ' + (direction - rotation_delta) + ' 0 \'');
   setTimeout(() => {
     is_rotating = false;
   }, 2000);
  },
  // tick: function () {},
  // remove: function () {},
  // pause: function () {},
  // play: function () {}
});
