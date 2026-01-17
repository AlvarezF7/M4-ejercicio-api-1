const url = 'https://rickandmortyapi.com/api/character/'
const cards = document.querySelector("#showCard"); 
const btnFiltro = document.querySelector("#btnF");
const btnOrdenar = document.querySelector("#btnGrupo");

let personajes= [];
let primeros10=[];

fetch(url)
  .then(response => response.json())
  .then(data => {
   
    personajes= data.results;
    mostrarCards(personajes,data);
  })
  .catch(error => console.error('Error:', error));

function mostrarCards(data) {
  cards.innerHTML = "";
  data.forEach(personaje => {
    cards.innerHTML += `
      <div class="cardBody">
        <img src="${personaje.image}">
        <ul>
          <li class="info">Nombre: ${personaje.name}</li>
          <li class="info">Status: ${personaje.status}</li>
          <li class="info">Especie: ${personaje.species}</li>
        </ul>
      </div>
    `;
  });
}

btnFiltro.addEventListener("click", () => {
 primeros10 = personajes.slice(0,10);
  mostrarCards(primeros10);
  console.log(primeros10);
});

btnOrdenar.addEventListener("click", () => {
  const separados = primeros10.reduce((acc, p) => {
    if (!acc[p.species]) acc[p.species] = [];
    acc[p.species].push(p);
    return acc;
  }, {});

  console.log(separados);

  cards.innerHTML = "";

for (let especie in separados) {
    cards.innerHTML += `<p><strong>${especie}</strong></p>`;

    separados[especie].forEach(personaje => {
      cards.innerHTML += `
        <div class="cardBody">
          <img src="${personaje.image}">
          <ul>
            <li class="info">Id: ${personaje.id}</li>
            <li class="info">Nombre: ${personaje.name}</li>
            <li class="info">Status: ${personaje.status}</li>
            <li class="info">Especie: ${personaje.species}</li>
          </ul>
        </div>
      `;
    });
  }
});

