

console.log('my javascript is working')

let populateButton = document.querySelector('#populate')

let pokemonNames = document.querySelector('.name')

const populateButtonFunction = () => {
console.log('button clicked')
axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0' ).then((res) => {
    
   const {name} = res.data.results[0]
    for(let i =0; i < name.length; i++) {
        const h2s = document.querySelector('h2');
    
axios.get(name)
.then(res => {

    // if(h2s.length > 0){
    //     h2s[i].remove()
    // }

    let h2 = document.createElement('h2')
    h2.textContent = res.data.name;

    document.querySelector('body').appendChild(h2)
})
    }
})
}


populateButton.addEventListener('click', populateButtonFunction)


//does not work 
//must have to completed scrub doing it this way and trust the google way