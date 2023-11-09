const signInBtn = document.querySelector('.signin-btn');
const signUpBtn = document.querySelector('.signup-btn');
const formBox = document.querySelector('.form-box');
const body = document.body;

signUpBtn.addEventListener('click', function() {
    formBox.classList.add('active');
    body.classList.add('active');
});

signInBtn.addEventListener('click', function() {
    formBox.classList.remove('active');
    body.classList.remove('active');
});

let name = document.querySelector('#name');
let login  = document.querySelector('#login');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');

let users = {}; 

function User(name, login, password) {
    this.name = nema;
    this.login = login;
    this.password = password;
}

function createId(users) {
    return Object.keys(users).length;
}

submit.addEventListener('click', () => {
    const nameUser = name.value;
    const loginUser = login.value;
    const passwordUser = password.value;

    const user = new User(nameUser, loginUser, passwordUser )

    const userId = 'User' + createId(users);
    users[userId] = user;

    console.log(users);

    alert(`${nameUser}, вы успешно прошли регистрацию!`);
})