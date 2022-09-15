export function Controls({
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
}) {

  function toggleForest() {
    buttonForestOn.classList.toggle('hide')
    buttonForestOff.classList.toggle('hide')
  }

  function toggleRain() {
    buttonRainOn.classList.toggle('hide')
    buttonRainOff.classList.toggle('hide')
  }

  function toggleCoffee() {
    buttonCoffeeOn.classList.toggle('hide')
    buttonCoffeeOff.classList.toggle('hide')
  }

  function toggleFire() {
    buttonFireOn.classList.toggle('hide')
    buttonFireOff.classList.toggle('hide')
  }

  function togglePlay() {
    buttonPlay.classList.toggle('hide')
    buttonStop.classList.toggle('hide')
  }

  return {
    toggleForest,
    toggleRain,
    toggleCoffee,
    toggleFire,
    togglePlay
  }

}