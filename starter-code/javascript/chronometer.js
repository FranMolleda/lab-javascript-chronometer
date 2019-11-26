class Chronometer{
  constructor(){
    this.currentTime = 0,
    this.intervalId = 0
 }

 startClick (){
  this.intervalId= setInterval(() => {
    this.currentTime++
  },1000)
 }

 /*getMinutes (){
   let minutes=;
 
    parseInt(minutes).toFixed(0)
    if(this.currentTime===0){
      return 0
    }
    if(this.currentTime % 60 ===0){
      return minutes ++
    }
    if(typeof(minutes) !='number'){
      return undefined
 }
}*/
 
}