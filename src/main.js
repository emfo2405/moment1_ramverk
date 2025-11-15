    let menuSymbol = document.getElementById("menuSymbol");


function hamburgerMenu() {
    if(menuSymbol.style.display === "block") {
        menuSymbol.style.display = "none";
    } else {
        menuSymbol.style.display = "block";
    }
}

menuSymbol.addEventListener("onclick", hamburgerMenu);

