// List of links for each week with a key value pair.
const links = [
  { label: "Week 1", url: "Week 1/index.html"},
  { label: "Week 2", url: "Week 2/mathmachine.html"},
  { label: "Week 3", url: "Week 3/START.html"},
  { label: "Week 4", url: ""}
];

// Function called when page loads to display a dynamic list of links.
function dynamicLinks() {

  // A for loop counting through each item in our array.
  for (i = 0; i < links.length; i++) {
    
    // Creating two different elements to work with.
    var li = document.createElement("li");
    var a = document.createElement("a");

    // Creating a node for our elements to exist.
    var text = document.createTextNode(links[i].label);
    a.appendChild(text);

    // Adding details to our link element
    a.title = links[i].label;
    a.href = links[i].url;
    
    // Add our link element to our list element
    li.appendChild(a);

    // Add our list element to the ordered list element by Id.
    document.getElementById("oList").appendChild(li);
  }
}


