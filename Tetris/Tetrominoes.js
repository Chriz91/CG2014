var Shape = function()
{
	
	this.getMaxX = function()
	{
		var max = this.getBlock1().position.x;
		if(this.getBlock2().position.x > max)
			{
			max = this.getBlock2().position.x;
			}
		if(this.getBlock3().position.x > max)
			{
			max = this.getBlock3().position.x;
			}
		if(this.getBlock4().position.x > max)
		{
		max = this.getBlock4().position.x;
		}
		return max;
	};
	
	this.getMaxY = function()
	{
		var max = this.getBlock1().position.y;
		if(this.getBlock2().position.y > max)
			{
			max = this.getBlock2().position.y;
			}
		if(this.getBlock3().position.y > max)
			{
			max = this.getBlock3().position.y;
			}
		if(this.getBlock4().position.y > max)
		{
		max = this.getBlock4().position.y;
		}
		return max;
	};
	
	
	this.getMinX = function()
	{
		var min = this.getBlock1().position.x;
		if(this.getBlock2().position.x < min)
			{
			min = this.getBlock2().position.x;
			}
		if(this.getBlock3().position.x < min)
			{
			min = this.getBlock3().position.x;
			}
		if(this.getBlock4().position.x < min)
		{
			min = this.getBlock4().position.x;
		}
		return min;
	};
	
	this.getMinY = function()
	{
		var min = this.getBlock1().position.y;
		if(this.getBlock2().position.y < min)
			{
			min = this.getBlock2().position.y;
			}
		if(this.getBlock3().position.y < min)
			{
			min = this.getBlock3().position.y;
			}
		if(this.getBlock4().position.y < min)
		{
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
		
		this.setZ = function(z){
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
	this.shape.setY(10-this.shape.getMaxY());
	this.shape.setZ(1);
	

  
  this.setState = function(bool)
  {
	  this.state=bool;
  }
  
  this.getState = function()
  {
	  return this.state;
  }

  this.changeX = function(x) {
	  
			  if(x>0 &&
				 field.fieldArray[10+this.shape.getBlock1().position.y][this.shape.getMaxX()+1]== 0 &&
				 field.fieldArray[10+this.shape.getBlock2().position.y][this.shape.getMaxX()+1]== 0 &&
				 field.fieldArray[10+this.shape.getBlock3().position.y][this.shape.getMaxX()+1]== 0 &&
				 field.fieldArray[10+this.shape.getBlock4().position.y][this.shape.getMaxX()+1]== 0 )
		  {
	this.shape.setX(x);
		  }
			  
			  else if(x<0 &&
						 field.fieldArray[10+this.shape.getBlock1().position.y][this.shape.getMinX()-1]== 0 &&
						 field.fieldArray[10+this.shape.getBlock2().position.y][this.shape.getMinX()-1]== 0 &&
						 field.fieldArray[10+this.shape.getBlock3().position.y][this.shape.getMinX()-1]== 0 &&
						 field.fieldArray[10+this.shape.getBlock4().position.y][this.shape.getMinX()-1]== 0 )
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
	  else
		  {
		  this.setState(false);
	      fillArray();
	      checkRows();
		  }
	  
  };

  this.rotate = function() {

  };
  
  

  
  return this;
};


