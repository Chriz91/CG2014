var shapes = { // enumeration for shapes
    LINESHAPE:      0,
    SQUARESHAPE:    1,
    TSHAPE:         2,
    ZSHAPE:         3,
    SSHAPE:         4,
    LSHAPE:         5,
    MIRROREDLSHAPE: 6
};

var Shape = function()
{
  this.getMaxX = function()
  {
    var max = this.getBlock1().position.x;
    if(this.getBlock2().position.x > max) {
      max = this.getBlock2().position.x;
    }
    if(this.getBlock3().position.x > max) {
      max = this.getBlock3().position.x;
    }
    if(this.getBlock4().position.x > max) {
      max = this.getBlock4().position.x;
    }
    return max;
  };

  this.getMaxY = function()
  {
    var max = this.getBlock1().position.y;
    if(this.getBlock2().position.y > max) {
      max = this.getBlock2().position.y;
    }
    if(this.getBlock3().position.y > max) {
      max = this.getBlock3().position.y;
    }
    if(this.getBlock4().position.y > max) {
      max = this.getBlock4().position.y;
    }
    return max;
  };
  
  this.getMinX = function()
  {
    var min = this.getBlock1().position.x;
    if(this.getBlock2().position.x < min) {
      min = this.getBlock2().position.x;
    }
    if(this.getBlock3().position.x < min) {
      min = this.getBlock3().position.x;
    }
    if(this.getBlock4().position.x < min) {
      min = this.getBlock4().position.x;
    }
    return min;
  };
	
  this.getMinY = function()
  {
    var min = this.getBlock1().position.y;
    if(this.getBlock2().position.y < min) {
      min = this.getBlock2().position.y;
    }
    if(this.getBlock3().position.y < min) {
      min = this.getBlock3().position.y;
    }
    if(this.getBlock4().position.y < min) {
      min = this.getBlock4().position.y;
      }
    return min;
  };
	
  this.ColorArray = [
                     0xf0fff0,
                     0xf00faa,
                     0xf0ff00,
                     0x00ff00,
                     0xff8c00,
                     0x0000aa,
                     0xff0000,
                     ];

  // WICHTIG: es wird um den 3. Block rotiert,
  // Reihenfolge der einzelnen Shapes nicht veraendern!
  this.ShapeArray = [
                     // Lineshape
                     [
                      [0, 3],
                      [0, 2],
                      [0, 1],
                      [0, 0]                      
                     ],
                     // Quadrat
                     [
                      [0, 0],
                      [0, 1],
                      [1, 0],
                      [1, 1]
                     ],
                     // T-Form
                     [
                      [0, 0],
                      [-1, 1],
                      [0, 1],
                      [1, 1]
                     ],
                     // Z-Form
                     [
                      [-1, 1],
                      [1, 0],
                      [0, 0],
                      [0, 1]
                     ],	
                     // S-Form
                     [
                      [1, 1],
                      [-1, 0],
                      [0, 0],
                      [0, 1]
                     ],	
                     // L-Form
                     [
                      [0, 0],
                      [1, 0],
                      [0, 1],
                      [0, 2]
                     ],	
                     // Mirrored L
                     [
                      [0, 0],
                      [-1, 0],
                      [0, 1],
                      [0, 2]
                     ],	
                    ];
	
  this.setNumber = function()
  {
    this.number = Math.floor((Math.random()*7));
  };
  
  this.setNumber();
  
  this.getNumber = function()
  {
    return this.number;
  };

  var material = new THREE.MeshBasicMaterial( {color: this.ColorArray[this.getNumber()], side: THREE.DoubleSide} ); 

  var block1 = new THREE.Mesh(CreateGeometry(),material);
  var block2 = new THREE.Mesh(CreateGeometry(),material);
  var block3 = new THREE.Mesh(CreateGeometry(),material);
  var block4 = new THREE.Mesh(CreateGeometry(),material);

  this.setShape = function()
  {
    var number = this.getNumber();
    this.getBlock1().position.x = this.ShapeArray[number][0][0];
    this.getBlock1().position.y = this.ShapeArray[number][0][1];
    this.getBlock2().position.x = this.ShapeArray[number][1][0];
    this.getBlock2().position.y = this.ShapeArray[number][1][1];
    this.getBlock3().position.x = this.ShapeArray[number][2][0];
    this.getBlock3().position.y = this.ShapeArray[number][2][1];
    this.getBlock4().position.x = this.ShapeArray[number][3][0];
    this.getBlock4().position.y = this.ShapeArray[number][3][1];
  };
  
  this.setX = function(x)
  {
    this.getBlock1().position.x += x;
    this.getBlock2().position.x += x;
    this.getBlock3().position.x += x;
    this.getBlock4().position.x += x;
  };
		
  this.setY = function(y)
  {
    this.getBlock1().position.y += y;
    this.getBlock2().position.y += y;
    this.getBlock3().position.y += y;
    this.getBlock4().position.y += y;
  };
		
  this.setZ = function(z)
  {
    this.getBlock1().position.z += z;
    this.getBlock2().position.z += z;
    this.getBlock3().position.z += z;
    this.getBlock4().position.z += z;
  };
		
  this.getBlock1 = function()
  {
    return block1;
  };
  
  this.getBlock2 = function()
  {
    return block2;
  };
  
  this.getBlock3 = function()
  {
    return block3;
  };
		
  this.getBlock4 = function()
  {
    return block4;
  };

  scene.add(block1);
  scene.add(block2);
  scene.add(block3);
  scene.add(block4);

  return this;
};


function CreateGeometry()
{
  var geometry = new THREE.CubeGeometry(1, 1, 1); 
  return geometry;
}


var Tetrominoes = function()
{
  this.state = true;
  
  this.shape = new Shape();
  this.shape.setShape();
  
  this.shape.setX(5);
  this.shape.setY(9-this.shape.getMaxY());
  this.shape.setZ(1);

  this.setState = function(bool)
  {
    this.state = bool;
  }
  
  this.getState = function()
  {
    return this.state;
  }

  this.changeX = function(x) {
    if(x>0 &&
       field.fieldArray[10+this.shape.getBlock1().position.y][this.shape.getBlock1().position.x+1]== 0 &&
       field.fieldArray[10+this.shape.getBlock2().position.y][this.shape.getBlock2().position.x+1]== 0 &&
       field.fieldArray[10+this.shape.getBlock3().position.y][this.shape.getBlock3().position.x+1]== 0 &&
       field.fieldArray[10+this.shape.getBlock4().position.y][this.shape.getBlock4().position.x+1]== 0 )
    {
      this.shape.setX(x);
    }
    else if(x<0 &&
            field.fieldArray[10+this.shape.getBlock1().position.y][this.shape.getBlock1().position.x-1]== 0 &&
            field.fieldArray[10+this.shape.getBlock2().position.y][this.shape.getBlock2().position.x-1]== 0 &&
            field.fieldArray[10+this.shape.getBlock3().position.y][this.shape.getBlock3().position.x-1]== 0 &&
            field.fieldArray[10+this.shape.getBlock4().position.y][this.shape.getBlock4().position.x-1]== 0 )
    {
      this.shape.setX(x);
    }
  };

  this.changeY = function(y) {
    if(field.fieldArray[10+this.shape.getBlock1().position.y-1][this.shape.getBlock1().position.x] == 0 &&
       field.fieldArray[10+this.shape.getBlock2().position.y-1][this.shape.getBlock2().position.x] == 0 &&
       field.fieldArray[10+this.shape.getBlock3().position.y-1][this.shape.getBlock3().position.x] == 0 &&
       field.fieldArray[10+this.shape.getBlock4().position.y-1][this.shape.getBlock4().position.x] == 0)
    {
      this.shape.setY(y);
    }
	else {
	  this.setState(false);
	  fillArray();
	  checkRows();
	}  
  };

  this.rotate = function() {
    switch(this.shape.getNumber()) {
      case shapes.LINESHAPE:
        this.rotateLineShape();
        break;
      case shapes.SQUARESHAPE:
        // do nothing
        break;
      case shapes.TSHAPE:
        this.rotateTShape();
        break;
      case shapes.ZSHAPE:
        this.rotateZShape();
        break;
      case shapes.SSHAPE:
        this.rotateSShape();
        break;
      case shapes.LSHAPE:
        this.rotateLShape();
        break;
      case shapes.MIRROREDLSHAPE:
        this.rotateMirroredLShape();
        break;
      default:
        break;
    }
  };
  
  this.rotateLineShape = function()
  {
    // Im Original kippt er immer nur zwischen langem Teil rechts und oben; hier dreht er sich richtig
    var block1 = this.shape.getBlock1();
    var block2 = this.shape.getBlock2();
    var block4 = this.shape.getBlock4();
    
    var blockToRotate = this.shape.getBlock3();
    var bottomBlock = block4;

    var sign = (bottomBlock.position.x == blockToRotate.position.x ? 1 : -1);
    var invert = sign == 1 ? (bottomBlock.position.y < blockToRotate.position.y ? 1 : -1) :
                             (bottomBlock.position.x < blockToRotate.position.x ? 1 : -1);

    block1.position.x +=  2 * invert * sign;
    block1.position.y += -2 * invert;
    block2.position.x +=  1 * invert * sign;
    block2.position.y += -1 * invert;
    block4.position.x += -1 * invert * sign;
    block4.position.y +=  1 * invert;

    /*
    //Hier das seöbe wie oben, aber ausfuehrlich; nur zum Verstaendnis, wird demnaechst geloescht
    if (bottomBlock.position.x == blockToRotate.position.x) {
      if (bottomBlock.position.y < blockToRotate.position.y) { //kurzes Ende unten
        block1.position.x += 2;
        block1.position.y += -2;
        block2.position.x += 1;
        block2.position.y += -1;
        block4.position.x += -1;
        block4.position.y += 1;
      }
      else { // kurzes Ende oben
        block1.position.x += -2;
        block1.position.y += 2;
        block2.position.x += -1;
        block2.position.y += 1;
        block4.position.x += 1;
        block4.position.y += -1;
      }
    }
    else {
      if (bottomBlock.position.x < blockToRotate.position.x) { // kurzes Ende links
        block1.position.x += -2;
        block1.position.y += -2;
        block2.position.x += -1;
        block2.position.y += -1;
        block4.position.x += 1;
        block4.position.y += 1;
      }
      else { // kurzes Ende rechts; zurueck in Urposition
        block1.position.x += 2;
        block1.position.y += 2;
        block2.position.x += 1;
        block2.position.y += 1;
        block4.position.x += -1;
        block4.position.y += -1;
      }
    }
    */
  }
  
  
  this.rotateTShape = function()
  {
    var block1 = this.shape.getBlock1();
    var block2 = this.shape.getBlock2();
    var block4 = this.shape.getBlock4();

    var blockToRotate = this.shape.getBlock3();

    var x1 = block1.position.x,
        x2 = block2.position.x,
        x4 = block4.position.x;

    var y1 = block1.position.y,
        y2 = block2.position.y,
        y4 = block4.position.y;

    if (y1 == y2) { // T steht waagrecht, block4 ist einzelner Block
      if (block4.position.y < blockToRotate.position.y) {
        moveRightBlockUp(x1 > x2 ? block1 : block2); // T steht richtig rum, der rechte Block muss nach oben
      }
      else {
        moveLeftBlockDown(x1 < x2 ? block1 : block2); // T steht auf dem Kopf, der linke Block muss nach unten
      }
    }
    else if (y1 == y4) { // T steht waagrecht, block2 ist einzelner Block
      if (block2.position.y < blockToRotate.position.y) {
        moveRightBlockUp(x1 > x4 ? block1 : block4); // T steht richtig rum, der rechte Block muss nach oben
      }
      else {
        moveLeftBlockDown(x1 < x4 ? block1 : block4); // T steht auf dem Kopf, der linke Block muss nach unten
      }
    }
    else if (y2 == y4) { // T steht waagrecht, block1 ist einzelner Block
      if (block1.position.y < blockToRotate.position.y) {
        moveRightBlockUp(x2 > x4 ? block2 : block4); // T steht richtig rum, der rechte Block muss nach oben
      }
      else {
        moveLeftBlockDown(x2 < x4 ? block2 : block4); // T steht auf dem Kopf, der linke Block muss nach unten
      }
    }
    
    else {
      // T steht senkrecht
      if (x1 == x2) { // T steht waagrecht, block4 ist einzelner Block
        if (block4.position.x < blockToRotate.position.x) {
          moveBottomBlockRight(y1 < y2 ? block1 : block2); // der einzelne Block ist links, der untere Block muss nach rechts
        }
        else {
          moveUpperBlockLeft(y1 > y2 ? block1 : block2); // der einzelne Block ist rechts, der obere Block muss nach links
        }
      }
      else if (x1 == x4) { // T steht waagrecht, block2 ist einzelner Block
        if (block2.position.x < blockToRotate.position.x) {
          moveBottomBlockRight(y1 < y4 ? block1 : block4); // der einzelne Block ist links, der untere Block muss nach rechts
        }
        else {
          moveUpperBlockLeft(y1 > y4 ? block1 : block4); // der einzelne Block ist rechts, der obere Block muss nach links
        }
      }
      else if (x2 == x4) { // T steht waagrecht, block1 ist einzelner Block
        if (block1.position.x < blockToRotate.position.x) {
          moveBottomBlockRight(y2 < y4 ? block2 : block4); // der einzelne Block ist links, der untere Block muss nach rechts
        }
        else {
          moveUpperBlockLeft(y2 > y4 ? block2 : block4); // der einzelne Block ist rechts, der obere Block muss nach links
        }
      }
    }
  }

  // Hilfsfunktionen
  function moveRightBlockUp(block)
  {
    block.position.x += -1;
    block.position.y += 1;
  }

  function moveLeftBlockDown(block)
  {
    block.position.x += 1;
    block.position.y += -1;
  }

  function moveBottomBlockRight(block)
  {
    block.position.x += 1;
    block.position.y += 1;
  }

  function moveUpperBlockLeft(block)
  {
    block.position.x += -1;
    block.position.y += -1;
  }
  
  
  this.rotateZShape = function()
  {
    
  }
  
  
  this.rotateSShape = function()
  {
    
  }
  
  
  this.rotateLShape = function()
  {
    
  }
  
  
  this.rotateMirroredLShape = function()
  {
    
  }
  
/*  
  this.getBlockPositions = function()
  {
    var positions = [
                     [
                      this.shape.getBlock1().position.x,
                      this.shape.getBlock1().position.y
                     ],
                     [
                      this.shape.getBlock2().position.x,
                      this.shape.getBlock2().position.y
                     ],
                     [
                      this.shape.getBlock3().position.x,
                      this.shape.getBlock3().position.y
                     ],
                     [
                      this.shape.getBlock4().position.x,
                      this.shape.getBlock4().position.y
                     ]
                    ];
    return positions;
  }
*/
  return this;
};


