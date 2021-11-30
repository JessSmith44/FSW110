
     var h1 = document.createElement("h1");
        h1.textContent = "Welcome to my JS site";

    var p = document.createElement("p");
        p.textContent = "All of this was created with Javascript!";

    var ol = document.createElement("ol");

    var item1 = document.createElement("li");
        item1.textContent = "select";
        ol.appendChild(item1);

    var item2 = document.createElement("li");
        item2.textContent = "create";
        ol.appendChild(item2);

    var item3 = document.createElement("li");
        item3.textContent = "append";
        ol.appendChild(item3);

    document.body.append(h1, p, ol);