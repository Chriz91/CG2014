var tet1;
var tet2;
var tet;
var boolgame;
var speedvalue = 1000;
var punkte = 0;
var level = 1;


function game()
{
  var boolblock;
  boolgame = true;
  tet = new Tetrominoes();
  tet2 = new Tetrominoes();
  tet2.changeX(10);
  moveBlock();
}


function newTet()
{	
  tet = Object.create(tet2);
  tet.shape.setX(-10);
  tet.setState(true);
  tet2 = new Tetrominoes();
  tet2.shape.setX(10);
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
  if(level <= 5) {
    level += 1;
    updateSchwierigkeit();
  }
  document.getElementById("punkte").value = punkte;
  document.getElementById("level").value = level;
}


function updateSchwierigkeit()
{
  speedvalue -= 200;
}


function newGame()
{
  window.location.reload();
  punkte = 0;
  level = 1;
  speedvalue = 1000;
  document.getElementById("punkte").value = punkte;
  document.getElementById("level").value = level;
}