const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')
const $progress = document.querySelector('#progress')

$play.addEventListener('click',handlerPlay);
$pause.addEventListener('click',handlerPause);
$backward.addEventListener('click',handlerBackward);
$forward.addEventListener('click',handlerForward);
$video.addEventListener('loadedmetadata',handlerLoaded);
$video.addEventListener('timeupdate',handlertimeUpdate);
$progress.addEventListener('input', handleInput);

function handlerPlay(){
    $video.play()
    $play.hidden = true;
    $pause.hidden = false;
    console.log('click boton');
}

function handlerPause(){
    $video.pause()
    $play.hidden = false;
    $pause.hidden = true;
    console.log('click boton');
}

function handlerBackward(){
   $video.currentTime -= 10;
    console.log('-10seg');
}

function handlerForward(){
    $video.currentTime += 10;
    console.log('+10seg');


}

function handlerLoaded(){
    $progress.max = $video.duration
    console.log('Video cargado');
}

function handlertimeUpdate(){
    $progress.value = $video.currentTime;
}

function handleInput() {
    $video.currentTime = $progress.value;
}


    