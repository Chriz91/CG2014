document.onkeydown = function( evt)
{
  evt = evt || window.event;
  switch (evt.keyCode)
  {
    case 37: 
      if(tet.X < 0.5) {
        
      }
      else {
        tet.changeX(-1);
        break;
      }
    case 38:
      tet.rotate();
      break;
    case 39:
    case 37: 
      if(tet.X > 7.5) {
        
      }
      else {
		tet.changeX(1);
		break;
      }
      break ;
    case 40: 
      if(tet.Y < 0.5 + OffsetY) {
      
      }
      else {
        tet.changeY(-1);
        break;
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
      newTet();
    }
    else {
      alert("Spiel zuende");
    }
  }
}
