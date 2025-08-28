let myform = document.getElementById('myform')
let phone = document.getElementById('phone')
let username = document.getElementById('username')
let errorBox = document.getElementById('error')


myform.addEventListener('submit',function name(e) {
    e.preventDefault()

    let phone_value = phone.value
    let username_value = username.value

    let password = document.getElementById('password').value
    let repeated_password = document.getElementById('repeat').value


    let usernameregex = /^[a-zA-Z_]+$/;
    let phoneregex = /^09\d{9}$/;


    
    if (!password===repeated_password){
        errorBox.textContent = 'your password isnt same'
        errorBox.style.display = 'block'
    }
    else if (!usernameregex.test(username_value)){
        // alert('user name is wrong')
        errorBox.textContent = 'your user name is not valid'
        errorBox.style.display = 'block'
    }

    else if (!phoneregex.test(phone_value)){
        // alert('user name is wrong')
        errorBox.textContent = 'your phone is not valid'
        errorBox.style.display = 'block'
    }
    
















})