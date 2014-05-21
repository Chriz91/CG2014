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
      //aufruf zeilen loeschen
      newTet();
    }
    else {
      alert("Spiel zuende");
    }
  }
}


function checkRows()
{


}
