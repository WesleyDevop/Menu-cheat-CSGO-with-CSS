
function openPage(features) {
    var i;
    var x = document.getElementsByClassName("option");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    
    document.getElementById(features).style.display = "block";
} 