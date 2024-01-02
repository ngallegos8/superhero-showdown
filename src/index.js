/*
HTML snippet:
<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="style.css">
    <script src="key.js" type="module"></script>
    <script src="index.js" type="module"></script>

    <title>Superhero Showdown</title>
</head>
<body>
    <div id="top">
        <h1>Superhero Showdown</h1>
    </div>
    <hr/>

    <nav id="hero-list">
    <!-- javascript make function to select this nav by id and forEach(hero) 1. create a new image element, 2. select hero image from API, 3. append to this nav, 4. add event listener for mouseover and 5. add event listener for click to select-->  
    </nav>
    
    <div id="hero-info">
        <img id="hero-a-image" src="" />
        <div>
            <h2 id="hero-a-name">Name1</h2>
        </div>
        <img id="hero-b-image" src="" />
        <div>
            <h2 id="hero-b-name">Name2</h2>
        </div>
    </div>

    <div>
        <button id="fight">Fight!</button>
    </div>

    <div>
        <p id="result">Winner message displayed here</p>
    </div>
    
    <div>
        <p id=""></p>
    </div>






<!-- handle js -->
<script src="index.js"></script>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>

    <!-- Include the CSS file here -->
    <link rel="stylesheet" href="style.css">
    <script defer src="key.js" type="module"></script>
    <script defer src="index.js" type="module"></script>
</head>
<body>

    <div id="main">
        <h1 id="message">Test Message</h1>
    </div>
    <!-- Include the script tag here -->
    <script src="index.js"></script>
</body>
</html>
*/


/*

api snippet
{
  "response": "success",
  "results-for": "batman",
  "results": [
    {
      "id": "69",
      "name": "Batman",
      "powerstats": {
        "intelligence": "81",
        "strength": "40",
        "speed": "29",
        "durability": "55",
        "power": "63",
        "combat": "90"
      },
      "biography": {
        "full-name": "Terry McGinnis",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "Batman II",
          "The Tomorrow Knight",
          "The second Dark Knight",
          "The Dark Knight of Tomorrow",
          "Batman Beyond"
        ],
        "place-of-birth": "Gotham City, 25th Century",
        "first-appearance": "Batman Beyond #1",
        "publisher": "DC Comics",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "170 lb",
          "77 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "Black"
      },
      "work": {
        "occupation": "-",
        "base": "21st Century Gotham City"
      },
      "connections": {
        "group-affiliation": "Batman Family, Justice League Unlimited",
        "relatives": "Bruce Wayne (biological father), Warren McGinnis (father, deceased), Mary McGinnis (mother), Matt McGinnis (brother)"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg"
      }
    },
    {
      "id": "70",
      "name": "Batman",
      "powerstats": {
        "intelligence": "100",
        "strength": "26",
        "speed": "27",
        "durability": "50",
        "power": "47",
        "combat": "100"
      },
      "biography": {
        "full-name": "Bruce Wayne",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "Insider",
          "Matches Malone"
        ],
        "place-of-birth": "Crest Hill, Bristol Township; Gotham County",
        "first-appearance": "Detective Comics #27",
        "publisher": "DC Comics",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "210 lb",
          "95 kg"
        ],
        "eye-color": "blue",
        "hair-color": "black"
      },
      "work": {
        "occupation": "Businessman",
        "base": "Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower"
      },
      "connections": {
        "group-affiliation": "Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps",
        "relatives": "Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
      }
    },
    {
      "id": "71",
      "name": "Batman II",
      "powerstats": {
        "intelligence": "88",
        "strength": "11",
        "speed": "33",
        "durability": "28",
        "power": "36",
        "combat": "100"
      },
      "biography": {
        "full-name": "Dick Grayson",
        "alter-egos": "Nightwing, Robin",
        "aliases": [
          "Dick Grayson"
        ],
        "place-of-birth": "-",
        "first-appearance": "-",
        "publisher": "Nightwing",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "175 lb",
          "79 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "Black"
      },
      "work": {
        "occupation": "-",
        "base": "Gotham City; formerly Bludhaven, New York City"
      },
      "connections": {
        "group-affiliation": "Justice League Of America, Batman Family",
        "relatives": "John Grayson (father, deceased), Mary Grayson (mother, deceased), Bruce Wayne / Batman (adoptive father), Damian Wayne / Robin (foster brother), Jason Todd / Red Hood (adoptive brother), Tim Drake / Red Robin (adoptive brother), Cassandra Cain / Batgirl IV (adoptive sister)"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/1496.jpg"
      }
    }
  ]
}

*/
// function to render the results of the API query into the DOM


//function to search the API for the hero stats and average the 6 stats into one stat=overallPower (intelligence, strength, speed, durability, power, combat)

import { apiKey } from './key.js';
console.log(apiKey);


// function to search the api for hero stats
function pullHeroStats(heroName) {
    fetch(`https://www.superheroapi.com/api.php/${apiKey}/search/${heroName}`)
        .then(response => response.json())
        .then(data => {
            let heroStats = Object.values(data.results[0].powerstats);
            let overallPower = Math.trunc(heroStats.reduce((total, stat) => total + parseInt(stat), 0) / heroStats.length)
            console.log(`${heroName} : ${overallPower}`);
            return overallPower;
        })
        .catch(error => console.log(error));
}
pullHeroStats('batman');

//function to search the API for the hero image
function pullHeroImage(heroName) {
    fetch(`https://www.superheroapi.com/api.php/${apiKey}/search/${heroName}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let heroImage = data.results[0].image.url;
            console.log(heroImage);
            return heroImage;
        })
        .catch(error => console.log(error));
}

//function to search the API for the hero name

function pullHeroName(heroName) {
    fetch(`https://www.superheroapi.com/api.php/${apiKey}/search/${heroName}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let heroName = data.results[0].name;
            console.log(heroName);
            return heroName;
        })
        .catch(error => console.log(error));
}

//function to render a HeroCard to the DOM
function renderHeroCard(searchTerm) {
    let heroCard = document.createElement('div');
    heroCard.classList.add('hero-card');
    let heroImage = document.createElement('img');
    heroImage.classList.add('hero-image');
    heroImage.src = pullHeroImage(searchTerm);
    let heroName = document.createElement('h2');
    heroName.classList.add('hero-name');
    heroName.textContent = pullHeroName(searchTerm);
    heroCard.appendChild(heroImage);
    heroCard.appendChild(heroName);
    return heroCard;

}

//function to render the results of the API query into the DOM
function renderResults(searchTerm) {
    let heroA = renderHeroCard(searchTerm);
    let heroB = renderHeroCard(searchTerm);
}

//function to handle the search form submission
function handleSearchFormSubmit(event) {
    event.preventDefault();
    let searchTerm = document.querySelector('#search-term').value;
    renderResults(searchTerm);
}

//function to initialize the app
function init() {
    document.querySelector('#search-form').addEventListener('submit', handleSearchFormSubmit);
}
init();