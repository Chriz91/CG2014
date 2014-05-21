function Field(spalten , zeilen) {

  var grid = new THREE.Geometry();

  var i = 0;
  var j = 0;

  for (i; i <= zeilen; i++) {
	grid.vertices.push(new THREE.Vector3(0, i, 0));
	grid.vertices.push(new THREE.Vector3(spalten, i, 0));
  }

  for (var j; j <= spalten; j++) {
    grid.vertices.push(new THREE.Vector3(j, 0, 0));
    grid.vertices.push(new THREE.Vector3(j, zeilen, 0));
  }

  var gridline = new THREE.LineBasicMaterial({
    color : 0xffffff
  });

  var gridsystem = new THREE.Line(grid, gridline, THREE.LinePieces);

  gridsystem.position.x += OffsetX-0.5;
  gridsystem.position.y += OffsetY-0.5;
  scene.add(gridsystem);
  
  var fieldArray = new Array(20);
  
  for(var x = 0; x < zeilen; ++x) {
    fieldArray[x] = new Array(10);
    for(var y = 0; y < spalten; ++y) {
      fieldArray[x][y] = 0;
    }
  }
}