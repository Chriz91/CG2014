var tet;
var boolgame;
var speedvalue = 1000;

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

function updateLevel()
{
	if(document.getElementById("punkte").value > 100)
		{
		document.getElementByID("level").value +=1;
		document.getElementByID("punkte").value = 0;
		}
}

function updateSchwierigkeit()
{
	speedvalue -= 100;
}