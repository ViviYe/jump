function createShapeData() {
    return {
        positions: [],
        normals: [],
        texCoords: [],
        indices: []
    }
}

function createNorthWall(x, y, z) {
    var shapeData = createShapeData();
    var v = shapeData.positions.length / 3;
    shapeData.indices.push(v, v + 1, v + 2, v, v + 2, v + 3);

    var i;
    for (i = 0; i < 4; i++) {
        shapeData.normals.push([0.0, -1.0, 0.0]);
    }

    shapeData.positions.push(x, y + 1, z);
    shapeData.texCoords.push(1.0, 0.0);

    shapeData.positions.push(x + 1, y + 1, z);
    shapeData.texCoords.push(0.0, 0.0);

    shapeData.positions.push(x + 1, y + 1, z + 1);
    shapeData.texCoords.push(0.0, 1.0);

    shapeData.positions.push(x, y + 1, z + 1);
    shapeData.texCoords.push(1.0, 1.0);

    return shapeData;
}

function createSouthWall(x, y, z) {
    var shapeData = createShapeData();
    var v = shapeData.positions.length / 3;
    shapeData.indices.push(v, v + 1, v + 2, v, v + 2, v + 3);

    var i;
    for (i = 0; i < 4; i++) {
        shapeData.normals.push([0.0, 1.0, 0.0]);
    }

    shapeData.positions.push(x, y, z);
    shapeData.texCoords.push(0.0, 0.0);

    shapeData.positions.push(x, y, z + 1);
    shapeData.texCoords.push(0.0, 1.0);

    shapeData.positions.push(x + 1, y, z + 1);
    shapeData.texCoords.push(1.0, 1.0);

    shapeData.positions.push(x + 1, y, z);
    shapeData.texCoords.push(1.0, 0.0);

    return shapeData;
}


function createWestWall(x, y, z) {
    var shapeData = createShapeData();
    var v = shapeData.positions.length / 3;
    shapeData.indices.push(v, v + 1, v + 2, v, v + 2, v + 3);

    var i;
    for (i = 0; i < 4; i++) {
        shapeData.normals.push([1.0, 0.0, 0.0]);
    }

    shapeData.positions.push(x, y, z);
    shapeData.texCoords.push(1.0, 0.0);

    shapeData.positions.push(x, y, z + 1);
    shapeData.texCoords.push(1.0, 1.0);

    shapeData.positions.push(x, y + 1, z + 1);
    shapeData.texCoords.push(0.0, 1.0);

    shapeData.positions.push(x, y + 1, z);
    shapeData.texCoords.push(0.0, 0.0);

    return shapeData;
}


function createEastWall(x, y, z) {
    var shapeData = createShapeData();
    var v = shapeData.positions.length / 3;
    shapeData.indices.push(v, v + 1, v + 2, v, v + 2, v + 3);

    var i;
    for (i = 0; i < 4; i++) {
        shapeData.normals.push([-1.0, 0.0, 0.0]);
    }

    shapeData.positions.push(x + 1, y, z);
    shapeData.texCoords.push(0.0, 0.0);

    shapeData.positions.push(x + 1, y, z + 1);
    shapeData.texCoords.push(0.0, 1.0);

    shapeData.positions.push(x + 1, y + 1, z + 1);
    shapeData.texCoords.push(1.0, 1.0);

    shapeData.positions.push(x + 1, y + 1, z);
    shapeData.texCoords.push(1.0, 0.0);

    return shapeData;
}


function createFloor(x, y, z) {
    var shapeData = createShapeData();
    var v = shapeData.positions.length / 3;
    shapeData.indices.push(v, v + 1, v + 2, v, v + 2, v + 3);

    var i;
    for (i = 0; i < 4; i++) {
        shapeData.normals.push([0.0, 0.0, 1.0]);
    }

    shapeData.positions.push(x, y, z);
    shapeData.texCoords.push(0.0, 0.0);

    shapeData.positions.push(x + 1, y, z);
    shapeData.texCoords.push(1.0, 0.0);

    shapeData.positions.push(x + 1, y + 1, z);
    shapeData.texCoords.push(1.0, 1.0);

    shapeData.positions.push(x, y + 1, z);
    shapeData.texCoords.push(0.0, 1.0);

    return shapeData;
}

function createBigFloor(x, y, z, delta) {
    var shapeData = createShapeData();
    var v = shapeData.positions.length / 3;
    shapeData.indices.push(v, v + 1, v + 2, v, v + 2, v + 3);

    var i;
    for (i = 0; i < 4; i++) {
        shapeData.normals.push([0.0, 0.0, 1.0]);
    }

    shapeData.positions.push(x, y, z);
    shapeData.texCoords.push(0.0, 0.0);

    shapeData.positions.push(x + delta, y, z);
    shapeData.texCoords.push(1.0, 0.0);

    shapeData.positions.push(x + delta, y + delta, z);
    shapeData.texCoords.push(1.0, 1.0);

    shapeData.positions.push(x, y + delta, z);
    shapeData.texCoords.push(0.0, 1.0);

    return shapeData;
}

function createRoof(x, y, z) {
    var shapeData = createShapeData();
    var v = shapeData.positions.length / 3;
    shapeData.indices.push(v, v + 1, v + 2, v, v + 2, v + 3);

    var i;
    for (i = 0; i < 4; i++) {
        shapeData.normals.push([0.0, 0.0, -1.0]);
    }

    shapeData.positions.push(x, y, z + 1);
    shapeData.texCoords.push(0.0, 0.0);

    shapeData.positions.push(x + 1, y + 1, z + 1);
    shapeData.texCoords.push(1.0, 1.0);

    shapeData.positions.push(x, y + 1, z + 1);
    shapeData.texCoords.push(1.0, 0.0);

    shapeData.positions.push(x + 1, y, z + 1);
    shapeData.texCoords.push(0.0, 1.0);

    return shapeData;
}



function createCube(gl, x, y, z) {
    shapes = [];
    shapes.push(createShape(gl, createNorthWall(x, y, z)));
    shapes.push(createShape(gl, createSouthWall(x, y, z)));
    shapes.push(createShape(gl, createEastWall(x, y, z)));
    shapes.push(createShape(gl, createWestWall(x, y, z)));
    shapes.push(createShape(gl, createFloor(x, y, z)));
    shapes.push(createShape(gl, createRoof(x, y, z)));
    return shapes;
}

function createGround(gl, x, y, z) {
    shapes = [];
    shapes.push(createShape(gl, createBigFloor(x, y, z, 30)));
    return shapes;
}

function createShpere(x, y, z) {
    var shapeData = createShapeData();
    var v = shapeData.positions.length / 3;
    // x, y, z are the center
    var SPHERE_DIV = 6;
    var i, ai, si, ci;
    var j, aj, sj, cj;
    var p1, p2;

    for (j = 0; j <= SPHERE_DIV; j++) {
        aj = j * Math.PI / SPHERE_DIV;
        sj = Math.sin(aj);
        cj = Math.cos(aj);
        for (i = 0; i <= SPHERE_DIV; i++) {
            ai = i * 2 * Math.PI / SPHERE_DIV;
            si = Math.sin(ai);
            ci = Math.cos(ai);
            shapeData.positions.push(si * sj, cj, ci * sj);
            shapeData.normals.push(si * sj, cj, ci * sj);
            shapeData.texCoords.push(0.0, 0.0);
        }
    }
    for (j = 0; j < SPHERE_DIV; j++) {
        for (i = 0; i < SPHERE_DIV; i++) {
            p1 = j * (SPHERE_DIV + 1) + i;
            p2 = p1 + (SPHERE_DIV + 1);
            shapeData.indices.push(p1, p2, p1 + 1, p1 + 1, p2, p2 + 1);
        }
    }

    return shapeData;
}


function createRoof(x, y, z) {
    var shapeData = createShapeData();
    var v = shapeData.positions.length / 3;
    shapeData.indices.push(v, v + 1, v + 2, v, v + 2, v + 3);

    var i;
    for (i = 0; i < 4; i++) {
        shapeData.normals.push([0.0, 0.0, -1.0]);
    }

    shapeData.positions.push(x, y, z + 1);
    shapeData.texCoords.push(0.0, 0.0);

    shapeData.positions.push(x + 1, y + 1, z + 1);
    shapeData.texCoords.push(1.0, 1.0);

    shapeData.positions.push(x, y + 1, z + 1);
    shapeData.texCoords.push(1.0, 0.0);

    shapeData.positions.push(x + 1, y, z + 1);
    shapeData.texCoords.push(0.0, 1.0);

    return shapeData;
}

function createCube(gl, x, y, z) {
    shapes = [];
    shapes.push(createShape(gl, createNorthWall(x, y, z)));
    shapes.push(createShape(gl, createSouthWall(x, y, z)));
    shapes.push(createShape(gl, createEastWall(x, y, z)));
    shapes.push(createShape(gl, createWestWall(x, y, z)));
    shapes.push(createShape(gl, createFloor(x, y, z)));
    shapes.push(createShape(gl, createRoof(x, y, z)));
    return shapes;
}

function createGround(gl, x, y, z) {
    shapes = [];
    shapes.push(createShape(gl, createBigFloor(x, y, z, 30)));
    return shapes;
}