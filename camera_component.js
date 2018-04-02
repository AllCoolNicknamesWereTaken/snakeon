var rotation_delta = 0;
AFRAME.registerComponent('camera_component', {
  schema: {type: 'vec3'},
  tick: function (time, timeDelta) {
    if (is_rotating) {
      return;
    }

    if(((this.el.object3D.rotation.y) % dziel) >  0.90 && ((this.el.object3D.rotation.y) % dziel) <  2.0 ) {
      //floor.rotation.y =+ 90;

      rotation_delta = -90;
      direction = direction + rotation_delta;
      i++
      rotation_contener.setAttribute('contener_rotation', i);
      if(moveDirection.xz === 'z'){
        moveDirection.xz = 'x';
      }
      else {
        moveDirection.xz = 'z';
        moveDirection.speed = moveDirection.speed * (-1);


      }
    }
    if((this.el.object3D.rotation.y % dziel) <  -0.90 && ((this.el.object3D.rotation.y) % dziel) >  -2.0 ) {


      rotation_delta = +90;
      direction = direction + rotation_delta;
      i++
      rotation_contener.setAttribute('contener_rotation', i);
      if(moveDirection.xz === 'z'){
        moveDirection.xz = 'x';
        moveDirection.speed = moveDirection.speed * (-1);
      }
      else {
        moveDirection.xz = 'z';
      }

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
