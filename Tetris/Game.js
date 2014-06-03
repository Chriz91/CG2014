var tet1;
var tet2;
var tet;
var boolgame;
var speedvalue = 1000;
var punkte = 0;
var level = 1;
var lines = 0;
var Tetr; 
var Texture = false;

function setTexture()
{
  if (Texture == false) {
  	Texture = true;
  }
  else if (Texture == true) {
  	Texture = false;
  }
}

var t;
function rotateTetr()
{
  Tetr.T.rotation.y += 1*Math.PI/180;
  Tetr.E.rotation.y -= 1*Math.PI/180;
  Tetr.ST.rotation.y += 1*Math.PI/180;
  Tetr.R.rotation.y -= 1*Math.PI/180;
  Tetr.I.rotation.y += 1*Math.PI/180;
  Tetr.S.rotation.y -= 1*Math.PI/180;
  
  t = setTimeout(function(){rotateTetr()}, speedvalue/100);
}


function getTexture()
{
  return Texture;	
}


function game()
{
  Tetr= new TetrisLetters();
  var boolblock;
  boolgame = true;
  tet = new Tetrominoes();
  tet2 = new Tetrominoes();
  tet2.changeX(10);
  moveBlock();
}


function newTet()
{
  debug("Enter newTet()\n\n");
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
  ++lines;
  document.getElementById("linien").value = lines;
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
  lines = 0;
  speedvalue = 1000;
  document.getElementById("punkte").value = punkte;
  document.getElementById("level").value = level;
}