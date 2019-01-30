var starsPath;
var flag = 0;

/**
 * Array of points.
 * @type {Array.<Point3D>}
 */
var stars = [];


/**
 * Focus length.
 * @type {number}
 */
var FOCUS_LENGTH = 50;


/**
 * FAV multiplier.
 * @type {number}
 */
var FAV = 500;

var xAxisLength = 0;
var yAxisLength = 0;
var zAxisLength = 0;

var xAxisPath;
var yAxisPath;
var zAxisPath;

var xAxis, yAxis, zAxis;

var DEPTH = 2000;

var STARS_STEP = 1;

var axisOpacity = 0.8;

var xRotation = 0.1;
var yRotation = 0.2;

var prevX = NaN;
var prevY = NaN;


//--------------------------------------------------------------------------------------------------------------
//
//  Point class.
//
//--------------------------------------------------------------------------------------------------------------
/**
 * Point class.
 * @param x
 * @param y
 * @param z
 * @constructor
 */
var Point3D = function (x, y, z) {
    this.x = x;

    this.y = y;
    this.z = z;
};


/**
 * Rotates point in 3D by X.
 * @param {number} angle - Degrees.
 */
Point3D.prototype.rotateX3D = function (angle) {
    angle = degToRads(angle);
    var sin = Math.sin(angle);
    var cos = Math.cos(angle);
    var y = this.y;
    var z = this.z;
    this.y = y * cos - z * sin;
    this.z = z * cos + y * sin;
};


/**
 * Rotates point in 3D by Y.
 * @param {number} angle - Degrees.
 */
Point3D.prototype.rotateY3D = function (angle) {
    angle = degToRads(angle);
    var sin = Math.sin(angle);
    var cos = Math.cos(angle);
    var x = this.x;
    var z = this.z;
    this.x = x * cos - z * sin;
    this.z = z * cos + x * sin;
};


/**
 * Rotates point in 3D by Z.
 * @param {number} angle - Degrees.
 */
Point3D.prototype.rotateZ3D = function (angle) {
    angle = degToRads(angle);
    var sin = Math.sin(angle);
    var cos = Math.cos(angle);
    var x = this.x;
    var y = this.y;
    this.x = x * cos - y * sin;
    this.y = y * cos + x * sin;
};


/**
 * Turns point to screen coordinate.
 * @returns {anychart.graphics.math.Coordinate}
 */
Point3D.prototype.get2DPoint = function () {
    var x = getScreenCoordinate(this.x, this.z);
    var y = getScreenCoordinate(this.y, this.z);
    return acgraph.math.coordinate(x, y);
};


//--------------------------------------------------------------------------------------------------------------
//
//  Utils.
//
//--------------------------------------------------------------------------------------------------------------
/**
 * Gets screen coordinate.
 * @param {number} coordinate - Dimension coordinate.
 * @param {number} z - Depth coordinate.
 * @return {number}
 */
var getScreenCoordinate = function (coordinate, z) {
    return coordinate * FAV / (z + FOCUS_LENGTH + DEPTH);
};


/**
 * Turns degrees to radians.
 * @param degrees
 * @return {number}
 */
var degToRads = function (degrees) {
    return degrees * (Math.PI / 180);
};


/**
 * Generates random number in range.
 * @param val
 * @return {number}
 */
function plusMinusRandom(val) {
    return val - 2 * val * Math.random();
}


/**
 * Generates stars data.
 */
function generateStars() {
    var w = 150;
    var h = 100;
    var d = w;

    var xDelta = 0.7 * w;
    var yDelta = 0.7 * h;
    var zDelta = 0.7 * d;

    var maxXRad = Math.PI * 2;

    var radStep = degToRads(STARS_STEP);
    var ang = 0.0001;

    var numberOfPointOnStep = 7;

    while (ang <= maxXRad) {
        var progress = Math.max(0.2, 1 - ang / maxXRad);

        var x1 = w * ang * Math.cos(ang);
        var y1 = h * ang * Math.sin(ang);
        var x2 = -x1;
        var y2 = -y1;

        var z1 = plusMinusRandom(d);
        var z2 = plusMinusRandom(d);

        for (var i = 0; i < numberOfPointOnStep; i++) {
            var x1Rand = x1 + plusMinusRandom(xDelta);
            var y1Rand = y1 + plusMinusRandom(yDelta);
            var z1Rand = z1 + plusMinusRandom(zDelta);

            var x2Rand = x2 + plusMinusRandom(xDelta);
            var y2Rand = y2 + plusMinusRandom(yDelta);
            var z2Rand = z2 + plusMinusRandom(zDelta);

            stars.push(new Point3D(x1Rand, y1Rand, z1Rand * progress));
            stars.push(new Point3D(x2Rand, y2Rand, z2Rand * progress));
        }

        ang += radStep;
        radStep *= 1.02;
    }
}


/**
 * Draws axes.
 */
function drawAxes() {
    stage.suspend();
    var bounds = stage.getBounds();
    var centerX = Math.round(bounds.width / 2);
    var centerY = Math.round(bounds.height / 2);
    var addX = centerX;
    var addY = centerY;

    var xAxisFromCoord = xAxis.fromPoint.get2DPoint();
    var xAxisToCoord = xAxis.toPoint.get2DPoint();
    xAxisPath
            .clear()
            .moveTo(xAxisFromCoord.x + addX, xAxisFromCoord.y + addY)
            .lineTo(xAxisToCoord.x + addX, xAxisToCoord.y + addY);

    var yAxisFromCoord = yAxis.fromPoint.get2DPoint();
    var yAxisToCoord = yAxis.toPoint.get2DPoint();
    yAxisPath
            .clear()
            .moveTo(yAxisFromCoord.x + addX, yAxisFromCoord.y + addY)
            .lineTo(yAxisToCoord.x + addX, yAxisToCoord.y + addY);

    var zAxisFromCoord = zAxis.fromPoint.get2DPoint();
    var zAxisToCoord = zAxis.toPoint.get2DPoint();
    zAxisPath
            .clear()
            .moveTo(zAxisFromCoord.x + addX, zAxisFromCoord.y + addY)
            .lineTo(zAxisToCoord.x + addX, zAxisToCoord.y + addY);

    starsPath.clear();
    for (var i = 0; i < stars.length; i++) {
        var star = stars[i];
        var startScreenCoords = star.get2DPoint();
        starsPath
                .moveTo(startScreenCoords.x + addX, startScreenCoords.y + addY)
                .lineTo(startScreenCoords.x + addX + 1, startScreenCoords.y + addY + 1);
    }

    stage.resume();
}


/**
 * Calculates rotation of stars.
 * @param opt_xAngle
 * @param opt_yAngle
 * @param opt_zAngle
 */
function rotateStars(opt_xAngle, opt_yAngle, opt_zAngle) {
    opt_xAngle = opt_xAngle || 0;
    opt_yAngle = opt_yAngle || 0;
    opt_zAngle = opt_zAngle || 0;

    for (var i = 0; i < stars.length; i++) {
        var star = stars[i];
        star.rotateX3D(opt_xAngle);
        star.rotateY3D(opt_yAngle);
        star.rotateZ3D(opt_zAngle);
    }
}


/**
 * Axis class.
 * @param fromX
 * @param toX
 * @param fromY
 * @param toY
 * @param fromZ
 * @param toZ
 * @constructor
 */
Axis = function (fromX, toX, fromY, toY, fromZ, toZ) {
    this.fromPoint = new Point3D(fromX, fromY, fromZ);
    this.toPoint = new Point3D(toX, toY, toZ);
};


/**
 * Rotates axes in 3D by X.
 * @param angle
 */
Axis.prototype.rotateX3D = function (angle) {
    this.fromPoint.rotateX3D(angle);
    this.toPoint.rotateX3D(angle);
};


/**
 * Rotates axes in 3D by Y.
 * @param angle
 */
Axis.prototype.rotateY3D = function (angle) {
    this.fromPoint.rotateY3D(angle);
    this.toPoint.rotateY3D(angle);
};

/**
 * Rotates axes in 3D by Z.
 * @param angle
 */
Axis.prototype.rotateZ3D = function (angle) {
    this.fromPoint.rotateZ3D(angle);
    this.toPoint.rotateZ3D(angle);
};

var cont = document.getElementById('container');
cont.style.backgroundColor = '#000';
var stage = acgraph.create('container');

generateStars();

//x - green
xAxisPath = stage.path().stroke([{color: '#afa', opacity: 0}, {
    color: '#afa',
    opacity: axisOpacity
}, {color: '#afa', opacity: 0}]);
//y - red
yAxisPath = stage.path().stroke([{color: '#faa', opacity: 0}, {
    color: '#faa',
    opacity: axisOpacity
}, {color: '#faa', opacity: 0}]);
//z - blue
zAxisPath = stage.path().stroke([{color: '#aaf', opacity: 0}, {
    color: '#aaf',
    opacity: axisOpacity
}, {color: '#aaf', opacity: 0}]);

starsPath = stage.path().stroke({color: '#fff', opacity: 0.7});

var bounds = stage.getBounds();

xAxisLength = Math.round(bounds.width);
zAxisLength = xAxisLength;
yAxisLength = Math.round(bounds.height);

xAxis = new Axis();
xAxis.fromPoint.x = Math.round(xAxisLength / 2);
xAxis.toPoint.x = -xAxis.fromPoint.x;
xAxis.fromPoint.y = 0;
xAxis.toPoint.y = 0;
xAxis.fromPoint.z = 0;
xAxis.toPoint.z = 0;

yAxis = new Axis();
yAxis.fromPoint.x = 0;
yAxis.toPoint.x = 0;
yAxis.fromPoint.y = Math.round(yAxisLength / 2);
yAxis.toPoint.y = -yAxis.fromPoint.y;
yAxis.fromPoint.z = 0;
yAxis.toPoint.z = 0;

zAxis = new Axis();
zAxis.fromPoint.x = 0;
zAxis.toPoint.x = 0;
zAxis.fromPoint.y = 0;
zAxis.toPoint.y = 0;
zAxis.fromPoint.z = Math.round(zAxisLength / 2);
zAxis.toPoint.z = -zAxis.fromPoint.z;

window.requestAnimationFrame = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            setTimeout(callback, 1000 / 60);
        };

cont.addEventListener('mousedown', function () {
    flag = 1;
});
cont.addEventListener('mousemove', function () {
    if (flag === 1) {
        cont.addEventListener('mousemove', galaxyMove);
    }
});
cont.addEventListener('mouseup', function () {
    flag = 0;
    cont.removeEventListener('mousemove', galaxyMove);
});

function galaxyMove(e) {
    prevX = isNaN(prevX) ? e.clientX : prevX;
    prevY = isNaN(prevY) ? e.clientY : prevY;

    yRotation = e.clientX - prevX;
    xRotation = e.clientY - prevY;

    prevX = e.clientX;
    prevY = e.clientY;
}

drawAxes();
draw();

/**
 * Draws.
 */
function draw() {
    window.requestAnimationFrame(draw);

    xAxis.rotateX3D(xRotation);
    xAxis.rotateY3D(yRotation);
//xAxis.rotateZ3D(zRot);

    yAxis.rotateX3D(xRotation);
    yAxis.rotateY3D(yRotation);
//yAxis.rotateZ3D(zRot);

    zAxis.rotateX3D(xRotation);
    zAxis.rotateY3D(yRotation);
//zAxis.rotateZ3D(zRot);

    rotateStars(xRotation, yRotation, 0);

    drawAxes();
}