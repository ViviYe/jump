//click and drag
var program0; var projDist = 50;
var oldFov = 30;
var isScroll = false;
var shapeMoved = false;
var thetaPos = 0;
var phiPos = 0;
var thetaShift = 0;
var phiShift = 0;
var curTheta = 0;
var curPhi = 0;
var moveShape = false;
var initShapePos = [0, 0];

var mouse = {
    mouseDown: false,
    mouseDragged: false,
}
var prevMouseDown = false;

// drag with momentum
var friction = 0.80;
var stopThreshold = 0.0001;
var trackingPoints = [];
var decelerating = false;

// axis
var xAxis = vec3.fromValues(1, 0, 0);
var yAxis = vec3.fromValues(0, 1, 0);
var zAxis = vec3.fromValues(0, 0, 1);

//textrue
var textures = [];

var disp_x = 0.0;
var disp_y = 0.0;

// draw cube positions
var dir = 0;
var lastX = 5;
var lastY = 5;
var dis = 0;

// draw cubes and ground
var all_cubes = [];
var new_cube = [];
var ground = [];
var new_ground = [];

// transformations
var transform_matrix_1 = mat4.create();
var transform_matrix_2 = mat4.create();
var transform_matrix_3 = mat4.create();