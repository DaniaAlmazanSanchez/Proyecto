const $poke = document.querySelector('#poke');

let lista = document.getElementById("poke")
//funcion para obtener datos del api pokeapi
function Buscar(id, num) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(function (response) {
            response.json().then(function (pokemon) {
                pokecreado(pokemon, num)

            });
        });
}
//pokemones aleatorios
function pokemons() {
    let pokem1 = Math.round(Math.random() * 100)
    Buscar(pokem1, 1);

};
//agregar elememtos y crear pokemon
function pokecreado(pokemon, num) {
    let item = lista.querySelector(`#pok-${num}`)
    let img = item.getElementsByTagName("img")[0]
    img.setAttribute("src", pokemon.sprites.front_default)

    let nombre = item.getElementsByTagName("p")[0]
    nombre.textContent = pokemon.name
};
pokemons();