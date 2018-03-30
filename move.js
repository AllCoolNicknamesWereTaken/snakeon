function move (){
  //var camera = document.querySelector('#camera');
  //console.log(camera);


}
function move (){
  var floor = document.querySelector('#floor');
  console.log(floor);


}


AFRAME.registerComponent('moving', {
  schema: {type: 'vec3'},
  tick: function (time, timeDelta) {
    var pos = this.el.getAttribute('position');
    console.log("pos " + this.el.object3D.position.z );
  //  this.el.setAttribute('position', `0 0 ${pos.z + 0.01}`);
    //let xy = moveDirection.xy;

    this.el.object3D.position[moveDirection.xz] = this.el.object3D.position[moveDirection.xz] + moveDirection.speed;

    // console.log(this.el.object3D.rotation.y);
    // console.log(this.el.object3D.rotation.y);
    //this.el.object3D.position.z = this.el.object3D.position.z -0.02;
    // this.el.object3D.position.y = this.el.object3D.position.y + 0.025 * direction.y ;
    // his.el.object3D.position.x = this.el.object3D.position.z + 0.025* direction.x;
    // this.el.object3D.position.y = this.el.object3D.position.z + 0.025* direction.y;
    // this.el.object3D.position.z = this.el.object3D.position.z + 0.025* direction.z;

  // //  console.log(floor);
  //   if(this.el.object3D.rotation.y >  0.80 && this.el.object3D.rotation.y <  2.0 ) {
  //     //floor.rotation.y =+ 90;
  //     floor.setAttribute('rotation', "0 90 0");
  //   }
  //   if(this.el.object3D.rotation.y <  -0.80 && this.el.object3D.rotation.y >  -2.0 ) {
  //     //floor.rotation.y =+ 90;
  //     floor.setAttribute('rotation', "0" + direction.y + "0");
  //   }
    // else if((this.el.object3D.rotation.y <  -0.80) && this.el.object3D.rotation.y >  -2.0) {
    //   // this.el.object3D.position.x = this.el.object3D.position.x + 0.025;
    // }
    // else {
    //   // this.el.object3D.position.z = this.el.object3D.position.z - 0.025;
    // }


    // console.log('dupa');
  },
  // update: function () {},
  // tick: function () {},
  // remove: function () {},
  // pause: function () {},
  // play: function () {}
});
