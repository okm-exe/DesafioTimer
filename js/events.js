import * as el from './elements.js'
import * as actions from './actions.js'
import { updateDisplay } from './timer.js'
import state from './state.js'

export function setMinutes(){
    el.minutes.addEventListener('click', (event) => {
        el.minutes.setAttribute('contenteditable', true)
        el.minutes.focus()
        el.minutes.textContent = ""
        el.minutes.onkeypress = (event) => /\d/.test(event.key);
        actions.stopTimer()
    })
    el.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
    
        if(time > 60){
            time = 60
        }
    
        state.minutes = time
        state.seconds = 0
    
        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })
    
}
export function registerControls() {
    el.controls.addEventListener('click', (event) => {
        const action = (event.target.dataset.action)
        if(typeof actions[action] != 'function'){
            return
        }
        actions[action]()
    }) 
}