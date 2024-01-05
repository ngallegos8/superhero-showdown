async function fetchHeroes() {
    try {
        const response = await fetch('http://localhost:3000/heroes')
        const heroes = await response.json()
        renderHeroes(heroes)
    } catch (error) {
        console.error('Error fetching heroes:', error)
    }
}

function renderHeroes(heroes) {
    const nav = document.getElementById('hero-list')
    heroes.forEach(hero => {
        const heroImg = document.createElement('img')
        heroImg.src = hero.image.url
        heroImg.alt = hero.name
        heroImg.classList.add('hero-image')
        heroImg.addEventListener('click', () => selectHero(hero))
        nav.appendChild(heroImg)
    });
}

let heroA = null
let heroB = null

function selectHero(hero) {
    if (!heroA || (heroA && heroB)) {
        heroA = hero
        updateHeroDisplay('hero-a', hero)
    } else if (!heroB) {
        heroB = hero
        updateHeroDisplay('hero-b', hero)
    }
}

function updateHeroDisplay(heroPrefix, hero) {
    document.getElementById(`${heroPrefix}-image`).src = hero.image.url
    document.getElementById(`${heroPrefix}-name`).textContent = hero.name
    document.getElementById(`${heroPrefix}-power`).textContent = `Powerstats: ${formatPowerstats(hero.powerstats)}`
}

function formatPowerstats(powerstats) {
    return Object.entries(powerstats).map(([key, value]) => `${key}: ${value}`).join(', ')
}

document.getElementById('fight').addEventListener('click', handleFight)

function handleFight() {
    if (!heroA || !heroB) {
        alert('Please select two heroes to fight!')
        return
    }

    const winner = compareHeroes(heroA, heroB)
    displayWinner(winner)

    // Reset hero selections after the fight
    // resetHeroSelection()
}

function compareHeroes(hero1, hero2) {
    const avgPower1 = averagePowerstats(hero1.powerstats)
    const avgPower2 = averagePowerstats(hero2.powerstats)
    return avgPower1 >= avgPower2 ? hero1 : hero2
}

function averagePowerstats(powerstats) {
    const total = Object.values(powerstats).reduce((sum, stat) => sum + parseInt(stat), 0)
    return total / Object.keys(powerstats).length
}

function displayWinner(winner) {
    const resultDiv = document.getElementById('result')
    resultDiv.innerHTML = `<strong>Winner:</strong> ${winner.name}<br><img src="${winner.image.url}" alt="${winner.name}" style="max-width:200px;">`;
}

// function resetHeroSelection() {
//     // Reset selected heroes
//     heroA = null
//     heroB = null

//     // Reset the display for hero-a-info and hero-b-info to default
//     resetHeroDisplay('hero-a', 'images/left_fight.jpeg', 'Name1', 'Powerstats')
//     resetHeroDisplay('hero-b', 'images/right_fight.jpeg', 'Name2', 'Powerstats')
// }

function resetHeroDisplay(heroPrefix, defaultImage, defaultName, defaultPowerStats) {
    document.getElementById(`${heroPrefix}-image`).src = defaultImage
    document.getElementById(`${heroPrefix}-name`).textContent = defaultName
    document.getElementById(`${heroPrefix}-power`).textContent = defaultPowerStats
}

fetchHeroes()