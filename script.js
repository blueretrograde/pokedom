import { pokemonArray } from './data/pokemon.js'

//SELECTORS

const cardContainer = document.querySelector(".card-container")


//FUNCTIONS


const getPokemonValue = (pokemon) => {

    //let MyPokemonArray = MyPokemonArray.toString();

}




let pokemonName; 
let pokemonImage;
let pokemonText;

const getPokemonCard = (pokemonName, pokemonImage, pokemonText) => {
        cardContainer.innerHTML = `
<h3 class="card__heading">${pokemonName}</h3>
<img class="card__image">${pokemonImage}</img>
<p class="card__text">${pokemonText}</p>
`
}


getPokemonCard("Test", "testing", "test,test")


pokemonName =
    pokemonArray.forEach(element => {

        pokemonArray[1]
        console.log(pokemonName, "pokemonName")
    });

    



    //create a header for name



    //create an img image

    



    //create a p for type
