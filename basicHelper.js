function createGlslProgram(gl, vertexShaderId, fragmentShaderId) {
    var program = gl.createProgram();
    gl.attachShader(program, createShader(gl, vertexShaderId));
    gl.attachShader(program, createShader(gl, fragmentShaderId));
    gl.linkProgram(program);
    gl.validateProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        var infoLog = gl.getProgramInfoLog(program);
        gl.deleteProgram(program);
        throw new Error("An error occurred linking the program: " + infoLog);
    } else {
        return program;
    }
}

function createShape(gl, shapeData) {
    var shape = {};
    var vertexData = [];
    var vertexCount = shapeData.positions.length / 3;
    var i;
    for (i = 0; i < vertexCount; i++) {
        vertexData.push(shapeData.positions[3 * i], shapeData.positions[3 * i + 1], shapeData.positions[3 * i + 2]);
        vertexData.push(shapeData.normals[3 * i], shapeData.normals[3 * i + 1], shapeData.normals[3 * i + 2]);
        vertexData.push(shapeData.texCoords[2 * i], shapeData.texCoords[2 * i + 1]);
    }
    var vertexArray = new Float32Array(vertexData);
    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertexArray, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    var indexArray = new Uint16Array(shapeData.indices);
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indexArray, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    shape.vertexBuffer = vertexBuffer;
    shape.indexBuffer = indexBuffer;
    shape.size = shapeData.indices.length;
    shape.stride = 4 * (3 + 3 + 2);
    shape.positionOffset = 4 * 0;
    shape.normalOffset = 4 * 3;
    shape.texCoordOffset = 4 * (3 + 3);
    return shape;
}

function createShader(gl, shaderScriptId) {
    var shaderScript = $("#" + shaderScriptId);
    var shaderSource = shaderScript[0].text;
    var shaderType = null;
    if (shaderScript[0].type == "x-shader/x-vertex") {
        shaderType = gl.VERTEX_SHADER;
    } else if (shaderScript[0].type == "x-shader/x-fragment") {
        shaderType = gl.FRAGMENT_SHADER;
    } else {
        throw new Error("Invalid shader type: " + shaderScript[0].type)
    }
    var shader = gl.createShader(shaderType);
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        var infoLog = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        throw new Error("An error occurred compiling the shader: " + infoLog);
    } else {
        return shader;
    }
}
