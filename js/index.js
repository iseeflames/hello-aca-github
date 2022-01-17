let clicked = false;

function toggleButtonOnClick(){
    let hiddenElement = document.getElementById("demo");

    if (hiddenElement.style.display === "none") {

        hiddenElement.style.display = "block";

     } else {

        hiddenElement.style.display = "none";
        
    }
}