async function fetchHeroes() {
    try {
        const response = await fetch('http://localhost:3000/heroes');
        const heroes = await response.json();
        heroes.forEach(hero => renderHero(hero));
    } catch (error) {
        console.error('Error fetching heroes:', error);
    }
}

function renderHero(hero) {
    const nav = document.getElementById('hero-list');
    const heroImg = document.createElement('img');
    heroImg.src = hero.image.url;
    heroImg.alt = hero.name;
    heroImg.classList.add('hero-image');

    // mouseover event to add grayscale effect
    heroImg.addEventListener('mouseover', () => heroImg.classList.add('grayscale'));

    // mouseout event: remove grayscale effect
    heroImg.addEventListener('mouseout', () => heroImg.classList.remove('grayscale'));

    heroImg.addEventListener('click', () => selectHero(hero));
    nav.appendChild(heroImg);
}

let heroA = null;
let heroB = null;

function selectHero(hero) {
    if (!heroA || (heroA && heroB)) {
        heroA = hero;
        updateHeroDisplay('hero-a', hero);
    } else if (!heroB) {
        heroB = hero;
        updateHeroDisplay('hero-b', hero);
    }
}

function updateHeroDisplay(heroPrefix, hero) {
    document.getElementById(`${heroPrefix}-image`).src = hero.image.url;
    document.getElementById(`${heroPrefix}-name`).textContent = hero.name;
    document.getElementById(`${heroPrefix}-power`).textContent = `Powerstats: ${formatPowerstats(hero.powerstats)}`;
}

function formatPowerstats(powerstats) {
    return Object.entries(powerstats).map(([key, value]) => `${key}: ${value}`).join(', ');
}

document.getElementById('add-hero-form').addEventListener('submit', addNewHero);

function addNewHero(event) {
    event.preventDefault()
    const newHeroName = document.getElementById('new-hero-name').value
    const newHeroImageUrl = document.getElementById('new-hero-image').value
    const newHeroIntelligence = document.getElementById('new-hero-intelligence').value
    const newHeroStrength = document.getElementById('new-hero-strength').value
    const newHeroSpeed = document.getElementById('new-hero-speed').value
    const newHeroDurability = document.getElementById('new-hero-durability').value
    const newHeroPower = document.getElementById('new-hero-power').value
    const newHeroCombat = document.getElementById('new-hero-combat').value

    const newHero = {
        name: newHeroName,
        image: { url: newHeroImageUrl },
        powerstats: {
            intelligence: newHeroIntelligence,
            strength: newHeroStrength,
            speed: newHeroSpeed,
            durability: newHeroDurability,
            power: newHeroPower,
            combat: newHeroCombat
        }
    };

    renderHero(newHero)

    document.getElementById('new-hero-name').value = ''
    document.getElementById('new-hero-image').value = ''
    document.getElementById('new-hero-intelligence').value = ''
    document.getElementById('new-hero-strength').value = ''
    document.getElementById('new-hero-speed').value = ''
    document.getElementById('new-hero-durability').value = ''
    document.getElementById('new-hero-power').value = ''
    document.getElementById('new-hero-combat').value = ''
}

document.getElementById('fight').addEventListener('click', handleFight);

function handleFight() {
    if (!heroA || !heroB) {
        alert('Please select two heroes to fight!');
        return;
    }

    const winner = compareHeroes(heroA, heroB);
    displayWinner(winner);

    resetHeroSelection();
}

function compareHeroes(hero1, hero2) {
    const avgPower1 = averagePowerstats(hero1.powerstats);
    const avgPower2 = averagePowerstats(hero2.powerstats);
    return avgPower1 >= avgPower2 ? hero1 : hero2;
}

function averagePowerstats(powerstats) {
    const total = Object.values(powerstats).reduce((sum, stat) => sum + parseInt(stat), 0);
    return total / Object.keys(powerstats).length;
}

function displayWinner(winner) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<strong>Winner:</strong> ${winner.name}<br><img src="${winner.image.url}" alt="${winner.name}" style="max-width:200px;">`;
}

function resetHeroSelection() {
    heroA = null;
    heroB = null;
    resetHeroDisplay('hero-a', 'images/left_fight.jpeg', 'Name1', 'Powerstats');
    resetHeroDisplay('hero-b', 'images/right_fight.jpeg', 'Name2', 'Powerstats');
}

function resetHeroDisplay(heroPrefix, defaultImage, defaultName, defaultPowerStats) {
    document.getElementById(`${heroPrefix}-image`).src = defaultImage;
    document.getElementById(`${heroPrefix}-name`).textContent = defaultName;
    document.getElementById(`${heroPrefix}-power`).textContent = defaultPowerStats;
}

fetchHeroes()