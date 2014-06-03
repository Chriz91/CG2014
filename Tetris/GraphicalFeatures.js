var TetrisLetters = function()
{
	var material = new THREE.MeshBasicMaterial( {map: THREE.ImageUtils.loadTexture('textures/explosion.jpg'), side: THREE.DoubleSide} );
	var mainT = new THREE.Geometry();
	var mainE = new THREE.Geometry();
	var mainST = new THREE.Geometry();
	var mainR = new THREE.Geometry();
	var mainI = new THREE.Geometry();
	var mainS = new THREE.Geometry();

	var T =[];
	var E =[];
	var ST =[];
	var R =[];
	var I =[];
	var S =[];
	var cubegeometry = new THREE.CubeGeometry(1,2,2);
	
	T[0]= new THREE.Mesh(cubegeometry);
	THREE.GeometryUtils.merge(mainT, T[0]);
	
	T[1]= new THREE.Mesh(cubegeometry);
	T[1].position.y = 2
	THREE.GeometryUtils.merge(mainT, T[1]);
	
	T[2]= new THREE.Mesh(cubegeometry);
	T[2].position.y = 4;
	THREE.GeometryUtils.merge(mainT, T[2]);
	
	T[3]= new THREE.Mesh(cubegeometry);
	T[3].position.y = 4;
	T[3].position.x = 2;
	THREE.GeometryUtils.merge(mainT, T[3]);
	
	T[4]= new THREE.Mesh(cubegeometry);
	T[4].position.y = 4;
	T[4].position.x = -2;
	THREE.GeometryUtils.merge(mainT, T[4]);
	
	var T = new THREE.Mesh(mainT);
	
	T.position.x = -5;
	T.position.y = 12;


	
	E[0]= new THREE.Mesh(cubegeometry);
	THREE.GeometryUtils.merge(mainE, E[0]);
	
	E[1]= new THREE.Mesh(cubegeometry);
	E[1].position.y = 2
	THREE.GeometryUtils.merge(mainE, E[1]);
	
	E[2]= new THREE.Mesh(cubegeometry);
	E[2].position.y = 4;
	THREE.GeometryUtils.merge(mainE, E[2]);
	
	E[3]= new THREE.Mesh(new THREE.CubeGeometry(1,1,2));
	E[3].position.y = 4.5;
	E[3].position.x = 2;
	THREE.GeometryUtils.merge(mainE, E[3]);
	
	E[4]= new THREE.Mesh(new THREE.CubeGeometry(1,1,2));
	E[4].position.y = 2;
	E[4].position.x = 2;
	THREE.GeometryUtils.merge(mainE, E[4]);
	
	E[5]= new THREE.Mesh(new THREE.CubeGeometry(1,1,2));
	E[5].position.y = -0.5;
	E[5].position.x = 2;
	THREE.GeometryUtils.merge(mainE, E[5]);
	var E = new THREE.Mesh(mainE);
	
	E.position.x = -1;
	E.position.y = 12;
	

	
	ST[0]= new THREE.Mesh(cubegeometry);
	THREE.GeometryUtils.merge(mainST, ST[0]);
	
	ST[1]= new THREE.Mesh(cubegeometry);
	ST[1].position.y = 2
	THREE.GeometryUtils.merge(mainST, ST[1]);
	
	ST[2]= new THREE.Mesh(cubegeometry);
	ST[2].position.y = 4;
	THREE.GeometryUtils.merge(mainST, ST[2]);
	
	ST[3]= new THREE.Mesh(cubegeometry);
	ST[3].position.y = 4;
	ST[3].position.x = 2;
	THREE.GeometryUtils.merge(mainST, ST[3]);
	
	ST[4]= new THREE.Mesh(cubegeometry);
	ST[4].position.y = 4;
	ST[4].position.x = -2;
	THREE.GeometryUtils.merge(mainST, ST[4]);
	
	var ST = new THREE.Mesh(mainST);
	
	ST.position.x = 5;
	ST.position.y = 12;


	R[0]= new THREE.Mesh(new THREE.CubeGeometry(1,2,2));
	THREE.GeometryUtils.merge(mainR, R[0]);
	
	R[1]= new THREE.Mesh(new THREE.CubeGeometry(1,2,2));
	R[1].position.y = 2;
	THREE.GeometryUtils.merge(mainR, R[1]);
	
	R[2]= new THREE.Mesh(new THREE.CubeGeometry(1,2,2));
	R[2].position.y = 4;
	THREE.GeometryUtils.merge(mainR, R[2]);
	
	R[3]= new THREE.Mesh(new THREE.CubeGeometry(1,1,2));
	R[3].position.y = 4.5;
	R[3].position.x = 2;
	THREE.GeometryUtils.merge(mainR, R[3]);
	
	R[4]= new THREE.Mesh(new THREE.CubeGeometry(1,1,2));
	R[4].position.y = 3.5;
	R[4].position.x = 3.5;
	THREE.GeometryUtils.merge(mainR, R[4]);
	
	R[5]= new THREE.Mesh(new THREE.CubeGeometry(1,1,2));
	R[5].position.y = 2.5;
	R[5].position.x = 2;
	THREE.GeometryUtils.merge(mainR, R[5]);
	
	R[6]= new THREE.Mesh(new THREE.CubeGeometry(0.5,1,2));
	R[6].position.y = 1.5;
	R[6].position.x = 1.5;
	THREE.GeometryUtils.merge(mainR, R[6]);
	
	R[7]= new THREE.Mesh(new THREE.CubeGeometry(1,1,2));
	R[7].position.y = 0.5;
	R[7].position.x = 2;
	THREE.GeometryUtils.merge(mainR, R[7]);
	
	R[8]= new THREE.Mesh(new THREE.CubeGeometry(1,1,2));
	R[8].position.y = -0.5;
	R[8].position.x = 3;
	THREE.GeometryUtils.merge(mainR, R[8]);
	var R = new THREE.Mesh(mainR);
	
	R.position.x = 9;
	R.position.y = 12;
	

	
	I[0] = new THREE.Mesh(cubegeometry);
	THREE.GeometryUtils.merge(mainI, I[0]);
	
	I[1] = new THREE.Mesh(cubegeometry);
	I[1].position.y = 2;
	THREE.GeometryUtils.merge(mainI, I[1]);
	
	I[2] = new THREE.Mesh(cubegeometry);
	I[2].position.y = 4;
	THREE.GeometryUtils.merge(mainI, I[2]);
	
	var I = new THREE.Mesh(mainI);
	
	I.position.x = 14.5;
	I.position.y = 12;
	

	
	S[0] = new THREE.Mesh(new THREE.CubeGeometry(1,1,2));
	S[0].position.y = -0.5;
	THREE.GeometryUtils.merge(mainS, S[0]);
	
	S[1] = new THREE.Mesh(new THREE.CubeGeometry(1,3,2));
	S[1].position.y = 3.5;
	THREE.GeometryUtils.merge(mainS, S[1]);
	
	S[2] = new THREE.Mesh(new THREE.CubeGeometry(1,3,2));
	S[2].position.x = 2;
	S[2].position.y = 0.5;
	THREE.GeometryUtils.merge(mainS, S[2]);
	
	S[3] = new THREE.Mesh(new THREE.CubeGeometry(1,1,2));
	S[3].position.y = 4.5;
	S[3].position.x = 2;
	THREE.GeometryUtils.merge(mainS, S[3]);
	
	var S = new THREE.Mesh(mainS);
	
	S.position.x = 17;
	S.position.y = 12;
	
	var tetris = new THREE.Geometry();;
	THREE.GeometryUtils.merge(tetris, T);
	THREE.GeometryUtils.merge(tetris, E);
	THREE.GeometryUtils.merge(tetris, ST);
	THREE.GeometryUtils.merge(tetris, R);
	THREE.GeometryUtils.merge(tetris, I);
	THREE.GeometryUtils.merge(tetris, S);
	
	var Tetris = new THREE.Mesh(tetris, material);
	
	Tetris.position.x -= 2;
	scene.add(Tetris);
	
}