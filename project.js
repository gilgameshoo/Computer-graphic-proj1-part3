

var canvas;
var gl;

var numVertices  = 36;

var pointsArray = [];
var pointsArray1 = [];
var pointsArray2 = [];
var pointsArray3 = [];
var pointsArray4 = [];
var pointsArray5 = [];
var pointsArray6 = [];
var pointsArray7 = [];
var pointsArray8 = [];
var pointsArray9 = [];
var pointsArray10 = [];
var pointsArray11 = [];
var pointsArray12 = [];
var colorsArray = [];
var colorsArray1 = [];
var colorsArray2 = [];
var colorsArray3 = [];
var colorsArray4 = [];
var colorsArray5 = [];
var colorsArray6 = [];
var texCoordsArray = [];

var texture, program;

var texCoord = [
    vec2(0, 0),
    vec2(0, 1),
    vec2(1, 1),
    vec2(1, 0)
];
//var vBuffer, vBuffer2, vBuffer3, vBuffer4, vBuffer5, vBuffer6,vBuffer7, cBuffer,vColor, vPosition, vPosition2, vPosition3, vPosition4, vPosition5, vPosition6, vPosition7;
//var vBuffer8, vPosition8, vBuffer9, vPosition9;
//house
var vertices = [
    vec4( -0.7, -0.2,  0.5, 1.0 ),
    vec4( -0.7,  0.2,  0.5, 1.0 ),
    vec4( 0.7,  0.2,  0.5, 1.0 ),
    vec4( 0.7, -0.2,  0.5, 1.0 ),
    vec4( -0.7, -0.2, -0.5, 1.0 ),
    vec4( -0.7,  0.2, -0.5, 1.0 ),
    vec4( 0.7,  0.2, -0.5, 1.0 ),
    vec4( 0.7, -0.2, -0.5, 1.0 ),
];
// ÈýÀâÖù·¿¶¥×ó
var vertices1 = [
    vec4(-0.7, 0.2, 0.5, 1.0),
    vec4(-0.2, 0.2, 0.5, 1.0),
    vec4(-0.45, 0.5, 0.5, 1.0),
    vec4(-0.7, 0.2, -0.5, 1.0),
    vec4(-0.2, 0.2, -0.5, 1.0),
    vec4(-0.45, 0.5, -0.5, 1.0),
];
//ÈýÀâÖù·¿¶¥ÓÒ
var vertices2 = [
    vec4(0.7, 0.2, 0.5, 1.0),
    vec4(0.2, 0.2, 0.5, 1.0),
    vec4(0.45, 0.5, 0.5, 1.0),
    vec4(0.7, 0.2, -0.5, 1.0),
    vec4(0.2, 0.2, -0.5, 1.0),
    vec4(0.45, 0.5, -0.5, 1.0),
];
//Öù×Ó
var vertices3 = [
    vec4(-0.2, 0.2, 0.5, 1.0),
    vec4(-0.2, 0.2, -0.5, 1.0),
    vec4(-0.45, 0.45, 0, 1.0),
    vec4(0.2, 0.2, 0.5, 1.0),
    vec4(0.2, 0.2, -0.5, 1.0),
    vec4(0.45, 0.45, 0, 1.0),
];
var vertices4 = [
    vec4(-0.2, 0.15, 0.6, 1.0),
    vec4(-0.2, 0.2, 0.6, 1.0),
    vec4(0.2, 0.2, 0.6, 1.0),
    vec4(0.2, 0.15, 0.6, 1.0),
    vec4(-0.2, 0.15, 0.5, 1.0),
    vec4(-0.2, 0.2, 0.5, 1.0),
    vec4(0.2, 0.2, 0.5, 1.0),
    vec4(0.2, 0.15, 0.5, 1.0),
];
var vertices5 = [
    vec4(-0.1, 0.15, 0.7, 1.0),
    vec4(-0.1, 0.2, 0.7, 1.0),
    vec4(0.1, 0.2, 0.7, 1.0),
    vec4(0.1, 0.15, 0.7, 1.0),
    vec4(-0.2, 0.15, 0.6, 1.0),
    vec4(-0.2, 0.2, 0.6, 1.0),
    vec4(0.2, 0.2, 0.6, 1.0),
    vec4(0.2, 0.15, 0.6, 1.0),
];
var vertices6 = [
    vec4( -0.2, -0.2,  0.6, 1.0 ),
    vec4( -0.2,  0.15,  0.6, 1.0 ),
    vec4( -0.18,  0.15,  0.6, 1.0 ),
    vec4( -0.18, -0.2,  0.6, 1.0 ),
    vec4( -0.2, -0.2, 0.58, 1.0 ),
    vec4( -0.2,  0.15, 0.58, 1.0 ),
    vec4( -0.18,  0.15, 0.58, 1.0 ),
    vec4( -0.18, -0.2, 0.58, 1.0 ),
];

var vertices7 = [
    vec4( 0.2, -0.2,  0.6, 1.0 ),
    vec4( 0.2,  0.15,  0.6, 1.0 ),
    vec4( 0.18,  0.15,  0.6, 1.0 ),
    vec4( 0.18, -0.2,  0.6, 1.0 ),
    vec4( 0.2, -0.2, 0.58, 1.0 ),
    vec4( 0.2,  0.15, 0.58, 1.0 ),
    vec4( 0.18,  0.15, 0.58, 1.0 ),
    vec4( 0.18, -0.2, 0.58, 1.0 ),
];

var vertices8 = [
    vec4( 0.1, -0.2,  0.7, 1.0 ),
    vec4( 0.1,  0.15,  0.7, 1.0 ),
    vec4( 0.08,  0.15,  0.7, 1.0 ),
    vec4( 0.08, -0.2,  0.7, 1.0 ),
    vec4( 0.1, -0.2, 0.68, 1.0 ),
    vec4( 0.1,  0.15, 0.68, 1.0 ),
    vec4( 0.08,  0.15, 0.68, 1.0 ),
    vec4( 0.08, -0.2, 0.68, 1.0 ),
];

var vertices9 = [
    vec4( -0.1, -0.2,  0.7, 1.0 ),
    vec4( -0.1,  0.15,  0.7, 1.0 ),
    vec4( -0.08,  0.15,  0.7, 1.0 ),
    vec4( -0.08, -0.2,  0.7, 1.0 ),
    vec4( -0.1, -0.2, 0.68, 1.0 ),
    vec4( -0.1,  0.15, 0.68, 1.0 ),
    vec4( -0.08,  0.15, 0.68, 1.0 ),
    vec4( -0.08, -0.2, 0.68, 1.0 ),
];
var other_building = [
    vec4( -1.0, -0.2,  0, 1.0 ),
    vec4( -1.0,  0.2,  0, 1.0 ),
    vec4( -0.7,  0.2,  0, 1.0 ),
    vec4( -0.7, -0.2,  0, 1.0 ),
    vec4( -1.0, -0.2, -0.5, 1.0 ),
    vec4( -1.0,  0.2, -0.5, 1.0 ),
    vec4( -0.7,  0.2, -0.5, 1.0 ),
    vec4( -0.7, -0.2, -0.5, 1.0 ),
];
var smoke = [
    vec4( -1.0, 0.2,  0, 1.0 ),
    vec4( -1.0,  0.4,  0, 1.0 ),
    vec4( -0.95,  0.4,  0, 1.0 ),
    vec4( -0.95, 0.2,  0, 1.0 ),
    vec4( -1.0, 0.2, -0.05, 1.0 ),
    vec4( -1.0,  0.4, -0.05, 1.0 ),
    vec4( -0.95,  0.4, -0.05, 1.0 ),
    vec4( -0.95, 0.2, -0.05, 1.0 ),
];
var grass = [
    vec4( -1.0, -0.2,  0, 1.0 ),
    vec4( -1.0,  -0.2,  0, 1.0 ),
    vec4( 1,  -0.2,  0, 1.0 ),
    vec4( 1, -0.2,  0, 1.0 ),
    vec4( -1.0, -0.2, 2, 1.0 ),
    vec4( -1.0,  -0.2, 2, 1.0 ),
    vec4( 1,  -0.2, 2, 1.0 ),
    vec4( 1, -0.2, 2, 1.0 ),
];

var vertexColors = [
    vec4( 0.7, 0.0, 0.0, 1.0 ),  // red
    vec4( 0.5, 0.0, 0.0, 1.0 ),  // deep red
    vec4( 1.0, 1.0, 0.0, 1.0 ),  // yellow
    vec4( 0.0, 1.0, 0.0, 1.0 ),  // green
    vec4( 0.0, 0.0, 1.0, 1.0 ),  // blue
    vec4( 1.0, 0.0, 1.0, 1.0 ),  // magenta
    vec4( 0.0, 0.0, 0.5, 1.0 ),  // deep blue
    vec4( 0.5, 0.5, 0.5, 1.0 ),  // deep white
];


var near = -1;
var far = 1;
var radius = 1.0;
var theta  = 0.0;
var phi    = 0.0;
var dr = 5.0 * Math.PI/180.0;

var left = -1.0;
var right = 1.0;
var ytop = 1.0;
var bottom = -1.0;


var mvMatrix, pMatrix;
var modelView, projection;
var eye;

const at = vec3(0.0, 0.0, 0.0);
const up = vec3(0.0, 1.0, 0.0);


function configureTexture( image ) {
    texture = gl.createTexture();
    gl.bindTexture( gl.TEXTURE_2D, texture );
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGB,
        gl.RGB, gl.UNSIGNED_BYTE, image );
    gl.generateMipmap( gl.TEXTURE_2D );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER,
        gl.NEAREST_MIPMAP_LINEAR );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );

    gl.uniform1i(gl.getUniformLocation(program, "texture"), 0);
}
// quad uses first index to set color for face

function quad(a, b, c, d) {
    pointsArray.push(vertices[a]);
    colorsArray.push(vertexColors[1]);
    texCoordsArray.push(texCoord[0]);
    pointsArray.push(vertices[b]);
    colorsArray.push(vertexColors[1]);
    texCoordsArray.push(texCoord[1]);
    pointsArray.push(vertices[c]);
    colorsArray.push(vertexColors[1]);
    texCoordsArray.push(texCoord[2]);
    pointsArray.push(vertices[a]);
    colorsArray.push(vertexColors[1]);
    texCoordsArray.push(texCoord[0]);
    pointsArray.push(vertices[c]);
    colorsArray.push(vertexColors[1]);
    texCoordsArray.push(texCoord[2]);
    pointsArray.push(vertices[d]);
    colorsArray.push(vertexColors[1]);
    texCoordsArray.push(texCoord[3]);
    pointsArray4.push(vertices4[a]);
    colorsArray1.push(vertexColors[2]);
    pointsArray4.push(vertices4[b]);
    colorsArray1.push(vertexColors[2]);
    pointsArray4.push(vertices4[c]);
    colorsArray1.push(vertexColors[2]);
    pointsArray4.push(vertices4[a]);
    colorsArray1.push(vertexColors[2]);
    pointsArray4.push(vertices4[c]);
    colorsArray1.push(vertexColors[2]);
    pointsArray4.push(vertices4[d]);
    colorsArray1.push(vertexColors[2]);
    pointsArray5.push(vertices5[a]);
    colorsArray2.push(vertexColors[4]);
    pointsArray5.push(vertices5[b]);
    colorsArray2.push(vertexColors[4]);
    pointsArray5.push(vertices5[c]);
    colorsArray2.push(vertexColors[4]);
    pointsArray5.push(vertices5[a]);
    colorsArray2.push(vertexColors[4]);
    pointsArray5.push(vertices5[c]);
    colorsArray2.push(vertexColors[4]);
    pointsArray5.push(vertices5[d]);
    colorsArray2.push(vertexColors[4]);

    pointsArray6.push(vertices6[a]);
    colorsArray3.push(vertexColors[7]);
    pointsArray6.push(vertices6[b]);
    colorsArray3.push(vertexColors[7]);
    pointsArray6.push(vertices6[c]);
    colorsArray3.push(vertexColors[7]);
    pointsArray6.push(vertices6[a]);
    colorsArray3.push(vertexColors[7]);
    pointsArray6.push(vertices6[c]);
    colorsArray3.push(vertexColors[7]);
    pointsArray6.push(vertices6[d]);
    colorsArray3.push(vertexColors[7]);

    pointsArray7.push(vertices7[a]);
    colorsArray4.push(vertexColors[6]);
    pointsArray7.push(vertices7[b]);
    colorsArray4.push(vertexColors[6]);
    pointsArray7.push(vertices7[c]);
    colorsArray4.push(vertexColors[6]);
    pointsArray7.push(vertices7[a]);
    colorsArray4.push(vertexColors[6]);
    pointsArray7.push(vertices7[c]);
    colorsArray4.push(vertexColors[6]);
    pointsArray7.push(vertices7[d]);
    colorsArray4.push(vertexColors[6]);

    pointsArray8.push(vertices8[a]);
    colorsArray5.push(vertexColors[3]);
    pointsArray8.push(vertices8[b]);
    colorsArray5.push(vertexColors[3]);
    pointsArray8.push(vertices8[c]);
    colorsArray5.push(vertexColors[3]);
    pointsArray8.push(vertices8[a]);
    colorsArray5.push(vertexColors[3]);
    pointsArray8.push(vertices8[c]);
    colorsArray5.push(vertexColors[3]);
    pointsArray8.push(vertices8[d]);
    colorsArray5.push(vertexColors[3]);

    pointsArray9.push(vertices9[a]);
    colorsArray6.push(vertexColors[0]);
    pointsArray9.push(vertices9[b]);
    colorsArray6.push(vertexColors[0]);
    pointsArray9.push(vertices9[c]);
    colorsArray6.push(vertexColors[0]);
    pointsArray9.push(vertices9[a]);
    colorsArray6.push(vertexColors[0]);
    pointsArray9.push(vertices9[c]);
    colorsArray6.push(vertexColors[0]);
    pointsArray9.push(vertices9[d]);
    colorsArray6.push(vertexColors[0]);

    pointsArray10.push(other_building[a]);
    pointsArray10.push(other_building[b]);
    pointsArray10.push(other_building[c]);
    pointsArray10.push(other_building[a]);
    pointsArray10.push(other_building[c]);
    pointsArray10.push(other_building[d]);

    pointsArray11.push(smoke[a]);
    pointsArray11.push(smoke[b]);
    pointsArray11.push(smoke[c]);
    pointsArray11.push(smoke[a]);
    pointsArray11.push(smoke[c]);
    pointsArray11.push(smoke[d]);

    pointsArray12.push(grass[a]);
    pointsArray12.push(grass[b]);
    pointsArray12.push(grass[c]);
    pointsArray12.push(grass[a]);
    pointsArray12.push(grass[c]);
    pointsArray12.push(grass[d]);
}

function triangle(a,b,c) {
    pointsArray1.push(vertices1[a]);
  //  colorsArray.push(vertexColors[a]);
    pointsArray1.push(vertices1[b]);
    //colorsArray.push(vertexColors[a]);
    pointsArray1.push(vertices1[c]);
    //colorsArray.push(vertexColors[a]);
    pointsArray2.push(vertices2[a]);
    pointsArray2.push(vertices2[b]);
    pointsArray2.push(vertices2[c]);
    pointsArray3.push(vertices3[a]);
    pointsArray3.push(vertices3[b]);
    pointsArray3.push(vertices3[c]);
}

// Each face determines two triangles

function colorCube()
{
    quad( 1, 2, 3, 0 );
    quad( 2, 3, 7, 6 );
    quad( 3, 0, 4, 7 );
    quad( 6, 5, 1, 2 );
    quad( 4, 5, 6, 7 );
    quad( 5, 4, 0, 1 );
    triangle(1, 2, 0);
    triangle(2, 1, 4);
    triangle(2, 4, 5);
    triangle(3, 2, 5);
    triangle(3, 2, 0);
    triangle(1, 0, 4);
    triangle(3, 4, 0);
    triangle(3, 4, 5);
}


window.onload = function init() {
    canvas = document.getElementById( "gl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    gl.viewport( 0, 0, canvas.width, canvas.height );

    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

    gl.enable(gl.DEPTH_TEST);

    //
    //  Load shaders and initialize attribute buffers
    //
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

    colorCube();

    console.log(pointsArray6);
    cBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
    //gl.bufferData( gl.ARRAY_BUFFER, flatten(colorsArray), gl.STATIC_DRAW );

    vColor = gl.getAttribLocation( program, "vColor" );
    gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vColor);



    vBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(pointsArray), gl.STATIC_DRAW );

    vPosition = gl.getAttribLocation( program, "vPosition" );

    gl.enableVertexAttribArray( vPosition );

    var image = document.getElementById("wall_texture.png");

    configureTexture( image );

    //cBuffer1 = gl.createBuffer();
    //gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer1 );
    //gl.bufferData( gl.ARRAY_BUFFER, flatten(colorsArray1), gl.STATIC_DRAW );
    //
    //vColor1 = gl.getAttribLocation( program, "vColor" );
    //gl.vertexAttribPointer( vColor1, 4, gl.FLOAT, false, 0, 0 );
    //gl.enableVertexAttribArray( vColor1);

    vBuffer2 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer2 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(pointsArray1), gl.STATIC_DRAW );
    vPosition2 = gl.getAttribLocation( program, "vPosition" );
    gl.enableVertexAttribArray( vPosition2 );

    vBuffer3 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer3 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(pointsArray2), gl.STATIC_DRAW );
    vPosition3 = gl.getAttribLocation( program, "vPosition" );
    gl.enableVertexAttribArray( vPosition3 );

    vBuffer4 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer4 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(pointsArray3), gl.STATIC_DRAW );
    vPosition4 = gl.getAttribLocation( program, "vPosition" );
    gl.enableVertexAttribArray( vPosition4 );

    vBuffer5 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer5 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(pointsArray4), gl.STATIC_DRAW );
    vPosition5 = gl.getAttribLocation( program, "vPosition" );
    gl.enableVertexAttribArray( vPosition5 );

    vBuffer6 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer6 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(pointsArray5), gl.STATIC_DRAW );
    vPosition6 = gl.getAttribLocation( program, "vPosition" );
    gl.enableVertexAttribArray( vPosition6 );

    vBuffer7 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer7 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(pointsArray6), gl.STATIC_DRAW );
    vPosition7 = gl.getAttribLocation( program, "vPosition" );
    gl.enableVertexAttribArray( vPosition7 );

    vBuffer8 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer8 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(pointsArray7), gl.STATIC_DRAW );
    vPosition8 = gl.getAttribLocation( program, "vPosition" );
    gl.enableVertexAttribArray( vPosition8 );

    vBuffer9 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer9 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(pointsArray8), gl.STATIC_DRAW );
    vPosition9 = gl.getAttribLocation( program, "vPosition" );
    gl.enableVertexAttribArray( vPosition9 );

    vBuffer10 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer10 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(pointsArray9), gl.STATIC_DRAW );
    vPosition10 = gl.getAttribLocation( program, "vPosition" );
    gl.enableVertexAttribArray( vPosition10 );

    vBuffer11 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer11 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(pointsArray10), gl.STATIC_DRAW );
    vPosition11 = gl.getAttribLocation( program, "vPosition" );
    gl.enableVertexAttribArray( vPosition11 );

    vBuffer12 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer12 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(pointsArray11), gl.STATIC_DRAW );
    vPosition12 = gl.getAttribLocation( program, "vPosition" );
    gl.enableVertexAttribArray( vPosition12 );

    vBuffer13 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer13 );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(pointsArray12), gl.STATIC_DRAW );
    vPosition13 = gl.getAttribLocation( program, "vPosition" );
    gl.enableVertexAttribArray( vPosition13 );



    modelView = gl.getUniformLocation( program, "modelView" );
    projection = gl.getUniformLocation( program, "projection" );

// buttons to change viewing parameters

    document.getElementById("Button1").onclick = function(){near  *= 1.1; far *= 1.1;};
    document.getElementById("Button2").onclick = function(){near *= 0.9; far *= 0.9;};
    document.getElementById("Button3").onclick = function(){radius *= 1.1;};
    document.getElementById("Button4").onclick = function(){radius *= 0.9;};
    document.getElementById("Button5").onclick = function(){theta += dr;};
    document.getElementById("Button6").onclick = function(){theta -= dr;};
    document.getElementById("Button7").onclick = function(){phi += dr;};
    document.getElementById("Button8").onclick = function(){phi -= dr;};

    render();
}


var render = function() {
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    eye = vec3(radius*Math.sin(phi), radius*Math.sin(theta),
        radius*Math.cos(phi));

    mvMatrix = lookAt(eye, at , up);
    pMatrix = ortho(left, right, bottom, ytop, near, far);

    gl.uniformMatrix4fv( modelView, false, flatten(mvMatrix) );
    gl.uniformMatrix4fv( projection, false, flatten(pMatrix) );

    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(colorsArray), gl.STATIC_DRAW );
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer );
    gl.vertexAttribPointer( vPosition, 4, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLES, 0, numVertices );



    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(colorsArray2), gl.STATIC_DRAW );
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer2 );
    gl.vertexAttribPointer( vPosition2, 4, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLES, 0, pointsArray1.length );

    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer3 );
    gl.vertexAttribPointer( vPosition3, 4, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLES, 0, pointsArray2.length );

    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(colorsArray4), gl.STATIC_DRAW );
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer4 );
    gl.vertexAttribPointer( vPosition4, 4, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLES, 0, pointsArray3.length );

    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(colorsArray3), gl.STATIC_DRAW );
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer5 );
    gl.vertexAttribPointer( vPosition5, 4, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLES, 0, pointsArray4.length );

    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer6 );
    gl.vertexAttribPointer( vPosition6, 4, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLES, 0, pointsArray5.length );

    //gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
    //gl.bufferData( gl.ARRAY_BUFFER, flatten(colorsArray1), gl.STATIC_DRAW );
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer7 );
    gl.vertexAttribPointer( vPosition7, 4, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLES, 0, pointsArray6.length );

    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer8 );
    gl.vertexAttribPointer( vPosition8, 4, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLES, 0, pointsArray7.length );

    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer9 );
    gl.vertexAttribPointer( vPosition9, 4, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLES, 0, pointsArray8.length );

    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer10 );
    gl.vertexAttribPointer( vPosition10, 4, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLES, 0, pointsArray9.length );

    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer12 );
    gl.vertexAttribPointer( vPosition12, 4, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLES, 0, pointsArray11.length );

    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(colorsArray5), gl.STATIC_DRAW );
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer13 );
    gl.vertexAttribPointer( vPosition13, 4, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLES, 0, pointsArray12.length );

    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(colorsArray6), gl.STATIC_DRAW );
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer11 );
    gl.vertexAttribPointer( vPosition11, 4, gl.FLOAT, false, 0, 0 );
    gl.drawArrays( gl.TRIANGLES, 0, pointsArray10.length );
    requestAnimFrame(render);
}
