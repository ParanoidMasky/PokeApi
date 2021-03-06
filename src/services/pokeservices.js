//API services here

export async function getPokemons(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            resolve(data)
        })
    })
}

export async function getSinglePokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            resolve(data)
        })
    })
}