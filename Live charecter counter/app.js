// selecting textarea and counter and assigning them
const textarea = document.querySelector('textarea');
const counter = document.querySelector('.counter');

// making a function to count the characters typed in
function countingCharacter() {
    const textLength = textarea.value.length;
    counter.innerText = `${textLength}`;
}
