//Getting an element by id
//Variable that stores laptop brands as a string
var brands = "Apple, Asus, Samsung";

//Get the id in my customer_tech_support.html file and store it in variable laptop_brands
var laptop_brands = document.getElementById("laptop-brands");

//Set the text content of the laptop_brands to the brands variable
laptop_brands.textContent = brands;

//Function that takes in two parameters, starting price and ending price range and displays the price range of smartphones
function display_price_range(smartphone_start_price, smartphone_end_price) {
    
    //Get the class name in my customer_tech_support.html file and store it in variable smartphone_price
    var smartphone_price = document.getElementsByClassName("smartphone-price");

    //Set the text content of the smartphone_price to the smartphone_start_price and smartphone_end_price variable
    smartphone_price[0].textContent = "$" + smartphone_start_price + " - " + "$" + smartphone_end_price;

}
//Call the function display_price_range with the values 200 and 400
display_price_range(200, 400);

//Getting an element by tag name
//Variable that stores string text related to the description of the page
var added_page_description = " We have a wide range of products to suit your needs. From laptops to smartphones, we have it all!";
//Get the paragraph tag name in my customer_tech_support.html file and store it in variable full_page_description
var full_page_description = document.getElementsByTagName("p");

//Use innerHTML to add the added_page_description to the full_page_description while also adding markup
full_page_description[0].innerHTML += "<em>" + added_page_description + "</em>";


//Getting the form-div element by querySelector
var form_style = document.querySelector(".form-div");

//Use querySelector variable to change the background color and text color of the content in the form-div
form_style.style.backgroundColor = "darkgreen";
form_style.style.color = "white";

//Using arithmetic operators to calculate the stock quantity of a certain device

//Function that takes in two parameters, the starting number stock and the number of devices sold, and subracts the two numbers to reveal a message alerting the user of the low stock quantity
function stock_message(initial_stock_quantity, devices_sold) {
    //Using arithmetic operators to calculate the stock quantity of a certain device
    //Variable that stores the number of devices that are left in stock
    var stock_left = initial_stock_quantity - devices_sold;

    //Get the id in my customer_tech_support.html file and store it in variable elStock
    var elStock = document.getElementById('low-stock-notice');
    //Use innerHTML to add a message to the elStock variable that alerts users of the low stock quantity for Amazon Fire tablets
    elStock.innerHTML = '<strong> Important Notice! </strong>Only ' + stock_left + ' Amazon Fire tablets left in stock!';
}

//Call the function stock_message with the values 50 and 30
stock_message(50, 30);
