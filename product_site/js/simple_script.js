//Getting an element by id
//Variable that stores laptop brands as a string
var brands = "Apple, Asus, Samsung";

//Get the id in my customer_tech_support.html file and store it in variable laptop_brands
var laptop_brands = document.getElementById("laptop-brands");

//Set the text content of the laptop_brands to the brands variable
laptop_brands.textContent = brands;


//Getting an element by class name
//Variable that stores the lower end price for smartphone (integer)
var smartphone_start_price = 200;
//Variable that stores the higher end price for smartphone (integer)
var smartphone_end_price = 400;

//Get the class name in my customer_tech_support.html file and store it in variable smartphone_price
var smartphone_price = document.getElementsByClassName("smartphone-price");

//Set the text content of the smartphone_price to the smartphone_start_price and smartphone_end_price variable
smartphone_price[0].textContent = "$" + smartphone_start_price + " - " + "$" + smartphone_end_price;


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
//Variable that stores the initial stock quantity of a device
var initial_stock_quantity = 50;
//Variable that stores the number of devices already sold, alerting users that we are low on stock
var devices_sold = 30;
//Variable that stores the number of devices that are left in stock
var stock_left = initial_stock_quantity - devices_sold;

//Get the id in my customer_tech_support.html file and store it in variable elStock
var elStock = document.getElementById('low-stock-notice');
//Use innerHTML to add a message to the elStock variable that alerts users of the low stock quantity for Amazon Fire tablets
elStock.innerHTML = '<strong> Important Notice! </strong>Only ' + stock_left + ' Amazon Fire tablets left in stock!';



