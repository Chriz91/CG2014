var Field = function(spalten , zeilen) {

  var grid = new THREE.Geometry();

  for (var i = 0; i <= zeilen; i++) {
	grid.vertices.push(new THREE.Vector3(0, i, 0));
	grid.vertices.push(new THREE.Vector3(spalten, i, 0));
  }

  for (var j = 0; j <= spalten; j++) {
    grid.vertices.push(new THREE.Vector3(j, 0, 0));
    grid.vertices.push(new THREE.Vector3(j, zeilen, 0));
    
  }
  
  for (var k = 0; k <= spalten; k++) {
    grid.vertices.push(new THREE.Vector3(k, 0, 0));
    grid.vertices.push(new THREE.Vector3(k, 0, 1));
  }

  var gridline = new THREE.LineBasicMaterial({
    color : 0x000000
  });

  var gridsystem = new THREE.Line(grid, gridline, THREE.LinePieces);

  gridsystem.position.x += OffsetX-0.5;
  gridsystem.position.y += OffsetY-0.5;
  gridsystem.position.z = 0.5;
  scene.add(gridsystem);
  
  this.fieldArray = new Array(20);
  
  for (var x = 0; x < zeilen; ++x) {
    this.fieldArray[x] = new Array(10);
    for (var y = 0; y < spalten; ++y) {
      this.fieldArray[x][y] = 0;
    }
  }
  
  return this;
};
