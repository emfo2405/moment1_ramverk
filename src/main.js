    let menuSymbol = document.getElementById("menuSymbol");
    let smallMenu = document.getElementById("smallMenu");

function hamburgerMenu() {
    smallMenu.classList.toggle("hidden");
}

menuSymbol.addEventListener("click", hamburgerMenu);

/*    let menuSymbol = document.getElementById("menuSymbol");
    let smallMenu = document.getElementById("smallMenu");

function hamburgerMenu() {
    if(smallMenu.style.display === "block") {
        smallMenu.style.display = "none";
    } else {
        smallMenu.style.display = "block";
    }
}

menuSymbol.addEventListener("click", hamburgerMenu); */




