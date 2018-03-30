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
    // if(camera.rotation.y%rad(360) >  0.90 && camera.rotation.y%rad(360) <  2.0 ) {
    //   //floor.rotation.y =+ 90;
    //   direction = direction - 90;
    //   rotation_contener.setAttribute('contener_rotation', 90);
    // }
    // if(camera.rotation.y%rad(360) <  -0.90 && camera.rotation.y%rad(360) >  -2.0 ) {
    //   //floor.rotation.y =+ 90;
    //   direction = direction + 90;
    // }
    is_rotating = true;
    var object3D = this.el.object3D;
  //  var data = this.data;
    //direction = direction + data;
    console.log('dir', direction);
   //  var rot = document.querySelector('[camera_component]').getAttribute('rotation');
   //  document.querySelector('[camera_component]').setAttribute('rotation', `${rot.x} ${rot.y + data} ${rot.z}` );
    // this.data = 0;
   this.el.setAttribute('animation', 'property: rotation; to: \'0 ' + direction + ' 0\'; from: \'0 ' + (direction - rotation_delta) + ' 0 \'');
   //
   setTimeout(() => {
     is_rotating = false;
   }, 2000);
   // object3D.animation.set(property: rotation; rotation; to: '0 ' + direction + ' 0');


  },
  // tick: function () {},
  // remove: function () {},
  // pause: function () {},
  // play: function () {}
});
