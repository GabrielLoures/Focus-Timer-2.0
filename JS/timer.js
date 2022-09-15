export function Timer({
  minutesDisplay,
  secondsDisplay
}) {


  let minutes = 25
  let seconds = 0
  let timerTimeout

  function plus() {
    if(minutes < 60) {
      minutes += 5
      updateDisplay(minutes, 0)
    }
  }

  function minus() {
    if (minutes >= 5) {
      minutes -= 5
      updateDisplay(minutes, 0)
    }
  }

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeout)
  }

  function countdown() {
    timerTimeout = setTimeout(function() {
      let minutes = minutesDisplay.textContent
      let seconds = secondsDisplay.textContent

      updateDisplay(minutes, 0)

      if(minutes <= 0 && seconds <=0) {
        reset()
        return
      }

      if(seconds <= 0) {
        seconds = 2
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown();
    }, 1000)
  }

  return {
    countdown,
    reset,
    updateDisplay,
    plus,
    minus
  }
}

