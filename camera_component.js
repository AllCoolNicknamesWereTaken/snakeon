AFRAME.registerComponent('camera_component', {
  schema: {type: 'vec3'},
  tick: function (time, timeDelta) {
    if(this.el.object3D.rotation.y >  0.80 && this.el.object3D.rotation.y <  2.0 ) {
      //floor.rotation.y =+ 90;
      rotation_contener.setAttribute('contener_rotation', "0 -90 0");
    }
    if(this.el.object3D.rotation.y <  -0.80 && this.el.object3D.rotation.y >  -2.0 ) {
      //floor.rotation.y =+ 90;
      rotation_contener.setAttribute('contener_rotation', "0 90 0");
    }
  },
  //update: function () {
  //   var object3D = this.el.object3D;
  //   var data = this.data;
  //   object3D.rotation.set(data.x, data.y, data.z);
  // },
  // // tick: function () {},
  // // remove: function () {},
  // // pause: function () {},
  // // play: function () {}
});
