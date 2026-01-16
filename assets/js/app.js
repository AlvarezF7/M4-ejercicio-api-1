//actividad cosumo API res rick y martin
const cards = document.querySelector("#showCard"); 

fetch ("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10")
.then(response =>response.json())
.then(data => {
    const  especies = "Human";
    const personajes = filtrarEspecie(data,especies);
    mostrarCards(personajes);
    console.log(data);
});    

function mostrarCards(data){
      
        cards.innerHTML ="";
        data.forEach(personaje =>{
            cards.innerHTML +=`
                <div class="cardBody">
                    <img src="${personaje.image}">
                    <ul>
                        <li class="info">Nombre:${personaje.name}</li>
                        <li class="info">Status:${personaje.status}</li>
                        <li class="info">Especie:${personaje.species}</li>
                    </ul>
               
                    
                </div>
        `;

});
}

//funcion filtrar 
function filtrarEspecie(data, especies){
    return data.filter(personaje => personaje.species === especies);
}

