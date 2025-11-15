   let hamburgerSymbol = document.getElementById("hamburgerSymbol");
    let smallScreenMenu = document.getElementById("smallScreenMenu");

function displayMenu() {
    if(smallScreenMenu.style.display === "block") {
        smallScreenMenu.style.display = "none";
    } else {
        smallScreenMenu.style.display = "block";
    }
}

hamburgerSymbol.addEventListener("click", displayMenu); 