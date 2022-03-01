let video = document.getElementById("video1");



function retrocede() {
    video.currentTime -= 15;

}

function advance() {
    video.currentTime += 15;
    
}

function decelerate() {
    video.playbackRate -= 0.1;
    
}

function accelerate() {
    video.playbackRate += 0.1;
    
}

function play() {
    video.play();
    
}

function pause() {
    video.pause();
    
    
}

function stop() {
    video.pause();
    video.currentTime = 0;
    
}





