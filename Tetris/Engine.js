var hardcore = false;
var texture = THREE.ImageUtils.loadTexture('textures/explosion.jpg')
var endtexture = THREE.ImageUtils.loadTexture('textures/youlose.jpg')
var timeoutremove;
var geometry = new THREE.CubeGeometry(10, 1, 1); 
var material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide} );
var line = new THREE.Mesh(geometry,material);
var yupCounter = 0;
var ydownCounter = 15;
document.onkeydown = function(evt)
{
  debug("Enter document.onkeydown: keyCode " + evt.keyCode);
  
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
  
  debug("Exit document.onkeydown: keyCode " + evt.keyCode);
};


function moveBlock()
{
  debug("Enter moveBlock()");
  if (field.fieldArray[19][5] != 0) {
    boolgame= false;

    var geometry = new THREE.CubeGeometry(10, 20, 1); 
    var material = new THREE.MeshBasicMaterial( {map: endtexture, side: THREE.DoubleSide} );
    var endblock = new THREE.Mesh(geometry,material);
      
    endblock.position.x = 4.5;
    endblock.position.y = 10+OffsetY;
    endblock.position.z = 2;
    if (hardcore == true) {
      camera.rotation.z = 0;
      camera.rotation.y = 0;
    }
    renderer.setClearColor( 0x000000, 1);
    scene.add(endblock);
    
    update();
  }
  else if (tet.shape.getMinY() > 0.5 + OffsetY && tet.getState() == true) {
    tet.changeY(-1);
    setTimeout("moveBlock()", speedvalue);
    if (hardcore == true) {
      camera.rotation.z += 15*Math.PI/180;
    }
  }
  else {
    if (boolgame == true) {
      //tet.setState(false);
      fillArray();
      checkRows();
      newTet();
    }
  }
  debug("Exit moveBlock()");
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
  debug("Enter removeRow("+ row + ")");
  updatePunkte();
  
  //laesst unterste zu verschwindende Reihe rot blinken
  blinkRow(row);
  
  for (var x = 0; x < 10; ++x) {
    debug("scene.remove(field.fieldArray[" + row + "][" + x + "]);")
    scene.remove(field.fieldArray[row][x]);
  }
  
  remove(row);
  debug("Exit removeRow("+ row + ")");
}


function remove(row)
{
  debug("Enter remove(" + row + ")");
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
  printField();
  debug("Exit remove(" + row + ")");
}


function fillArray()
{
  debug("Enter fillArray()");
  debug("fill: \nfield.fieldArray[" + (tet.shape.getBlock1().position.y+10) + "][" + tet.shape.getBlock1().position.x + "]" +
  		            "\nfield.fieldArray[" + (tet.shape.getBlock2().position.y+10) + "][" + tet.shape.getBlock2().position.x + "]" + 
                    "\nfield.fieldArray[" + (tet.shape.getBlock3().position.y+10) + "][" + tet.shape.getBlock3().position.x + "]" +
                    "\nfield.fieldArray[" + (tet.shape.getBlock4().position.y+10) + "][" + tet.shape.getBlock4().position.x + "]");
  field.fieldArray[tet.shape.getBlock1().position.y+10][tet.shape.getBlock1().position.x] = tet.shape.getBlock1();
  field.fieldArray[tet.shape.getBlock2().position.y+10][tet.shape.getBlock2().position.x] = tet.shape.getBlock2();
  field.fieldArray[tet.shape.getBlock3().position.y+10][tet.shape.getBlock3().position.x] = tet.shape.getBlock3();
  field.fieldArray[tet.shape.getBlock4().position.y+10][tet.shape.getBlock4().position.x] = tet.shape.getBlock4();

  printField();
  debug("Exit fillArray()");
}


function setModeTrue()
{
  hardcore = true;
  update();
}


function setModeFalse()
{
  hardcore = false;
  camera.rotation.z = 0;
  update();
}


function printField()
{
  for (var x = 19; x >= 0; --x) {
    var line = (x<10 ? " " : "") + x + "| "; 
    for (var y = 0; y < 10; ++y) {
      //line += field.fieldArray[x][y] + " ";
      line += (field.fieldArray[x][y] != 0 ? 1 : 0) + " ";
    } 
    debug(line);
  }
}


function debug(msg)
{
  console.log(msg);
}