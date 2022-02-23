const loginForm = document.querySelector(".form");
const idForm = loginForm.querySelector("input");
const profileImg = document.querySelector(".profile-img");
const loginPage = document.querySelector(".login-form");
const userName = document.querySelector("span");
const loginButton =document.querySelector(".login-button");
const memoPage = document.querySelector(".memo-form")
const memoProfileImg = document.querySelector(".memo-profile-img")
const memoUserName = document.querySelector(".memo-user-name");
const img = [
    "0.jpeg",
    "1.png",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
];

function login(event){
event.preventDefault(); 
const username = idForm.value;
userName.innerText = `Hello! ${username}`;
memoUserName.innerText = username;
localStorage.setItem("user",username);
idForm.classList.add("hidden");
loginButton.classList.remove("hidden");

};

function addHidden(event) { 
    event.preventDefault();
    memoPage.classList.remove("hidden");
    memoPage.classList.add("flex");
    loginPage.classList.add("hidden");

  
};

const random = Math.floor(Math.random()*img.length);
profileImg.src = `img-profile/${img[random]}`;
memoProfileImg.src = `img-profile/${img[random]}`;

loginForm.addEventListener("submit",login);
loginButton.addEventListener("click",addHidden);

const checkLogin = localStorage.getItem("user");

if(checkLogin!==null){
    idForm.classList.add("hidden");
    loginButton.classList.remove("hidden");
    const savedUserName = localStorage.getItem("user");
    userName.innerText = `Hello! ${savedUserName}`;
    memoUserName.innerText = savedUserName;


}
