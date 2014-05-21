

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
	

	
	this.ShapeArray = [
	                   [0, 0],
	                   [0, 1],
	                   [0, 2],
	                   [0, 3],
	                   ];
	
	var material = new THREE.MeshBasicMaterial( {color: 0xf0fff0, side: THREE.DoubleSide} ); 

	var block1 = new THREE.Mesh(CreateGeometry(),material);
	var block2 = new THREE.Mesh(CreateGeometry(),material);
	var block3 = new THREE.Mesh(CreateGeometry(),material);
	var block4 = new THREE.Mesh(CreateGeometry(),material);

	
	  this.setShape = function() {
		  var number= Math.floor((Math.random()*7));
		  block1.position.x = this.ShapeArray[0][0];
		  block1.position.y = this.ShapeArray[0][1];
		  block2.position.x = this.ShapeArray[1][0];
		  block2.position.y = this.ShapeArray[1][1];
		  block3.position.x = this.ShapeArray[2][0];
		  block3.position.y = this.ShapeArray[2][1];
		  block4.position.x = this.ShapeArray[3][0];
		  block4.position.y = this.ShapeArray[3][1];
		  };
	
		  
		this.setX = function(x){
			this.getBlock1().position.x += x;
			this.getBlock2().position.x += x;
			this.getBlock3().position.x += x;
			this.getBlock4().position.x += x;
			
		};
		
		this.setY = function(y){
			block1.position.y += y;
			block2.position.y += y;
			block3.position.y += y;
			block4.position.y += y;
			
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

function CreateMirroredLShape()
{
	
  var plane = CreateGeometry();
  var plane1 = CreateGeometry();
  var plane2 = CreateGeometry();
  var plane3 = CreateGeometry();
  var plane4 = CreateGeometry();
  var material = new THREE.MeshBasicMaterial( {color: 0xf0fff0, side: THREE.DoubleSide} ); 

  var mesh1 = new THREE.Mesh( plane1 );
  mesh1.position.x= 0;
  mesh1.position.y = 0;
  THREE.GeometryUtils.merge(plane, mesh1);

  var mesh2 = new THREE.Mesh( plane2 );
  mesh2.position.x = mesh1.position.x+1;
  THREE.GeometryUtils.merge(plane, mesh2);

  var mesh3 = new THREE.Mesh( plane3 );
  mesh3.position.x = mesh2.position.x;
  mesh3.position.y = mesh2.position.y+1;
  THREE.GeometryUtils.merge(plane, mesh3);

  var mesh4 = new THREE.Mesh(plane4);
  mesh4.position.x = mesh3.position.x;
  mesh4.position.y = mesh3.position.y+1;
  THREE.GeometryUtils.merge(plane, mesh4);

  mesh = new THREE.Mesh( plane, material );

  return mesh;
}


function CreateLShape()
{
  var plane = CreateGeometry();
  var plane1 = CreateGeometry();
  var plane2 = CreateGeometry();
  var plane3 = CreateGeometry();
  var plane4 = CreateGeometry();
  var material = new THREE.MeshBasicMaterial( {color: 0xf00faa, side: THREE.DoubleSide} ); 

  var mesh1 = new THREE.Mesh( plane1 );
  mesh1.position.x= 0;
  mesh1.position.y = 0;
  THREE.GeometryUtils.merge(plane, mesh1);

  var mesh2 = new THREE.Mesh( plane2 );
  mesh2.position.y = mesh1.position.y+1;
  THREE.GeometryUtils.merge(plane, mesh2);

  var mesh3 = new THREE.Mesh( plane3 );
  mesh3.position.y = mesh2.position.y+1;
  THREE.GeometryUtils.merge(plane, mesh3);

  var mesh4 = new THREE.Mesh(plane4);
  mesh4.position.x = mesh3.position.x+1;
  mesh4.position.y = mesh1.position.y;
  THREE.GeometryUtils.merge(plane, mesh4);

  mesh = new THREE.Mesh( plane, material );

  return mesh;
}


function CreateTShape()
{	
  var plane = CreateGeometry();
  var plane1 = CreateGeometry();
  var plane2 = CreateGeometry();
  var plane3 = CreateGeometry();
  var plane4 = CreateGeometry();
  var material = new THREE.MeshBasicMaterial( {color: 0xf0ff00, side: THREE.DoubleSide} ); 

  var mesh1 = new THREE.Mesh( plane1 );
  mesh1.position.x= 0;
  mesh1.position.y = 0;
  THREE.GeometryUtils.merge(plane, mesh1);

  var mesh2 = new THREE.Mesh( plane2 );
  mesh2.position.x = mesh1.position.x+1;
  mesh2.position.y = mesh1.position.y;
  THREE.GeometryUtils.merge(plane, mesh2);

  var mesh3 = new THREE.Mesh( plane3 );
  mesh3.position.y = mesh1.position.y+1;
  mesh3.position.x = mesh1.position.x+1;
  THREE.GeometryUtils.merge(plane, mesh3);

  var mesh4 = new THREE.Mesh(plane4);
  mesh4.position.x = mesh1.position.x+2;
  THREE.GeometryUtils.merge(plane, mesh4);

  mesh = new THREE.Mesh( plane, material );

  return mesh;
}


function CreateZShape()
{
  var plane = CreateGeometry();
  var plane1 = CreateGeometry();
  var plane2 = CreateGeometry();
  var plane3 = CreateGeometry();
  var plane4 = CreateGeometry();

  var material = new THREE.MeshBasicMaterial( {color: 0x00ff00, side: THREE.DoubleSide} ); 

  var mesh1 = new THREE.Mesh( plane1 );
  mesh1.position.x= 0;
  mesh1.position.y = 0;
  THREE.GeometryUtils.merge(plane, mesh1);

  var mesh2 = new THREE.Mesh( plane2 );
  mesh2.position.x = 1;

  THREE.GeometryUtils.merge(plane, mesh2);

  var mesh3 = new THREE.Mesh( plane3 );
  mesh3.position.y = -1;
  mesh3.position.x = 1;
  THREE.GeometryUtils.merge(plane, mesh3);

  var mesh4 = new THREE.Mesh( plane4 );
  mesh4.position.y = -1;
  mesh4.position.x = 2;
  THREE.GeometryUtils.merge(plane, mesh4);

  mesh = new THREE.Mesh( plane, material );

  return mesh;
}


function CreateSShape()
{	
  var plane = CreateGeometry();
  var plane1 = CreateGeometry();
  var plane2 = CreateGeometry();
  var plane3 = CreateGeometry();
  var plane4 = CreateGeometry();

  var material = new THREE.MeshBasicMaterial( {color: 0x00ff0f, side: THREE.DoubleSide} ); 

  var mesh1 = new THREE.Mesh( plane1 );
  mesh1.position.x= 0;
  mesh1.position.y = 0;
  THREE.GeometryUtils.merge(plane, mesh1);

  var mesh2 = new THREE.Mesh( plane2 );
  mesh2.position.x = 1;

  THREE.GeometryUtils.merge(plane, mesh2);

  var mesh3 = new THREE.Mesh( plane3 );
  mesh3.position.y = 1;
  mesh3.position.x = 1;
  THREE.GeometryUtils.merge(plane, mesh3);

  var mesh4 = new THREE.Mesh( plane4 );
  mesh4.position.y = 1;
  mesh4.position.x = 2;
  THREE.GeometryUtils.merge(plane, mesh4);

  mesh = new THREE.Mesh( plane, material );

  return mesh;
}


function CreateGeometry()
{
  var geometry = new THREE.PlaneGeometry(1, 1); 
  return geometry;
}


function CreateLineShape()
{
  var plane = CreateGeometry();
  var plane1 = CreateGeometry();
  var plane2 = CreateGeometry();
  var plane3 = CreateGeometry();
  var plane4 = CreateGeometry();

  var material = new THREE.MeshBasicMaterial( {color: 0x0000aa, side: THREE.DoubleSide} ); 
  var mesh1 = new THREE.Mesh( plane1, material );

  var mesh2 = new THREE.Mesh( plane2, material );
  mesh2.position.y = mesh1.position.y+1;

  var mesh3 = new THREE.Mesh( plane3, material );
  mesh3.position.y = mesh2.position.y+1;

  var mesh4 = new THREE.Mesh( plane4, material );
  mesh4.position.y = mesh3.position.y+1;

  THREE.GeometryUtils.merge(plane, mesh1);
  THREE.GeometryUtils.merge(plane, mesh2);
  THREE.GeometryUtils.merge(plane, mesh3);
  THREE.GeometryUtils.merge(plane, mesh4);

  mesh = new THREE.Mesh( plane, material );

  return mesh;	
}


function CreateSquareShape()
{
  var plane = CreateGeometry();
  var plane1 = CreateGeometry();
  var plane2 = CreateGeometry();
  var plane3 = CreateGeometry();
  var plane4 = CreateGeometry();

  var material = new THREE.MeshBasicMaterial( {color: 0xff0000, side: THREE.DoubleSide} ); 
  var mesh1 = new THREE.Mesh( plane1, material );

  var mesh2 = new THREE.Mesh( plane2, material );
  mesh2.position.x = mesh1.position.x+1;

  var mesh3 = new THREE.Mesh( plane3, material );
  mesh3.position.y = mesh2.position.y+1;

  var mesh4 = new THREE.Mesh( plane4, material );
  mesh4.position.y = mesh1.position.y+1;
  mesh4.position.x = mesh1.position.x+1;

  THREE.GeometryUtils.merge(plane, mesh1);
  THREE.GeometryUtils.merge(plane, mesh2);
  THREE.GeometryUtils.merge(plane, mesh3);
  THREE.GeometryUtils.merge(plane, mesh4);

  mesh = new THREE.Mesh( plane, material );

  return mesh;
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


