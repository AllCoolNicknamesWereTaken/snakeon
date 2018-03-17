var box = document.querySelector("#BrickBox");
var wall = document.querySelector("#Wall");
var scene = document.getElementById('scene');
var matrix = [];
var element = 0;

// box.addEventListener('mouseenter', function(){
//     box.setAttribute('scale',{
//         x:2,
//         y:1,
//         z:1
//       }
//     )
// });
function isZero(currentValue) {
return currentValue == 0;
}

function ChangeState(direction, x, y) {
newState = createState();
console.log(direction);
newState.x = x + direction.x;
newState.y = y + direction.y;
return newState;
}

function createState() {
return {
x : null,
y : null
};
}
function CreateMaze(matrix, n) {
var amount = 0;
var moves = []
var state = createState();
var newState = createState();
var stack = [];
state = {
  x : Math.floor(Math.random()*n),
  y : Math.floor(Math.random()*n)

}

RemoveWall();

function RemoveWall( ){
matrix[state.y][state.x] = 0;



if(state.y - 1 >= 0 && matrix[state.y - 1][state.x] === 1) {
  amount++;
  moves.push({
    x: 0,
    y: -1
  });
}
if(state.y + 1 < n && matrix[state.y + 1][state.x] === 1) {
  amount++;
  moves.push({
    x: 0,
    y: 1
  });
}
if(state.x -1 >= 0 && matrix[state.y][state.x -1 ] === 1) {
  amount++;
  moves.push({
    x: -1,
    y: 0
  });
}
if(state.x + 1 < n && matrix[state.y][state.x + 1] === 1) {
  amount++;
  moves.push({
    x: 1,
    y: 0
  });
}

if(amount == 0 ) {

  if(matrix.every(function(submatrix) {
    return submatrix.every(isZero);
  })){
    console.log('wlazlem tuuu');
    return;
  }
  else {
    var z = stack.pop()
    state.x = z.x;
    state.y = z.y;
    RemoveWall();
    return;
  }
}
stack.push({
  x : state.x,
  y : state.y
});

console.log(moves);
newState = ChangeState(moves[Math.floor(Math.random()*amount)], state.x, state.y);
console.log(Math.floor(Math.random()*amount))
//console.log(state.x + ' ' + state.y + ' ' + newState.x + ' ' + newState.y);
//console.log(newState.x + ' ' + newState.y + ' ' + state.x + ' ' + state.y);

if(element = document.getElementById(state.x + ' ' + state.y + ' ' + newState.x + ' ' + newState.y) ||
    document.getElementById(newState.x + ' ' + newState.y + ' ' + state.x + ' ' + state.y)) {
      scene.removeChild(element);

    }
state.x = newState.x;
state.y = newState.y;
moves = [];
amount = 0;
RemoveWall();

}
}

function CreateWall(position, rotation, id) {
var element = document.createElement('a-box');
element.setAttribute('height', '10');
element.setAttribute('width', '0.01');
element.setAttribute('depth', '8');
element.setAttribute('color', 'green');
element.setAttribute('roughness', '1');
element.setAttribute('metalness', '0');
element.setAttribute("position", position[0] + ' ' + position[1] + ' ' + position[2]);
element.setAttribute('rotation', rotation);
element.setAttribute('id', id );
scene.appendChild(element);

}

function perfectMaze(n, lenght) {

var state1 = [-n*lenght/2, -0.25 ,-(n*lenght/2) + (lenght/2)];
var state2 = [(-n*lenght/2) + (lenght/2), -0.25 ,-(n*lenght/2)];
var rotation = "0 0 0";

 for( var j = 0; j <= n; j++ ) {
   matrix[j] = [];
   for(var i = 0; i < n; i++ ) {
      CreateWall(state1, rotation, (j-1) + " " + i + " " + j + " " + i);
      CreateWall(state2,"0 90 0", i + " " + (j-1) + " " + i + " " + j );
      if(j!==n) {
        matrix[j][i] = 1;
        //console.log(matrix);
      }

     state1[2] = state1[2] + lenght;
     state2[0] = state2[0] + lenght;
   }
   state1[0] = state1[0] + lenght;
   state1[2] = -(n*lenght/2) + (lenght/2);
   state2[2] = state2[2] + lenght;
   state2[0] = (-n*lenght/2) + (lenght/2);
}
// console.log(JSON.stringify(matrix));
matrix.pop();

CreateMaze(matrix, n);
}
