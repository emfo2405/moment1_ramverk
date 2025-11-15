/*Hämtar element från HTML-filen, menyknapp och meny för små skärmar */
let menuSymbol = document.getElementById("menuSymbol");
let smallMenu = document.getElementById("smallMenu");

/*Skapar en funktion för att visa eller dölja menyn */
function hamburgerMenu() {
    /*Funktionen ska ändra mellan ursprungsläge och hidden */
    smallMenu.classList.toggle("hidden");
}

/*Funktionen kopplas till en knapp och används vid klick */
menuSymbol.addEventListener("click", hamburgerMenu);






