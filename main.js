function preload(){}

function setup(){
    canvas=createCanvas(400,400);
    canvas.position(500,200);
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
    }

function draw(){
image(video,0,0,400,400);
}

function filter_snapshot(){
save("filter.png");
}

function modelLoaded(){
console.log("Model Loaded");
}

function gotPoses(results){
    if(results){
    console.log(results);
    }
}