// 1- change styles
// 2- change class names 
// 3- localStorage

let myTitle = document.getElementById('12')

// myTitle.innerText // raw text inside the element
// myTitle.innerHTML // all html codes inside the elements
// myTitle.style.backgroundColor = 'red' // target styles of that element and changes it
// myTitle.value // if its input, return value of that user entered into that input

function changeColor(){
    myTitle.classList.toggle('open')
}

let input = document.getElementById('myInput')
console.log(input.value)




let myCustomButton = document.getElementById('myCustomButton')

myCustomButton.addEventListener("click", changeColor)

input.addEventListener("keyup", function name(params) {
    myTitle.innerText = input.value;
})