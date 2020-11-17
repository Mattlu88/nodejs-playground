class Timer {
  #timePassed = 0
  constructor(amountOfTime, interval) {
    this.amountOfTime = amountOfTime
    this.interval = interval
  }

  timeFinished(intvlID) {
    clearInterval(intvlID)
    this.showInfo(`100% is done`)
  }

  #incTime() {
    this.#timePassed += this.interval
    const percent = (this.#timePassed / this.amountOfTime) * 100
    this.showInfo(`wait ... ${percent}%`)
  }

  showInfo(message) {
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    process.stdout.write(message)
  }

  start() {
    console.log(`Setting a ${this.amountOfTime / 1000} seconds timer`)
    const intvlID = setInterval(() => this.#incTime(), this.interval)

    setTimeout(() =>
      this.timeFinished(intvlID), this.amountOfTime)
  }
}

const timer = new Timer(10000, 1000)
timer.start()