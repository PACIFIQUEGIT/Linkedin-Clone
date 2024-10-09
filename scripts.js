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