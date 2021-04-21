const links = [
  { label: "Week 1", url: "index.html"}
];

function dynamicLinks() {
  for (i = 0; i < links.length; i++) {
        
    var li = document.createElement("li");
    var a = document.createElement("a");

    var text = document.createTextNode(links[i].label);
    
    a.appendChild(text);

    a.title = links[i].label;
    a.href = links[i].url;
    
    li.appendChild(a);
    document.getElementById("oList").appendChild(li);
  
  }

 
}


