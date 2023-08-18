import * as audio from './audio.js'

const card1 = document.getElementById('card1')
const card2 = document.getElementById('card2')
const card3 = document.getElementById('card3')
const card4 = document.getElementById('card4')

// let playing = false
// function isPlaying(audio){
//     if(!playing){
//         audio.play()
//         playing = true
//         return
//     }
//     audio.pause()
//     playing = false
// }

function togglePlay(audio) {
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
};

export function cards() {
    card1.addEventListener('click', () => {
        card1.classList.toggle('selected')
        togglePlay(audio.Floresta)
    })
    card2.addEventListener('click', () => {
        card2.classList.toggle('selected')
        togglePlay(audio.Chuva)
    })
    card3.addEventListener('click', () => {
        card3.classList.toggle('selected')
        togglePlay(audio.Cafeteria)
    })
    card4.addEventListener('click', () => {
        card4.classList.toggle('selected')
        togglePlay(audio.Lareira)
    })
}
