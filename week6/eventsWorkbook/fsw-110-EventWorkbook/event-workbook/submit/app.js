var firstName = document.getElementById("name");

var form = document.getElementById("submit-me");

var nameTag = form.elements["name"];
document.getElementById("name").placeholder = "Type name here..";

var ageTag = form.elements["age"];
document.getElementById("age").placeholder = "Type age here..";

form.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Name: " + nameTag.value + "\n" + " Age: " + ageTag.value);
})