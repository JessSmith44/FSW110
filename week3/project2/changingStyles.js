var headings = [
    "Good morning/afternoon/evening!", 
    "The holidays are coming", 
    "The cold is setting in", 
    "We don't have snow here yet", 
    "Its going to be a great season", 
];
var h2 = document.createElement("h2");

var learning = document.getElementById("headings"); 

for (var i = 0; i < headings.length; i++){
    var titles = document.createElement("h2");
    titles.textContent = headings[i];
    titles.style.color = "cornflowerblue";
    titles.style.fontFamily = "sans serif";
    titles.style.fontSize = "20px";
    h2.appendChild(titles);
}  

document.body.prepend(h2);
document.addEventListener('DOMContentLoaded', () => {
    headings("h2");
   });

   document.getElementById("border").classList.add("h2");

   function addClass() {
    const element = document.getElementById("id1");
    // passing multiple classes separated by comma
    element.classList.add("color", "border", "others");