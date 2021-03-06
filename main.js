rightWristX = 0;
rightWristY = 0;
scoreRightWrist = 0;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.parent("canvas");
    Video = createCapture(VIDEO);
    Video.size(600, 500);
    Video.hide();
    poseNet = ml5.poseNet(Video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        noseX = results[0].pose.rightWrist.x;
        noseY = results[0].pose.rightWrist.y;
        scoreRightWrist = results[0].pose.keypoints[10].score;
    }
}

function modelLoaded() {
    console.log("Model Loaded");
}

function draw() {
    image(Video, 0, 0, 600, 500);
    if (scoreRightWrist > 0.2) {
        fill("#00FF00");
        stroke("#00FF00");
        circle(rightWristX, rightWristY, 50)
    }
}