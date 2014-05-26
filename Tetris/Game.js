var tet;
var boolgame;
var speedvalue = 1000;
var count=1;

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
{	if(count==1){
	var a = parseInt(document.getElementById("punkte").value)+ 10;
	document.getElementById("punkte").value=a.toString();
	updateLevel();
	}
}

function updateLevel()
{
	if(parseInt(document.getElementById("punkte").value) >= 100)
	{
	
	
		var b= parseInt(document.getElementById("level").value)+ 1;
		document.getElementById("level").value=b.toString();
		
		document.getElementById("punkte").value = "0";
		updateSchwierigkeit();
		count++;
	}
	else{
	count=1;
	}	
}

function updateSchwierigkeit()
{
	speedvalue -= 100;
	
}