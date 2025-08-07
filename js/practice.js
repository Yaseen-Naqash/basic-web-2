let left_button = document.getElementById('left');
let right_button = document.getElementById('right');
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');



left_button.addEventListener('click',function name(params) {
    image1.style.left = "-600px"
    image2.style.left = "50%"
})

right_button.addEventListener('click', function name(params) {
    image1.style.left = "50%"
    image2.style.left = "900px"
})


let flag = true

function switchImages(){

    console.log('hello')

    if (flag){
        image1.style.left = "-600px"
        image2.style.left = "50%"
        flag = false
    }
    else{
        image1.style.left = "50%"
        image2.style.left = "900px"
        flag = true
    }


}
setInterval(switchImages,5000)



