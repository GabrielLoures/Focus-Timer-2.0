//IMPORTS

import { elements } from './elements.js'
import { Controls } from './controls.js'
import Sound from './sounds.js'
import { Timer } from './timer.js'


//VARIÁVEIS

const {
  minutesDisplay,
  secondsDisplay,
  buttonCoffeeOn,
  buttonFireOn,
  buttonForestOn,
  buttonRainOn,
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonCoffeeOff,
  buttonFireOff,
  buttonForestOff,
  buttonRainOff
} = elements

const controls = Controls ({
  buttonForestOff,
  buttonForestOn,
  buttonCoffeeOff,
  buttonCoffeeOn,
  buttonRainOff,
  buttonRainOn,
  buttonFireOff,
  buttonFireOn,
  buttonPlay,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

const sound = Sound()

//EVENTOS

buttonForestOn.addEventListener('click', function() {
  controls.toggleForest()
  sound.forestPlay()
})

buttonForestOff.addEventListener('click', function() {
  controls.toggleForest()
  sound.forestPause()
})

buttonRainOn.addEventListener('click', function() {
  controls.toggleRain()
  sound.rainPlay()
})

buttonRainOff.addEventListener('click', function() {
  controls.toggleRain()
  sound.rainPause()
})

buttonCoffeeOn.addEventListener('click', function() {
  controls.toggleCoffee()
  sound.coffeePlay()
})

buttonCoffeeOff.addEventListener('click', function() {
  controls.toggleCoffee()
  sound.coffeePause()
})

buttonFireOn.addEventListener('click', function() {
  controls.toggleFire()
  sound.firePlay()
})

buttonFireOff.addEventListener('click', function() {
  controls.toggleFire()
  sound.firePause()
})

buttonPlay.addEventListener('click', function() {
  timer.countdown()
  controls.togglePlay()
})

buttonStop.addEventListener('click', function() {
  timer.reset()
  controls.togglePlay()
})

buttonPlus.addEventListener('click', function() {
  timer.plus()
})

buttonMinus.addEventListener('click', function() {
  timer.minus()
})