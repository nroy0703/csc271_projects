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
form_style.style.backgroundColor = "apricot";
form_style.style.color = "white";

//Using arithmetic operators to calculate the stock quantity of a certain device

//Function that takes in two parameters, the starting number stock and the number of devices sold, and subtracts the two numbers to reveal a message alerting the user of the low stock quantity
function stock_message(initial_stock_quantity, devices_sold) {
    //Using arithmetic operators to calculate the stock quantity of a certain device
    //Variable that stores the number of devices that are left in stock
    var stock_left = initial_stock_quantity - devices_sold;

    //Get the id in my customer_tech_support.html file and store it in variable elStock
    var elStock = document.getElementById('low-stock-notice');
    //Use innerHTML to add a message to the elStock variable that alerts users of the low stock quantity for Amazon Fire tablets
    elStock.innerHTML = 'Only ' + stock_left + ' Amazon Fire tablets left in stock!';
}

//Variable that stores a boolean value that determines whether the message is displayed or not
var isMessageDisplayed = false;
//Add an event listener to the button with id 'low-stock-notice' to call the function stock_message when the button is clicked
document.getElementById('low-stock-notice').addEventListener('click', function() {
   
    //Variable message to get the id again in order to change the message
    var message = document.getElementById('low-stock-notice');
    //When the button is clicked initally, the message in the stcok_message function is displayed
    if(isMessageDisplayed === false){
        stock_message(50, 30);
        isMessageDisplayed = true;
    }
    //Once the user clicks the button again, the message goes back to the original message
    else{
        message.innerHTML = '<strong>Important Notice! Click here</strong>';
        isMessageDisplayed = false;
    }
});

//Form Validation

//Get the form class in my customer_tech_support.html file and store it in variable getForm
var getForm = document.querySelector('.form');
var optionalInput = document.querySelector('.text-area');
optionalInput.addEventListener('focus', function() {
    getMessage = document.querySelector('#optional');
    getMessage.textContent = 'Feel free to enter any additional information in the above text area.(Optional)';
    getMessage.style.color = 'black';
});
optionalInput.addEventListener('blur', function() {
    getMessage = document.querySelector('#optional');
    getMessage.textContent = '';
});
//Add an event listener to the form to call the function when the form is submitted
getForm.addEventListener('submit', function(event) {
    //Get the device input class in customer_tech_support.html and store it in a variable
    var deviceTypeSelected = document.querySelector('input[class="device"]:checked');
    //Get the price input class in customer_tech_support.html and store it in a variable
    var priceRangeSelected = document.querySelector('input[class="range"]:checked');
    //Get the use case input class in customer_tech_support.html and store it in a variable
    var useCaseSelected = document.querySelectorAll('input[class="use-case"]:checked');
    //Get the message id in customer_tech_support.html and store it in variable errorMessage, that will be used to display the error message
    var errorMessage = document.querySelector('#message');

    //Set the text content of the errorMessage to an empty string
    errorMessage.textContent = '';
    
    //If statement that checks if the deviceTypeSelected, priceRangeSelected, and useCaseSelected are not selected, then display an error message
    if (!deviceTypeSelected || !priceRangeSelected || useCaseSelected.length === 0) {
        event.preventDefault();
        errorMessage.textContent = 'Submission Unsuccessful. Please select a device, price range, and at least one purpose.';
        errorMessage.style.color = 'red';
    //Else statement that alerts the user that the form was submitted successfully
    } else {
        event.preventDefault();
        errorMessage.textContent = '';
        alert('Form submitted successfully!');
    }
});

//Objects (Constructor Notation)

//Object that stores the device, brands, and price range of devices (laptops, desktops, tablets)
function Device(device, brands, startPrice, endPrice){
    this.device = device;
    this.brands = brands;
    this.startPrice = startPrice;
    this.endPrice = endPrice;
    //Method that displays the discount of the device
    this.displayDiscount = function(){
        return "Get 10% off on all " + this.device + "!";
    };
}

//Object that stores the device, brands, and price range of smartphones
function Smartphone(device, brands, priceRange){
    this.device = device;
    this.brands = brands;
    this.priceRange = priceRange;
}

//Create a new object for laptops
var laptops = new Device("Laptops", "Gigabyte", 300, 700);
//Create a new object for desktops
var desktops = new Device("Desktops", "Alienware, Acer, Dell, Apple", 400, 3000);
//Create a new object for tablets
var tablets = new Device("Tablets", "Android, Amazon, Apple, Google", 200, 400);
//Create a new object for smartphones
var smartphones = new Smartphone("Smartphones", "Apple, Samsung", "Differs based on carrier");

//Get the id in my customer_tech_support.html file and store it in variable laptopName
var laptopName = document.querySelector('#laptop-name');

//Set the text content of the laptopName to the laptops device
laptopName.textContent = laptops.device;

//Get the id in my customer_tech_support.html file and store it in variable laptopBrands
var laptopBrands = document.querySelector('#laptop-brands');

//Set the text content of the laptopBrands to the laptops brands
laptopBrands.innerHTML += ", " + laptops.brands;

//Get the id in my customer_tech_support.html file and store it in variable laptopPrice
var laptopPrice = document.querySelector('#laptop-price');

//Set the text content of the laptopPrice to the laptops price range
laptopPrice.innerHTML += "$" + laptops.startPrice + " - " + "$" + laptops.endPrice;

//Get the id in my customer_tech_support.html file and store it in variable desktopName
var desktopName = document.querySelector('#desktop-name');

//Set the text content of the desktopName to the desktops device
desktopName.textContent = desktops.device;

//Get the id in my customer_tech_support.html file and store it in variable desktopBrands
var desktopBrands = document.querySelector('#desktop-brands');

//Set the text content of the desktopBrands to the desktops brands
desktopBrands.textContent = desktops.brands;

//Get the id in my customer_tech_support.html file and store it in variable desktopPrice
var desktopPrice = document.querySelector('#desktop-price');

//Set the text content of the desktopPrice to the desktops price range
desktopPrice.innerHTML += "$" + desktops.startPrice + " - " + desktops.endPrice;

//Get the id in my customer_tech_support.html file and store it in variable tabletName
var tabletName = document.querySelector('#tablet-name');

//Set the text content of the tabletName to the tablets device
tabletName.textContent = tablets.device;

//Get the id in my customer_tech_support.html file and store it in variable tabletBrands
var tabletBrands = document.querySelector('#tablet-brands');

//Set the text content of the tabletBrands to the tablets brands
tabletBrands.textContent = tablets.brands;

//Get the class in my customer_tech_support.html file and store it in variable tabletPrice
var tabletPrice = document.querySelector('.smartphone-price');

//Set the text content of the tabletPrice to the tablets price range
tabletPrice.innerHTML = "$" + tablets.startPrice + " - " + "$" + tablets.endPrice;

//Get the id in my customer_tech_support.html file and store it in variable smartphoneName
var smartphoneName = document.querySelector('#smartphone-name');

//Set the text content of the smartphoneName to the smartphones device
smartphoneName.textContent = smartphones.device;

//Get the id in my customer_tech_support.html file and store it in variable smartphoneBrand
var smartphoneBrand = document.querySelector('#smartphone-brand');

//Set the text content of the smartphoneBrand to the smartphones brands
smartphoneBrand.textContent = smartphones.brands;

//Get the id in my customer_tech_support.html file and store it in variable smartphonePrices
var smartphonePrices = document.querySelector('#smartphone-prices');

//Set the text content of the smartphonePrices to the smartphones price range
smartphonePrices.textContent = smartphones.priceRange;

//Get the id in my customer_tech_support.html file and store it in variable discount
var discount = document.querySelector('#discount');

//Set the text content of the discount to the laptops displayDiscount method
discount.innerHTML = "<strong>" + laptops.displayDiscount() + "</strong>";