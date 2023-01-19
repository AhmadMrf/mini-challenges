const textarea = document.querySelector('#textarea')
const count = document.querySelector('.counter')
const counter = (e)=>{
  console.log(textarea.value);
  const textLength = e.target.value.length
  count.textContent = textLength
}

textarea.addEventListener('input',counter)