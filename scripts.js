let profileMenu = document.getElementById("profileMenu");
let profileMenuN = document.getElementById("profileMenuN");
let profileMenuA = document.getElementById("profileMenuA");
let spanhtml = document.getElementById("spanhtml");
let alljobsdv = document.getElementById("alljobsdv");
let alljobs = document.getElementById("alljobs");
let fullscreen = document.getElementById("fullscreen");

function toggleMenu(){
    profileMenu.classList.toggle("open-menu");
}

function toggleMenuN(){
    profileMenuN.classList.toggle("open-menu");
}

function toggleMenuA(){
    profileMenuA.classList.toggle("open-menu");
    if(profileMenuA.classList.contains("open-menu")){
        spanhtml.innerHTML = "See less";
    }
    else{
        spanhtml.innerHTML = "See more...";
    }
}

function toggleMenuJ(){
    alljobsdv.classList.toggle("open-menu");
    if(alljobsdv.classList.contains("open-menu")){
        alljobs.innerHTML = "Show less";
    }
    else{
        alljobs.innerHTML = "Show all";
    }
}

function toggledisplay(){
    fullscreen.classList.toggle("open-menu");
}

let sideActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMoreLink");

function toggleActivity(){
    sideActivity.classList.toggle("open-activity");
    if(sideActivity.classList.contains("open-activity")){
        moreLink.innerHTML = "show less <b>-</b>";
    }
    else{
        moreLink.innerHTML = "show more <b>+</b>";
    }
}


const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerHTML = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerHTML = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    let isValid = true;

    if(emailValue === "") {
        setError(email, "Email is required");
        isValid = false;
    } else if (!isValidEmail(emailValue)){
        setError(email, "Provide a valid email address");
        isValid = false;
    } else{
        setSuccess(email);
    }

    if(passwordValue === "") {
        setError(password, "Password is required");
        isValid = false;
    } else if(passwordValue.length < 10){
        setError(password, "Password must be at least 10 character.");
        isValid = false;
    } else{
        setSuccess(password);
    }

    if (isValid) {
        window.location.href = 'home.html';
    }
}
