//Loops

//Variable for grabbing the class name that will indicate the most popular laptop
var star_rating = document.getElementsByClassName("most-popular");

//Variable for storing the stars
var stars = "";
// For loop iterating 5 times representing the 5 star rating
// I chose the for loop because I knew the exact number of times I wanted to iterate
for (var i = 1; i <= 5; i++) {
    stars += "★";
}

//Appending the stars to the innerHTML along with added text of the most popular laptop
star_rating[0].innerHTML = "Most popular device<br>5 " + stars;

//Variable for grabbing the element and class name for the most popular laptop using querySelectorAll
var most_popular = document.querySelectorAll(".most-popular");

// Basic function with no parameters that returns nothing, to change the text color of the most popular laptop
function most_popular_color() {
    //While loop iterating through the most popular laptop text and stars and changing the color to yellow
    //I chose the while loop because the length the the most popular laptop is unknown, so while loop makes sense here
    var i = 0;
    while (i < most_popular.length) {
        most_popular[i].style.color = "yellow";
        i++;
    }
}

//Call the function most_popular_color
most_popular_color();


//Decisions

//Variable for grabbing the class name "price" representing the price of all the devices
var price = document.getElementsByClassName("price");

//For loop to iterate through each price element
for (var i = 0; i < price.length; i++) {
    //Get the text content of the price value shown in the HTML file
    var price_value = price[i].textContent;

    //If statement assigning the most expensive laptops and desktops a red text color
    if (price_value === "$1,300" || price_value === "$2,400" || price_value === "$3,599") {
        price[i].style.color = "red";
    }
    //Else if statement assigning the mid-range priced laptops and desktops an orange text color
    else if (price_value === "$899" || price_value === "$939" || price_value === "$770" || price_value === "$799" || price_value === "$974.61") {
        price[i].style.color = "orange";
    }
    //Else statement assigning the least expensive laptops and desktops a lightgreen text color
    else {
        price[i].style.color = "lightgreen";
    }
}

