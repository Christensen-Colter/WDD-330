// This function pulls values from the html doc, passes them to the addition function, and displays them back to the html doc.
function add_display() {

    //pull values from input on html.
    var x = document.getElementById("input_one").value;
    var y = document.getElementById("input_two").value;

    //Converts values to integers.
    var real_x = parseInt(x);
    var real_y = parseInt(y);

    //Sends value from function back to html page.
    document.getElementById("div_one").innerHTML = addition(real_x, real_y);
}

// Adds two parameters and returns the total.
const addition = (x, y) => x + y;

// Pulls the input from HTML page, passes them to the subtraction function, and displays them back to the HTML.
function sub_display() {

    //Pulls the value from HTML.
    var x = document.getElementById("input_one").value;
    var y = document.getElementById("input_two").value;

    //Converts values into integers.
    var real_x = parseInt(x);
    var real_y = parseInt(y);

    //Sends returned value from function back to HTML.
    document.getElementById("div_one").innerHTML = subtraction(real_x, real_y);
}

// Performs subtraction on the two parameters and returns the total.
const subtraction = function sub_function(x, y) {
    var total = x - y;
    return total;
}