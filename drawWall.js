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