let display = document.getElementById('output');
let codes = document.createElement("p");
display.append(codes);

window.addEventListener('keydown', function(e) {
    codes.innerText = e.key + ' ' + e.keyCode;
})
