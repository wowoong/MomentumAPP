const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');
const goodDay = document.querySelector('#good');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${username}.`;
}
loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}