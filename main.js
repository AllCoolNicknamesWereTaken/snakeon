var wallLenght = 11;
var mazeSize =5;
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

boardView();
perfectMaze(mazeSize,wallLenght);
//Interval = setInterval(function(){move()}, 300)
setTimeout(collision, 500);
