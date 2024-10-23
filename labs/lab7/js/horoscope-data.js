var zodiac = 'Cancer';
var birth_month = 'July';
var birth_day = 3;
var lucky_num = 15.0;
var description = 'Emotional, intuitive, and psychic'
var believe = false;

var elSign = document.getElementById('sign');
elSign.textContent = zodiac;

var elBirthday = document.getElementsByClassName('birthday');
elBirthday[0].textContent += birth_month + ' ' + birth_day + 'rd';

var elLuckyNum = document.getElementsByClassName('luckyNum');
elLuckyNum[0].textContent += lucky_num;


var mood_rating = 4.5;
var diego_mood = 3.5;
var mark_mood = 2.5;
var average_mood = (mood_rating + diego_mood + mark_mood) / 3;
var elMood = document.getElementsByTagName('p');
elMood[2].textContent = "Today's mood rating for Cancer: "+ mood_rating + "out of 5. The average mood rating of Cancer, Scorpio, and Virgo is: "+ average_mood + "out of 5.";

var zodiacs = ['Cancer', 'Scorpio', 'Virgo'];
var cancer_sign = zodiacs[0];
var scorpio_sign = zodiacs[1];
var virgo_sign = zodiacs[2];
var descriptions = ['Emotional, intuitive, and psychic', 'Description', 'No desciption'];
var cancer_description = descriptions[0];
var scorpio_description = descriptions[1];
var virgo_description = descriptions[2];
var elDesciption = document.getElementsByTagName('p');
elDesciption[3].textContent ="Cancer Horoscope: " + cancer_description + "Scorpio Horoscope: " + scorpio_description + "Virgo Horoscope: " + virgo_description;



