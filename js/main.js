import * as index from './index.js'
import * as cards from './cards.js'
import { darkMode } from './togglemode.js'

darkMode()
cards.cards()
index.start(25, 0)
// document.getElementById('card1').src = "./assets/selected/c1.svg"
// document.getElementById('card2').src = "./assets/selected/c2.svg"
// document.getElementById('card3').src = "./assets/selected/c3.svg"
// document.getElementById('card4').src = "./assets/selected/c4.svg"
