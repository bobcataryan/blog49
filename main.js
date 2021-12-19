var song="";
var song2="";

function setup(){
    canvas = createCanvas(600,500);
    canvas.position(650,250);

    video= createCapture(VIDEO);
    video.hide();
}

function draw(){
image(video,0,0,600,500);
}   

function preload() { 
    song = loadSound("music.mp3"); 
    song2= loadSound("music2.mp3"); 
}

