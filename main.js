var wallLenght = 11;
var mazeSize =3;
var camera = document.querySelector('#camera');
var direction = 0;
var dziel  = (Math.PI*90/180);
var i = 0;
var rotation_contener = document.querySelector('#rotation_contener');
var moveDirection = {
       xz: 'z',
    speed: 0.07
}
var score = 0;
var cameraBox = document.querySelector('#cameraBox');
var floor = document.getElementById("floor");
var over = 0;
function start_game() {
  if(over){
  console.log("wlazlem do if z over");
    addFloor();
    over = false;
  }
  document.getElementById("UI_intro").setAttribute("visible", "false");
  perfectMaze(mazeSize,wallLenght);
    boardView();
  //Interval = setInterval(function(){move()}, 300)
  setTimeout(collision, 500);
  }
function go_to_github() {
	   window.open('https://github.com/AllCoolNicknamesWereTaken/snakeon');
}
