function gameOver() {
  document.getElementById('floor').removeAttribute('moving');
  console.log('gameover');
}
function winerOrLoser(el) {
   console.log(el.detail.el.classList.contains( 'princess' ));
  console.log(el);
  if (el.detail.el.classList.contains( 'princess' )) {
    score += 1;
    mazeSize += 2;
    

  }
  else {
    console.log('ściana');
    gameOver();
  }

}
