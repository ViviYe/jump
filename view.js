function getFov() {
    if (typeof projDist === 'undefined') {
        projDist = 0;
    }
    if (isScroll) {
        oldFov += projDist / 100;
    }
    oldFov = Math.max(Math.min(oldFov, 60), 30);
    isScroll = false;
    const fov = oldFov * Math.PI / 180.0;
    return oldFov * Math.PI / 180.0;
}

function getEyeHeight() {
    return 5;
}

function getInitWorld() {
    return {
        sizeX: 5,
        sizeY: 5,
        data: null,
        startHeading: 0.6,
        startPosition: [0, 1]
    }
}

function getModelMatrix() {
    var modelMat = mat4.create();
    mat4.identity(modelMat);
    return modelMat;
}

function getProjMatrix() {
    var projMat = mat4.create();
    mat4.perspective(projMat, getFov(), 4.0 / 3.0, 0.1, 100.0);
    return projMat;
}