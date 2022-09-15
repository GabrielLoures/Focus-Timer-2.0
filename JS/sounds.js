export default function Sounds() {

  const forest = new Audio('../sounds/Floresta.wav')
  const rain = new Audio('../sounds/Chuva.wav')
  const coffee = new Audio('../sounds/Cafeteria.wav')
  const fire = new Audio('../sounds/Lareira.wav')


  forest.loop = true
  rain.loop = true
  coffee.loop = true
  fire.loop = true

  function forestPlay() {
    forest.play()
  }

  function forestPause() {
    forest.pause()
  }

  function rainPlay() {
    rain.play()
  }

  function rainPause() {
    rain.pause()
  }

  function coffeePlay() {
    coffee.play()
  }

  function coffeePause() {
    coffee.pause()
  }

  function firePlay() {
    fire.play()
  }

  function firePause() {
    fire.pause()
  }

  

  return {
    forestPlay,
    rainPlay,
    coffeePlay,
    firePlay,
    forestPause,
    rainPause,
    coffeePause,
    firePause
  }

}