class Chronometer{
  constructor(){
    this.currentTime = 0,
      this.intervalId = 0
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000)
  }
  
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    if(this.currentTime > 60){
      return this.currentTime = this.currentTime - 60
    }
    return Math.floor(this.currentTime)
  }

  twoDigitsNumber (number){
    if(number<10){
      return ('0' + number).slice(-2)
    }
    return number.toString()
}


}






