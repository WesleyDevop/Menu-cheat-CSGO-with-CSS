
function openPage(features) {
    var i;
    var x = document.getElementsByClassName("city");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    
    document.getElementById(features).style.display = "block";

} 