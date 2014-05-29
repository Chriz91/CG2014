var hardcore = false;
var texture = THREE.ImageUtils.loadTexture('textures/explosion.jpg')

var timeoutremove;



document.onkeydown = function(evt)
{
  evt = evt || window.event;
  switch (evt.keyCode)
  {
    case 37: // links
      if (tet.shape.getMinX() >= 0.5) {
        tet.changeX(-1);
      }
      break;
    case 38: // oben
      tet.rotate();
      break;
    case 39: // rechts
      if (tet.shape.getMaxX() <= 8.5) {
        tet.changeX(1);
      }
      break ;
    case 40: // unten
      if (tet.shape.getMinY() >= 0.5 + OffsetY) {
        tet.changeY(-1);
      }
      break;
  }
};


function moveBlock()
{
  if (hardcore == true){
    if (field.fieldArray[19][5] != 0) {
      boolgame= false;
      alert("Spiel zuende");
	}
    else if (tet.shape.getMinY() > 0.5 + OffsetY && tet.getState() == true) {
      tet.changeY(-1);
      setTimeout("moveBlock()", speedvalue);
      camera.rotation.z += 15*Math.PI/180;
    }
    else {
      if (boolgame == true) {
        tet.setState(false);
        fillArray();
        checkRows();
        newTet();
      }
    }
  }
  else
  {
    if (field.fieldArray[19][5] != 0) {
      boolgame= false;
      alert("Spiel zuende");
    }
    else if (tet.shape.getMinY() > 0.5 + OffsetY && tet.getState()==true) {
      tet.changeY(-1);
      setTimeout("moveBlock()", speedvalue);
    }
    else {
      if (boolgame == true) {
        tet.setState(false);
        fillArray();
        checkRows();
        newTet();
	  }
    }
  }
}


function checkRows()
{
  var rowComplete = true;
  for (var x = 19; x >= 0; --x) {
    rowComplete = true;
    for (var y = 0; y < 10; ++y) {
      if (field.fieldArray[x][y] == 0) {
        rowComplete = false;
        break;
      }
    }
    if (rowComplete) {
      removeRow(x);
    }
  } 
}

function blinkRow(row)
{

	var geometry = new THREE.CubeGeometry(10, 1, 1); 
	var material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide} );
	var line = new THREE.Mesh(geometry,material);
	
	  line.position.x = 4.5;
	  line.position.y = row+OffsetY;
	  line.position.z = 2;
	
	

						scene.add(line);
						update();
						//clearTimeout(timeoutadd);
						
		timeoutremove= setTimeout(
				function()
				{
					scene.remove(line);
					update();	
					
					clearTimeout(timeoutremove);
				}, 150);
		
return;
}

function removeRow(row)
{
  updatePunkte();
  
  //l�sst unterste zu verschwindende Reihe rot blinken
  blinkRow(row);
  
  
  for (var x = 0; x < 10; ++x) 
  {
    scene.remove(field.fieldArray[row][x]);
  }
  
  remove(row);
 
  
  
 
}

function remove(row)
{
	  for (var x = row; x < 20; ++x) { // alle Zeilen über row 1 runterschieben
		    for (var y = 0; y < 10; ++y) { // Zeile durchgehen
		      if (x < 19) {
		        field.fieldArray[x][y] = field.fieldArray[x+1][y];
		        // Koordinaten der Blöcke ändern
		        if (field.fieldArray[x][y] != 0) {
		          field.fieldArray[x][y].position.y -= 1;
		        }
		      }    
		      else {
		        field.fieldArray[x][y] = 0;
		      }
		    }
		  }	
}

function fillArray()
{
  field.fieldArray[tet.shape.getBlock1().position.y+10][tet.shape.getBlock1().position.x] = tet.shape.getBlock1();
  field.fieldArray[tet.shape.getBlock2().position.y+10][tet.shape.getBlock2().position.x] = tet.shape.getBlock2();
  field.fieldArray[tet.shape.getBlock3().position.y+10][tet.shape.getBlock3().position.x] = tet.shape.getBlock3();
  field.fieldArray[tet.shape.getBlock4().position.y+10][tet.shape.getBlock4().position.x] = tet.shape.getBlock4();

  for (var x = 19; x >= 0; --x) {
    var line = (x<10 ? " " : "") + x + "| "; 
    for (var y = 0; y < 10; ++y) {
      line += field.fieldArray[x][y] + " ";
    } 
    console.log(line);
  } 
}


function setModeTrue()
{
  hardcore = true;
  update();
}


function setModeFalse()
{
  hardcore = false;
  update();
}