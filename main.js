const audio = document.getElementById('audio');
const button = document.getElementById('btn');
const pause = document.getElementById('pause');

console.log(button)

button.addEventListener('click', () => {
    audio.play();
    console.log('working');
})

pause.addEventListener('click', () => {
    audio.pause();
    
})

