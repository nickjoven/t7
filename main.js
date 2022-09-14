let fighters = [
    "akuma",
    "alisa",
    "anna",
    "armor-king",
    "asuka",
    "bob",
    "bryan",
    "claudio",
    "devil-jin",
    "dragunov",
    "jin",
    "josie"
]

// Recreate the Fighters grid using this function

const fighterUrl = (name) => {
    return `https://tk7.tekken.com/assets/images/fighters-final/${name}-standard/thumbnail-headshot.png`
}

let fightersGrid = document.getElementById('fighters-grid')
// console.log(fightersGrid)

const renderFighters = () => {
    fighters.forEach((fighter, index) => {
        let div = document.createElement('div')
        div.className = 'image-div'
        let img = document.createElement('img')
        img.src = fighterUrl(fighter)
        img.className ='image-small'
        fightersGrid.append(div)
        div.append(img)
    })
}

renderFighters()
































































// https://tk7.tekken.com/assets/images/fighters-final/jack-7-standard/thumbnail-headshot.png

// let fighters = 
// [
// "akuma",
// "alisa",
// "anna",
// "armor-king",
// "asuka",
// "bob",
// "bryan",
// "claudio",
// "devil-jin",
// "dragunov",
// "jin",
// "josie"
// ]

// let _fighters = fighters.map((fighter) => {
//     return fighter.toLowerCase()
// })


// const fighterUrl = (name) => {
//     return `https://tk7.tekken.com/assets/images/fighters-final/${name}-standard/thumbnail-headshot.png`
// }

// placeFighters = () => {
//     container = document.createElement('div')
//     container.classList.add('container')
//     fighters.map((name) => {
//     div = document.createElement('div')
//     div.classList.add("fighter-div")
//     img = document.createElement('img')
//     img.src = `https://tk7.tekken.com/assets/images/fighters-final/${name}-standard/thumbnail-headshot.png`
//     console.log(`https://tk7.tekken.com/assets/images/fighters-final/${name}-standard/thumbnail-headshot.png`)
//     document.body.append(container)
//     container.append(div)
//     div.append(img)
//     })
// }

// placeFighters()
