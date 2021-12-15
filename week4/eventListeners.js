
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  });
c.strokeStyle = "white";
c.fillStyle = "black";
c.rect(100, 20, 200, 200);
c.stroke();
c.fill();

function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 
function green(){
  green.fillStyle = "green";
  green.target.style.color = "green";
  green.addEventListener("mouseover", green);
  return green;
  }
  
  function yellow(){
  yellow.fillStyle = "yellow";
  yellow.event.target.style.color = "yellow";
  yellow.addEventListener("click", yellow);
  return yellow;
  } 

  function blue(){
  blue.fillStyle = "blue";
  blue.event.target.style.color = "blue";
  blue.addEventListener("click", blue);
  return blue;
  }

  function red(){
    red.fillStyle = "red";
    red.event.target.style.color = "red";
    red.addEventListener("click", red);
    return red;
    }
    
    function purple(){
    purple.fillStyle = "purple";
    purple.event.target.style.color = "purple";
    purple.addEventListener("click", purple);
    return purple;
    }
    
