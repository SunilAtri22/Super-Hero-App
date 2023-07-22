
const hero_token = '602758568157937'
const base_url = `https://www.superheroapi.com/api.php/${hero_token}`

const getBtn = document.getElementById('getBtn')
const searchBtn = document.getElementById('searchBtn')
const heroImg = document.getElementById('heroImage')
const searchInput = document.getElementById('searchInput')

const  getRandomSuperHero = (id, name) => {
  fetch(`${base_url}/${id}`)
 .then(response => response.json())
 .then(json => {   
   console.log(json.powerstats)
   const superHero = json
   getHeroInfo(superHero) 
  })
}  

const statToEmoji = {
  intelligence: '🧠',
  strength: '💪',
  speed: '⚡',
  durability: '🏋️‍♂️',
  power: '📊',
  combat: '⚔️',
}

const getHeroInfo = (character) => {
  const name = `<h2 style="font-size:30px;">${character.name}<h2>`  
  const img = `<img style = "border : 3px solid #00ffff" src="${character.image.url}" height=220 width=220>`
  
  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p style="font-size:18px;">${statToEmoji[stat]} ${stat.toUpperCase()} : ${character.powerstats[stat]}</p>`
  }).join('')

 heroImg.innerHTML = `${name}${img}${stats}`
}

const searchSuperHero = (name) => {
  fetch(`${base_url}/search/${name}`)
  .then(response => response.json())
  .then(json => {
    const hero = json.results[0]
    getHeroInfo(hero)
  })  
}

const randomNumber = () => {
  return (Math.floor(Math.random()* 731) + 1)
}

getBtn.onclick = () => getRandomSuperHero(randomNumber())

searchBtn.onclick = () => searchSuperHero(searchInput.value)


