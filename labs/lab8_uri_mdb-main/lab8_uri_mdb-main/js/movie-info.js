/* TO DO:

    - Create an array to hold the title of your favorite movie, URL for movie poster, your rating, and synopsis.

    - Select the movie image element.
    - Set its link to the movie poster link from the array. 
    - Set its alt text to the movie title from the array.

    - Select the movie name element.
    - Set its text to the movie title from the array.

    - Select the movie description element.
    - Set its text to the movie synopsis from the array.

    - Select the movie rating element.
    - Create a variable that will hold the filled and empty stars. 
    - Loop to generate star symbols based on the rating:
        - If current counter is less than your rating, then add "★".
        - Otherwise, add "☆".
    - Set the movie rating element's text to display the generated stars. 

*/
var myMovie = ["Home Alone", "https://upload.wikimedia.org/wikipedia/en/7/76/Home_alone_poster.jpg", 5, "Left home alone during Christmas"];
var movieImage = document.querySelector(".movie-image");
movieImage.src = myMovie[1];
movieImage.alt = myMovie[0];
var movieName = document.querySelector(".movie-name");
movieName.textContent = myMovie[0];
var movieDescription = document.querySelector(".description");
movieDescription.textContent = myMovie[3];
var movieRating = document.querySelector(".rating");
var stars = "";
for(var i = 0; i < 5; i++){
    if(i < myMovie[2]){
        stars += "★";
    }
    else{
        stars += "☆";
    }
}
movieRating.textContent = stars;