document.onkeydown = function( evt)
{
  evt = evt || window.event;
  switch (evt.keyCode)
  {
    case 37: // links
      if(tet.shape.getBlock1().position.x >= 0.5 && tet.shape.getBlock2().position.x >= 0.5 &&tet.shape.getBlock3().position.x >= 0.5 &&tet.shape.getBlock4().position.x >= 0.5) {
        tet.changeX(-1);
      }
      break;
    case 38: // oben
      tet.rotate();
      break;
    case 39: // rechts
      if(tet.shape.getBlock1().position.x <= 8.5 && tet.shape.getBlock2().position.x <= 8.5 && tet.shape.getBlock3().position.x <= 8.5 && tet.shape.getBlock4().position.x <= 8.5) {
        tet.changeX(1);
      }
      break ;
    case 40: // unten
      if(tet.shape.getBlock1().position.y >= 0.5 + OffsetY && tet.shape.getBlock2().position.y >= 0.5 + OffsetY && tet.shape.getBlock3().position.y >= 0.5 + OffsetY &&tet.shape.getBlock4().position.y >= 0.5 + OffsetY) {
        tet.changeY(-1);
      }
      break;
  }
};


function moveBlock()
{
  if(tet.shape.getBlock1().position.y > 0.5 + OffsetY && tet.shape.getBlock2().position.y > 0.5 + OffsetY && tet.shape.getBlock3().position.y > 0.5 + OffsetY && tet.shape.getBlock4().position.y > 0.5 + OffsetY) {
    tet.changeY(-1);
    setTimeout("moveBlock()", 1000);
  }
  else {
    if(boolgame == true) {
      checkRows();
      newTet();
    }
    else {
      alert("Spiel zuende");
    }
  }
}


function checkRows()
{
  var rowComplete = true;
  for(var x = 0; x < 20; ++x) {
    rowComplete = true;
    for(var y = 0; y < 10; ++y) {
      if(field.fieldArray[x][y] == 0) {
        rowComplete = false;
        break;
      }
    }
    if(rowComplete) {
      removeRow(x);
    }
  } 
}

function removeRow(row)
{
  for(var x=0; x<10; ++x) {
    //field.fieldArray[row][x] = 0;
    // hier scene.remove() aufrufen
  }
  
  for(var x = row; x < 20; ++x) { // alle Zeilen über row 1 runterschieben
    for(var y = 0; y < 10; ++y) { // Zeile durchgehen
      if(x < 19) {
        //field.fieldArray[x][y] = field.fieldArray[x+1][y];
        // hier die Koordinaten der Blöcke ändern
      }    
      else {
        //field.fieldArray[x][y] = 0;
        //hier oberste Zeile clearen/auf 0 setzen (müsste so schon passen)
      }
    }
  }
}

