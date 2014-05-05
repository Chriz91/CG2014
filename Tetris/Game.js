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
		scene.add(tet.shape);
		moveBlock();
}
