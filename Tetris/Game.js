var tet;
var boolgame;
var speedvalue = 1000;
var punkte = 0;
var level = 1;


function game()
{
  var boolblock;
  boolgame = true;
  newTet();
}


function newTet()
{
  tet = new Tetrominoes();
  moveBlock();
}


function updatePunkte()
{
  if (punkte >= 100) {
    updateLevel();
  }
  else {
    punkte += 10;
    document.getElementById("punkte").value = punkte;
  }
}


function updateLevel()
{
  punkte = 0;
  level +=1;
  document.getElementById("punkte").value = punkte;
  document.getElementById("level").value = level;
  updateSchwierigkeit();
}


function updateSchwierigkeit()
{
  speedvalue -= 150;
}


function newGame()
{
  window.location.reload();
  punkte = 0;
  level = 1;
  speedvalue= 1000;
}