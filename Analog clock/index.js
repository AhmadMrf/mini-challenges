const hr = document.querySelector('.hr')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')

const tick = ()=>{
  const now = new Date()
  const second = now.getSeconds()
  const minutes = now.getMinutes()
  const hours = now.getHours()
  hr.style = `transform:rotateZ(${(hours*30+ minutes/2)}deg)`
  min.style = `transform:rotateZ(${(minutes*6+ second/10)}deg)`
  sec.style = `transform:rotateZ(${second*6}deg)`
}
setInterval(tick,1000)