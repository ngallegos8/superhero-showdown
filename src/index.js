/* 
db.json data
{
    "heroes" : [
        {
            "id": "1",
            "name": "A-Bomb",
            "powerstats": {
              "intelligence": "38",
              "strength": "100",
              "speed": "17",
              "durability": "80",
              "power": "24",
              "combat": "64"
            },
            "image": {
              "url": "https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg"
            }
          },
          {
            "id": "2",
            "name": "Abe Sapien",
            "powerstats": {
              "intelligence": "88",
              "strength": "28",
              "speed": "35",
              "durability": "65",
              "power": "100",
              "combat": "85"
            },
            "image": {
              "url": "https://www.superherodb.com/pictures2/portraits/10/100/956.jpg"
            }
          },
          {
            "id": "3",
            "name": "Abin Sur",
            "powerstats": {
              "intelligence": "50",
              "strength": "90",
              "speed": "53",
              "durability": "64",
              "power": "99",
              "combat": "65"
            },
            "image": {
              "url": "https://www.superherodb.com/pictures2/portraits/10/100/1460.jpg"
            }
          },
          {
            "id": "4",
            "name": "Abomination",
            "powerstats": {
              "intelligence": "63",
              "strength": "80",
              "speed": "53",
              "durability": "90",
              "power": "62",
              "combat": "95"
            },
            "image": {
              "url": "https://www.superherodb.com/pictures2/portraits/10/100/1.jpg"
            }
          },
          {
            "id": "5",
            "name": "Abraxas",
            "powerstats": {
              "intelligence": "88",
              "strength": "63",
              "speed": "83",
              "durability": "100",
              "power": "100",
              "combat": "55"
            },
            "image": {
              "url": "https://www.superherodb.com/pictures2/portraits/10/100/181.jpg"
            }
          },
          {
            "id": "6",
            "name": "Absorbing Man",
            "powerstats": {
                "intelligence": "38",
                "strength": "80",
                "speed": "25",
                "durability": "100",
                "power": "98",
                "combat": "64"
            },
            "image": {
                "url": "https://www.superherodb.com/pictures2/portraits/10/100/1448.jpg"
            }
        }
    ]
}
*/

/* HTML data:
<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="style.css">
    <script defer src="index.js" type="module"></script>
    <title>Superhero Showdown</title>
</head>
<body>
    <div id="top">
        <h1>Superhero Showdown</h1>
    </div>
    <hr/>

    <nav id="hero-list">
    <!-- javascript make function to select this nav by id and forEach(hero) 
        1. create a new image element, 
        2. select hero image from API, 
        3. append to this nav, 
        4. add event listener for mouseover and 
        5. add event listener for click to select-->  
    </nav>
    
    <div id="hero-a-info">
        <img id="hero-a-image" src="" />
        <h2 id="hero-a-name">Name1</h2>
    </div>
    <div id="hero-b-info">
        <img id="hero-b-image" src="" />
        <h2 id="hero-b-name">Name2</h2>
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

    <footer id="footer">
        <ul class="meta">
                <span>
                    Made by
                    <a href="https://github.com/CCONLEY-FI" target="_blank">Chris</a>
                     &
                    <a href="https://github.com/ngallegos8" target="_blank">Nick</a>
                </span>
        </ul>
    </footer>
</body>
</html>

*/

// createing a superhero comparison app based on data from our db.json file.
    // comparison will average the total of all powerstats for each hero and compare the two averages.
    // an array of the 6 heroes will be displayed along the top of the webpage.
    // when a hero is clicked, their image and name will be displayed in the left or right side of the webpage.
    // when two heroes are selected, the fight button will be enabled.
    // when the fight button is clicked, the average of all powerstats for each hero will be calculated and compared.
    // the hero with the higher average will be declared the winner and their image and name will be displayed in the center of the webpage.
    // the loser will be removed from the array and the next two heroes will be compared.


    let heroAImg = document.querySelector('#hero-a-image');
    let heroAName = document.querySelector('#hero-a-name');
    let heroBImg = document.querySelector('#hero-b-image');
    let heroBName = document.querySelector('#hero-b-name');
    let fightBtn = document.querySelector('#fight');
    

    document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed'); 
    fetchHeroes()
    selectHeroClick()
})

//function to fetch the array of heroes from the db.json file
function fetchHeroes() {
    fetch('http://localhost:3000/heroes')
    .then(resp => resp.json())
    .then(heroes => {
        console.log(heroes)
        heroes.forEach(hero => {
            renderHero(hero)
        })
    })
}

//function to render the array of heroes to the hero-list nav
function renderHero(hero) {
    const heroList = document.querySelector('#hero-list');
    if (heroList.childElementCount < 6) {
        const heroImg = document.createElement('img');
        heroImg.src = hero.image.url
        heroImg.id = hero.id
        heroImg.setAttribute('data-name', hero.name)
        heroList.appendChild(heroImg);
    }
}
// on click, select the hero and display it in the hero-a div.  if the hero-a div is already populated, display the hero in the hero-b div.
function selectHeroClick() {
    const heroList = document.querySelector('#hero-list');
    heroList.addEventListener('click', (event) => {
        console.log(event.target)
        const hero = event.target;
        console.log(heroBImg.src)
        if (heroAImg.src === "http://127.0.0.1:5500/src/images/left_fight.jpeg") {
            console.log('a')
            populateHeroA(hero);
        } else if (heroBImg.src === "http://127.0.0.1:5500/src/images/right_fight.jpeg") {
            console.log('b')
            populateHeroB(hero);
        }
        
    })
}

//function to populate the hero-a-info div with the selected hero's image and name based upon the id of the image clicked
function populateHeroA(clickedHero) {
    heroAImg.src = clickedHero.src;
    heroAName.innerText = clickedHero.dataset.name;
    // heroAImg.src = clickedHero.image.url;
    // heroAName.innerText = clickedHero.name;
}
//function to populate the hero-b-info div with the selected hero based upon the id of the image clicked
function populateHeroB(clickedHero) {
    heroBImg.src = clickedHero.src;
    heroBName.innerText = clickedHero.dataset.name;
    // heroBImg.src = clickedHero.image.url;
    // heroBName.innerText = clickedHero.name;
}


