function MeshBuffer(mesh) {
	this.vbo = gl.createBuffer();
	this.points = mesh;
	gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
	gl.bufferData(gl.ARRAY_BUFFER, mesh, gl.STATIC_DRAW);
	this.vbo.itemSize = 3;
	this.vbo.numItems = mesh.length / this.vbo.itemSize;
}