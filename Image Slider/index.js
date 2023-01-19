const images = [
  'image-0.jpg',
  'image-1.jpg',
  'image-2.jpg',
  'image-3.jpg',
  'image-4.jpg']
const container = document.querySelector('.container')
const Buttons = document.querySelectorAll('.button')

let curentSlid = 0
const slider = (side) => {
  if (side === 'left') {
    curentSlid--
    if (curentSlid < 0) curentSlid = images.length - 1
  } else {
    curentSlid++
    if (curentSlid > images.length - 1) curentSlid = 0
  }
  container.style.backgroundImage = `url("./images/${images[curentSlid]}")`
}
Buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-caret-square-o-left')) {
      slider('left')
    } else {
      slider('right')
    }
  })
})