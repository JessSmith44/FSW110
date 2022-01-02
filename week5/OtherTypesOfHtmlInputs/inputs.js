var form = document.getElementById("form");
var selectMenu = document.getElementById("options");

form.addEventListener("submit", function() {
    var checkbox = document.querySelectorAll('input[type = "checkbox"]:checked');
    var regular = document.querySelectorAll('input[type = "radio"]:checked').value;
    var stuffedAnimals = [];
    for (var i = 0; i < checkbox.length; i++) {
        stuffedAnimals.push(" " + checkbox[i].value);

    }
    alert(` 
    First Name: ${form.firstnamebox.value}
    Last Name: ${form.lastnamebox.value}
    Age: ${form.agebox.value}
    Have you shopped with us before: ${form.decision.value}
    How likely to reccomend: ${selectMenu.options[selectMenu.selectedIndex].value}
    Your choice of Stuffed Animals: ${stuffedAnimals}`);
});
