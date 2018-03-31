var wallLenght = 8;
var mazeSize = 5;
var camera = document.querySelector('#camera');
var direction = 0;
var dziel  = (Math.PI*90/180);
var i = 0;
var rotation_contener = document.querySelector('#rotation_contener');
var moveDirection = {
       xz: 'z',
    speed: 0.005
}
perfectMaze(mazeSize,wallLenght);
move();
collision();
