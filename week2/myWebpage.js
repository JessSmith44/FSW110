var navBar = document.createElement("navBar");
    navBar.style.backgroundColor = "purple";
    navBar.style.float = "center";

var a1 = document.createElement("a");
    a1.setAttribute("href", "#home ");
    a1.textContent = " Home ";
    a1.style.color = "orange";

var a2 = document.createElement("a");
    a2.setAttribute("href", " #collection ");
    a2.textContent = " Collection ";
    a2.style.color = "gold";
    
var a3 = document.createElement("a");
    a3.setAttribute("href", " #contact ");
    a3.textContent = " Profile";
    a3.style.color = "lightblue";

    function styleNavItems(...args){
        for (a of args){
            a.style.padding = "50px";
            a.style.fontSize = "20px"
        }
    }
    styleNavItems(a1, a2, a3);
    navBar.append(a1, a2, a3);
    document.body.appendChild(navBar);

var h1 = document.createElement("h1");
    h1.textContent = "Welcome to my webpage";
    document.body.appendChild(h1);

var p = document.createElement("p");
    p.textContent = "We are learning to build web pages! Welcome to the Fullstack Web Developement!";
    document.body.appendChild(p);

var p1 = document.createElement("p1");
    p1.textContent = "Here we will learn:";
    document.body.appendChild(p1);

var ul = document.createElement("ul");

var item1 = document.createElement("li");
    item1.textContent = "Javascript";
    ul.appendChild(item1);

var item2 = document.createElement("li");
    item2.textContent = "Html";
    ul.appendChild(item2);

var item3 = document.createElement("li");
    item3.textContent = "DOM";
    ul.appendChild(item3);

var item4 = document.createElement("li");
    item4.textContent = "CSS";
    ul.appendChild(item4);

var item5 = document.createElement("li");
    item5.textContent = "Linux";
    ul.appendChild(item5);
    ul.append(item1, item2, item3, item4, item5);
    document.body.appendChild(ul);
    document.body.appendChild(ul);

var footerElement = document.createElement("footer");
var p3 = document.createElement("p");
    p3.innerHTML = "For support/help please contact the content creator, Jess! Have a nice day!";
    footerElement.appendChild(p3);
    document.body.appendChild(footerElement);
