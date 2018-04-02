function gameOver() {
  document.getElementById('floor').removeAttribute('moving');

}
function winerOrLoser(el) {

  if (el.detail.el.classList.contains( 'princess' )) {
    score += 1;
    mazeSize += 2;
    //console.log( mazeSize, wallLenght);
    if(document.getElementById('points').getAttribute('value').slice(6) < score) {
        document.getElementById('points').removeAttribute('value');
        document.getElementById('points').setAttribute('value',"Best: " + score);
    }
    remove();
    addFloor();
    perfectMaze(mazeSize, wallLenght);
    boardView();
    setTimeout(collision, 500);

  }
  else {

    over = true;
    mazeSize = 5;
    score = 0;
    remove();
    //setTimeout(remove, 500);

    document.getElementById("UI_intro").setAttribute("visible", "true");

  }

}
