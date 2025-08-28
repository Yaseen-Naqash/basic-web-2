

// // const stringvalue = JSON.stringify(parsedsomething)
// // localStorage.setItem('key', stringvalue)

// // let something = localStorage.getItem("key");
// // const parsedsomething = JSON.parse(something);

// // localStorage.removeItem("key");
// // localStorage.clear();

// let flag = false
// let credit = 15000

// let fruits = ['bannana', 'apple', 'pinapple']
// // let stringifidFruits = "['bannana', 'apple', 'pinapple']"

// let stringified = JSON.stringify(fruits)
// localStorage.setItem('myVariable',stringified)



// // ------------------------------------------------------------------

// let users = JSON.parse(localStorage.getItem('users')) || []

// let myform2 = document.getElementById('myform')
// myform2.addEventListener('submit',function name(params) {
//     let phone = document.getElementById('phone').value
//     let username = document.getElementById('username').value

//     let user = {
//         object_username : username,
//         object_phone : phone,
//     }
//     users.push(user)
    
//     localStorage.setItem('users',JSON.stringify(users))
//     renderUsers()

// })

// document.addEventListener('DOMContentLoaded',function name(params) {
//     renderUsers()

// })


// function renderUsers(){
//     let user_holder = document.getElementById('userHolder')
    

//     user_holder.innerHTML = ''
//     users.forEach(user => {
//         let user_div = document.createElement('div')
//         user_div.className = 'something'

//         user_div.innerHTML = `<h3>${user.object_username}</h3><p>${user.object_phone}</p><hr></hr>`;
//         user_holder.appendChild(user_div)
//     })

// }

// SAMPLE


  let something = new Date()

  let mytime = something.toLocaleDateString()
  
  console.log(mytime)

// ==== CLOCK ====
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById('clock').textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock(); // Initial call

// ==== TO-DO LIST ====
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

function loadTodos() {
  const todosString = localStorage.getItem('todos');
  const todos =  JSON.parse(todosString) || [];

  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo;

    let a = localStorage.getItem('theme')
    let isDark;
    if (a === 'dark'){
      isDark = true;
    }
    else{
      isDark = false;
    }

      if (isDark === true){
        li.style.backgroundColor = '#444';
        li.style.color = '#ffffff'
      }
      else {
        li.style.backgroundColor = '#ffffff';
        li.style.color = '#black'

      }

    li.onclick = function () {
      removeTodo(index);
    };
    todoList.appendChild(li);
  });
}

function addTodo() {
  const value = todoInput.value.trim();
  if (value !== '') {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(value);
    localStorage.setItem('todos', JSON.stringify(todos));
    todoInput.value = '';
    loadTodos();
  }
}

function removeTodo(index) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
  loadTodos();
}

addTodoBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') addTodo();
});
loadTodos();

// ==== THEME TOGGLE ====
const themeToggle = document.getElementById('themeToggle');
function toggleTheme() {
  document.body.classList.toggle('dark');

  const isDark = document.body.classList.contains('dark');

  // console.log(isDark)
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  loadTodos()




}
themeToggle.addEventListener('click', toggleTheme);

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

// ==== FORM VALIDATION ====
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  if (!name || !email) {
    formMessage.textContent = 'Please fill in all fields.';
    formMessage.style.color = 'red';
  } else if (!validateEmail(email)) {
    formMessage.textContent = 'Please enter a valid email.';
    formMessage.style.color = 'red';
  } else {
    formMessage.textContent = `Thanks for contacting us, ${name}!`;
    formMessage.style.color = 'green';
    contactForm.reset();
  }
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ==== RANDOM QUOTE FETCH ====
const loadQuoteBtn = document.getElementById('loadQuote');
const quoteBlock = document.getElementById('quote');

loadQuoteBtn.addEventListener('click', async () => {
  quoteBlock.textContent = 'Loading...';
  try {
    const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
      headers: {
        'X-Api-Key': 'pZRsZe3lt3P6rzK4AkJGlQ==wUc8J7RMpWIFv6Wj'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    // Assuming the API returns an array, get the first quote object
    const quote = data[0];
    quoteBlock.textContent = `"${quote.quote}" — ${quote.author}`;
  } catch (err) {
    console.error('Error fetching quote:', err);
    quoteBlock.textContent = 'Failed to fetch quote.';
  }
});

// ==== MODAL POPUP ====
const modal = document.getElementById('myModal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');

openModal.onclick = () => {
  modal.style.display = 'block';
};

closeModal.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};





