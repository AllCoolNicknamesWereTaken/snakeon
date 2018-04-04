function gameOver() {
  document.getElementById('floor').removeAttribute('moving');
  remove();
  over = true;
  mazeSize = 3;
  score = 0;
  addFloor();

}
function winerOrLoser(el) {

  if (el.detail.el.classList.contains( 'princess' )) {
    score += 1;
    mazeSize += 2;
    if(document.getElementById('points').getAttribute('value').slice(6) < score) {
        document.getElementById('points').removeAttribute('value');
        document.getElementById('points').setAttribute('value',"Best: " + score);
    }
    document.getElementById('floor').removeAttribute('moving');
    document.getElementById('rotation_contener').removeAttribute('contener_rotation');
    remove();
    addFloor();
    perfectMaze(mazeSize, wallLenght);
    boardView();
    setTimeout(collision, 500);

  }
  else {

    // over = true;
    // mazeSize = 5;
    // score = 0;
    gameOver();
  //  remove();

    //setTimeout(remove, 500);

    document.getElementById("UI_intro").setAttribute("visible", "true");

  }

}
