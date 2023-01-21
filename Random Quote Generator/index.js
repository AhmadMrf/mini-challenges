import quotes from './quotes.js'

const btn = document.querySelector('#generate-btn')
const quoteContent = document.querySelector('#quote-content')
const quoteAuthor = document.querySelector('.author-quote')
let quoteIndex = 0
const createQuote = () => {
  let newIndex = Math.floor(Math.random() * quotes.length)
  if (quoteIndex === newIndex) newIndex++
  quoteIndex = newIndex
  quoteContent.textContent = quotes[quoteIndex].quote
  quoteAuthor.textContent = quotes[quoteIndex].author
}
createQuote()
btn.addEventListener('click', createQuote)