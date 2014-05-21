

var ShapeEnum = {
    SShape:0,
    ZShape:1,
    TShape:2,
    LShape:3,
    LineShape:4,
    MirroredLShape:5,
    SquareShape:6
};

var Shape = function()
{
	
	this.ColorArray = [
	0xf0fff0,
	0xf00faa,
	0xf0ff00,
	0x00ff00,
	0xff8c00,
	0x0000aa,
	0xff0000,
	                ];
	
	this.ShapeArray = [
	                   //Lineshape
	                   [
	                   [0, 0],
	                   [0, 1],
	                   [0, 2],
	                   [0, 3],
	                   ],
	                   //Quadrat
	                   [
		                [0, 0],
		                [0, 1],
		                [1, 0],
		                [1, 1],
		                ],
	                   //T-Form
		                [
		                 [0, 0],
			                [-1, 1],
			                [0, 1],
			                [1, 1],
			                ],
			                // Z-Form
			                   [
				                [0, 0],
				                [-1, 1],
				                [1, 0],
				                [0, 1],
				                ],	
				                
				                //S-Form
				                   [
					                [0, 0],
					                [1, 1],
					                [-1, 0],
					                [0, 1],
					                ],	
					                //L-Form
					                   [
						                [0, 0],
						                [1, 0],
						                [0, 2],
						                [0, 1],
						                ],	
						                
						                //Mirrowed L
						                   [
							                [0, 0],
							                [-1, 0],
							                [0, 2],
							                [0, 1],
							                ],	
							                
	                   ];
	
	this.setNumber= function()
	{
		this.number = Math.floor((Math.random()*7));
	};
	 this.setNumber();
	this.getNumber= function()
	{
		return this.number;
	};
	
	var material = new THREE.MeshBasicMaterial( {color: this.ColorArray[this.getNumber()], side: THREE.DoubleSide} ); 

	var block1 = new THREE.Mesh(CreateGeometry(),material);
	var block2 = new THREE.Mesh(CreateGeometry(),material);
	var block3 = new THREE.Mesh(CreateGeometry(),material);
	var block4 = new THREE.Mesh(CreateGeometry(),material);

	

	  this.setShape = function() {
		  var number= this.getNumber();
		  this.getBlock1().position.x = this.ShapeArray[number][0][0];
		  this.getBlock1().position.y = this.ShapeArray[number][0][1];
		  this.getBlock2().position.x = this.ShapeArray[number][1][0];
		  this.getBlock2().position.y = this.ShapeArray[number][1][1];
		  this.getBlock3().position.x = this.ShapeArray[number][2][0];
		  this.getBlock3().position.y = this.ShapeArray[number][2][1];
		  this.getBlock4().position.x = this.ShapeArray[number][3][0];
		  this.getBlock4().position.y = this.ShapeArray[number][3][1];
		  };
	
		  
		this.setX = function(x){
			this.getBlock1().position.x += x;
			this.getBlock2().position.x += x;
			this.getBlock3().position.x += x;
			this.getBlock4().position.x += x;
			
		};
		
		this.setY = function(y){
			this.getBlock1().position.y += y;
			this.getBlock2().position.y += y;
			this.getBlock3().position.y += y;
			this.getBlock4().position.y += y;
			
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
  var geometry = new THREE.PlaneGeometry(1, 1); 
  return geometry;
}



function setShape()
{
  var shape;
  var number= Math.floor((Math.random()*7));

  switch(number)
  {
    case 0: 
      shape = CreateSShape();
      break;
    case 1:
      shape = CreateZShape();
      break;
    case 2:
      shape = CreateTShape();
      break;
    case 3:
      shape = CreateLShape();
      break;
    case 4: 
      shape = CreateLineShape();
      break;
    case 5:
      shape = CreateMirroredLShape();
      break;
    case 6:
      shape = CreateSquareShape();
      break;
  }
  
  return shape;
}


var Tetrominoes = function()
{
  this.state = true;
  
  this.shape = new Shape();
  this.shape.setShape();

  this.setState = function(bool)
  {
	  this.state=bool;
  }
  
  this.getState = function()
  {
	  return this.state;
  }

  this.changeX = function(x) {
	this.shape.setX(x);

  };

  this.changeY = function(y) {
    this.shape.setY(y);

  };

  this.rotate = function() {
    this.shape.rotation.z += 90*Math.PI/180;
  };
  
  
  this.changeX(5);
  this.changeY(5);
  
  return this;
};


