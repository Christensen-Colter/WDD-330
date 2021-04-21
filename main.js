const links = [
    "Week1 notes",
    "week1/index.html",
    "Week2 notes",
    "week2/index.html"
]

function createLink(value) {
  var x = document.createElement("li")
  var t = document.createTextNode(value);
  x.appendChild(t);
  document.getElementById("demo").apendChild(x);
}

function dynamicLinks() {
  for (i = 0; i < links.length; i++) {
    //document.getElementById("demo").innerHTML = links[i];
    document.createElement("li") = links[i];
    //var t = document.createTextNode(links[i]);
    //x.appendChild(t);
    //document.getElementById("demo").apendChild(x);
    //createLink(links[i]);
  }

 
}


