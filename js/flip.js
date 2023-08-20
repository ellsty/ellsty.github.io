
function flipdiv(divname) {
    if (document.getElementById(divname).classList.contains("flip") == true) {
        document.getElementById(divname).classList.remove("flip");
    }
    else {
        document.getElementById(divname).classList.add("flip");
    }
}