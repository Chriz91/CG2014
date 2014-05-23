var tet;
var boolgame;

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
	document.getElementById("punkte").value += 10;
}