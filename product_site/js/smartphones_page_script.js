//Variable for grabbing the class name "price" representing the price of all the devices
var price = document.getElementsByClassName("price");

//For loop to iterate through each price element
for (var i = 0; i < price.length; i++) {
    //Get the text content of the price value shown in the HTML file
    var price_value = price[i].textContent;

    //If statement assigning the most expensive smartphones and tablets a red text color
    if (price_value === "$1,300" || price_value === "$2,400" || price_value === "$3,599") {
        price[i].style.color = "red";
    }
    //Else if statement assigning the mid-range priced smartphones and tablets an orange text color
    else if (price_value === "$899" || price_value === "$939" || price_value === "$770" || price_value === "$799" || price_value === "$974.61") {
        price[i].style.color = "orange";
    }
    //Else statement assigning the least expensive laptops and desktops a lightgreen text color
    else {
        price[i].style.color = "lightgreen";
    }
}