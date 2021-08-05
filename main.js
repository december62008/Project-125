difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500)

    canvas = createCanvas(550, 500);
    canvas.positon(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#F90093')
    document.getElementById("font_size").innerHTML="font size of the text will be = " + difference + "px";
    textSize (difference);
    fill('#0b03fc');
    text('Adirath',50, 400);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        
        leftWristX = results[0].pose.leftWristX.x;
        rightWristX = results[0].pose.leftWristX.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " +rightWristX + "difference = " + difference);
    }
}

