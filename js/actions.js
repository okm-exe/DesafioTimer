import * as el from './elements.js'
import state from './state.js'
import * as timer from './timer.js'

export function startTimer() {
    if(state.isRunning === true){
        return
    }
    state.isRunning = true;
    timer.countdown()
}
export function stopTimer(){
    state.isRunning = false;
}

export function plus5() {
    if(state.minutes>=55){
        state.minutes = 60
        state.seconds = 0
        timer.updateDisplay()
        return
    }
    state.minutes = (Number(el.minutes.textContent) + 5)
    state.seconds = (Number(el.seconds.textContent))
    timer.updateDisplay()
}

export function minus5() {
    if(state.minutes<=5){
        state.minutes = 0
        timer.updateDisplay()
        return
    }
    state.minutes = (Number(el.minutes.textContent) - 5)
    state.seconds = (Number(el.seconds.textContent))
    timer.updateDisplay()
}