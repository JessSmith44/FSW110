var myform = document.getElementById("form");
var names = document.getElementById("namebox");
var favcolor = document.getElementById("favcolor");
var favfood = document.getElementById("favfood");

myform.addEventListener("submit", function(){
    alert(`
    Name: ${names.value}
    favcolor: ${favcolor.value}
    favfood: ${favfood.value} `);
})