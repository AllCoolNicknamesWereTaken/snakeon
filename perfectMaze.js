var box = document.querySelector("#BrickBox");
var wall = document.querySelector("#Wall");
var scene = document.getElementById('floor');
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
// console.log(direction);
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
    // console.log('wlazlem tuuu');
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

// console.log(moves);
newState = ChangeState(moves[Math.floor(Math.random()*amount)], state.x, state.y);
// console.log(Math.floor(Math.random()*amount))
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
var element = document.createElement('a-entity');
// element.setAttribute('height', '10');
// element.setAttribute('width', '2');
// element.setAttribute('depth', '8');
element.setAttribute('gltf-model', '#wall_obj');
// element.setAttribute('color', 'green');
element.setAttribute('scale', '0.7 0.7 0.7');
element.setAttribute('roughness', '1');
element.setAttribute('metalness', '0');
element.setAttribute("position", position[0] + ' ' + position[1] + ' ' + position[2]);
element.setAttribute('rotation', rotation);
element.setAttribute('id', id );
element.classList.add('wall');
scene.appendChild(element);


}

function perfectMaze(n, lenght) {
  //var box = document.querySelector("#BrickBox");
  var wall = document.querySelector("#Wall");
  scene = document.getElementById('floor');
  var matrix = [];
  var element = 0;
console.log("wlazlem pacze co dalej");
var state1 = [-n*lenght/2, 0.35 ,-(n*lenght/2) + (lenght/2)];
var state2 = [(-n*lenght/2) + (lenght/2), 0.35 ,-(n*lenght/2)];
var rotation = "0 90 0";
//floorSize =
console.log('widthfloor: ' + floor.getAttribute('width'))
floorSize = n*lenght;
console.log(floor);
floor.setAttribute('width', floorSize);
floor.setAttribute('depth', floorSize);
console.log('widthfloor: ' + floor.getAttribute('width'))
//floor.getAttribute('depth') = floorWidth;

 for( var j = 0; j <= n; j++ ) {
   matrix[j] = [];
   for(var i = 0; i < n; i++ ) {
      CreateWall(state1, rotation, (j-1) + " " + i + " " + j + " " + i);
      CreateWall(state2,"0 0 0", i + " " + (j-1) + " " + i + " " + j );
      if(j!==n) {
        matrix[j][i] = 1;

      }

     state1[2] = state1[2] + lenght;
     state2[0] = state2[0] + lenght;
   }
   state1[0] = state1[0] + lenght;
   state1[2] = -(n*lenght/2) + (lenght/2);
   state2[2] = state2[2] + lenght;
   state2[0] = (-n*lenght/2) + (lenght/2);
}

matrix.pop();

CreateMaze(matrix, n);
}
