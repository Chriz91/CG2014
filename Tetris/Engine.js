document.onkeydown = function( evt)
{
  evt = evt || window.event;
  switch (evt.keyCode)
  {
    case 37: // links
      if(tet.X >= 0.5) {
        tet.changeX(-1);
      }
      break;
    case 38: // oben
      tet.rotate();
      break;
    case 39: // rechts
      if(tet.X <= 7.5) {
        tet.changeX(1);
      }
      break ;
    case 40: // unten
      if(tet.Y >= 0.5 + OffsetY) {
        tet.changeY(-1);
      }
      break;
  }
};


function moveBlock()
{
  if(tet.Y > 0.5 + OffsetY) {
    tet.changeY(-1);
    setTimeout("moveBlock()", 1000);
    update;
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
      // zeile x entfernen
    }
  }
  
}

function removeRow(row)
{

}
