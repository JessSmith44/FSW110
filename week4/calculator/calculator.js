
var container = document.createElement("fieldset");

var tabletop = document.createElement("table");
    container.appendChild(tabletop);

var row1 = document.createElement("tr");
    tabletop.appendChild(row1);
var firstdata = document.createElement("td");
    firstdata.textContent = "Number1:";
var firstnum = document.createElement("input");
    firstnum.setAttribute("type", "text");
    firstdata.appendChild(firstnum);
    firstdata.setAttribute("id", "num1");
     row1.appendChild(firstdata);

var row2 = document.createElement("tr");
     tabletop.appendChild(row2);
var seconddata = document.createElement("td");
    seconddata.textContent = "Number2:";
var secondnum = document.createElement("input");
    secondnum.setAttribute("type", "text");
    seconddata.appendChild(secondnum);
    seconddata.setAttribute("id", "num2");
      row2.appendChild(seconddata);

var row3 = document.createElement("tr");
      tabletop.appendChild(row3);
var lastdata = document.createElement("td");
    lastdata.textContent = "Result:";
var resbox = document.createElement("input");
    resbox.setAttribute("type", "text");
    lastdata.appendChild(resbox);
    lastdata.setAttribute("id", "res");
       row3.appendChild(lastdata);


var tablebottom = document.createElement("table");
       container.appendChild(tablebottom);
   
   var line1 = document.createElement("tr");
       tabletop.appendChild(line1);
   var firstdata = document.createElement("td");
        line1.appendChild(firstdata)
   var btnadd = document.createElement("button"); 
        btnadd.innerHTML = "+";
        firstdata.appendChild(btnadd);
   
    var line2 = document.createElement("tr");
        tabletop.appendChild(line2);
    var secdata = document.createElement("td");
        line2.appendChild(secdata)
    var btnsub = document.createElement("button"); 
         btnsub.textContent = "-";
         secdata.appendChild(btnsub);

    var line3 = document.createElement("tr");
       tabletop.appendChild(line3);
   var trddata = document.createElement("td");
        line3.appendChild(trddata)
   var btnmul = document.createElement("button"); 
        btnmul.textContent = "*";
        trddata.appendChild(btnmul);

    var line4 = document.createElement("tr");
       tabletop.appendChild(line4);
   var frthdata = document.createElement("td");
        line4.appendChild(frthdata)
   var btndiv = document.createElement("button"); 
        btndiv.innerHTML = "/";
        frthdata.appendChild(btndiv);

 document.body.append(container);


 operation = (o) => {
    let res = document.getElementById('res');
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    res.value = calculate(num1, num2, o);
  }
  
  calculate = (x, y, o) => {
    if(o == '+') {
      return x + y;
    }
    if(o == '-') {
      return x - y;
    }
    if(o == '*') {
      return x * y;
    }
    if(o == '/') {
      return x / y;
    }
    if(o == '%') {
      return x % y;
    }
  }

  document.body.backgroundColor = "light blue";