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

// axis
var xAxis = vec3.fromValues(1, 0, 0);
var yAxis = vec3.fromValues(0, 1, 0);
var zAxis = vec3.fromValues(0, 0, 1);


//textrue
var textures = [];

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