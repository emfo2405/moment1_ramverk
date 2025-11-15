/*hämtar in HTML-element */
let hamburgerSymbol = document.getElementById("hamburgerSymbol");
let smallScreenMenu = document.getElementById("smallScreenMenu");

/*Skapar funktion för att visa eller dölja menyn */
function displayMenu() {
    /*Om menyn visas ska den döljas och tvärtom, när funktionen körs */
    if (smallScreenMenu.style.display === "block") {
        smallScreenMenu.style.display = "none";
    } else {
        smallScreenMenu.style.display = "block";
    }
}

/*Sätter funktionen på en knapp som körs vid klick */
hamburgerSymbol.addEventListener("click", displayMenu); 