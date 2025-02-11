// click and drag
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

// axis
var xAxis = vec3.fromValues(1, 0, 0);
var yAxis = vec3.fromValues(0, 1, 0);
var zAxis = vec3.fromValues(0, 0, 1);


// texture
var textures = [];
var cubetextures = [];

// controls for click and drag
var moveShape = false;
var initShapePos = [0, 0];

var disp_x = 0.0;
var disp_y = 0.0;

var friction = 0.80;
var stopThreshold = 0.0001;

var trackingPoints = [];
var decelerating = false;

var mouse = {
  mouseDown: false,
  mouseDragged: false,
}
var prevMouseDown = false;

// init height when drop a cube
var height = 0;

// matrices init
var transform_matrix_1 = mat4.create();
var transform_matrix_2 = mat4.create();
var transform_matrix_3 = mat4.create();

var transform_rain_1 = mat4.create();
var transform_rain_2 = mat4.create();

var characterheight = 0;
var all_cubes = [];
var new_cube = [];


var ground = [];
var new_ground = [];

// character
var character = [];

// init the first block
var dir = 0;
var lastX = 0;
var lastY = 0;
var dis = 0;


var webglCanvas = $("#webglCanvas");
var clientRect = webglCanvas[0].getBoundingClientRect();

var NO_CONTROL = 0;
var IS_ROTATING = 1;
var IS_MOVING = 2;

var init = true;

