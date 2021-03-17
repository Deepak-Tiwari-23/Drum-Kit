window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.keys[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
});

function removeTransformation(e) {
    if (e.propertyName != 'transform') return;   // skip if it is not transform
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.keys');
keys.forEach(key => key.addEventListener('transitionend', removeTransformation));