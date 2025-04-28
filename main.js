//  Milestone 1
// Utilizzando Postman, testiamo una chiamata a questo endpoint:
// https://lanciweb.github.io/demo/api/pictures/
// In ogni caso studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
//Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
// 1° creo la lista su HTML con bootstrap
// 2° copio la struttura e la cancello da HTML
// 3° document.getelemetnbyID ("ul")
// 4° ul.innerHTML e metto il pezzo di struttura con solo un item <li>
// 5° nella <li> metto una variabile di appoggio vuota
// 6° ogni email in pratica viene stampata come elemento di una lista perche riassengno la variabile ed aggiungo un pezzo di lista
// 7° quindi mi serve un for o uso quello di sopra mettendolo dentro una funzione
const rowEl = document.getElementById("row");
const iconEl = document.getElementById("close-icon");
const overlayEl = document.getElementById("overlay");
let card = ``;

axios.get(`https://lanciweb.github.io/demo/api/pictures/`).then((response) => {
  const JSONArray = response.data;
  for (const element of JSONArray) {
    card += `
      <div class="col position-relative">
        <img
          src="./img/pin.svg"
          class="position-absolute top-0 start-50 translate-middle z-1"
          alt="pin"
        />
        <div id="full-card" class="card h-100 rounded-0">
          <img
            src="${element.url}"
            class="card-img-top px-3 pt-3"
            alt="${element.title}"
          />
          <div class="card-body">
            <time datetime="2024-07-01">${element.date}</time>
            <h5 class="card-title">${element.title.toUpperCase()}</h5>
          </div>
        </div>
      </div> `;
    rowEl.innerHTML = card;
  }
});

// overlayEl.classList.remove("d-none");
// OVERLAY SCOMPARE QUANDO CLICCO L'X
iconEl.addEventListener("click", function () {
  overlayEl.classList.add("d-none");
});

// Milestone 2
// Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura.
// Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .
// Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
// Cliccando invece il button di chiusura, l’overlay scompare nuovamente.
// Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
// Ci sono diversi modi di farlo, prova a sperimentare :faccia_leggermente_sorridente:
// Bonus
// Spostandosi col mouse sopra le foto, queste si zoommano, ruotano di 10 gradi e la loro ombra aumenta, il tutto in manierà fluida. Inoltre il mouse diventa un puntatore, per far capire all’utente che può cliccare
//1°
//
//
//
//
//
//
//

// OTHER SOLUTION
// for (let i = 0; i < 6; i++) {
//   axios
//     .get(`https://lanciweb.github.io/demo/api/pictures/`)
//     .then((response) => {
//       const currentIndex = response.data[i];
//       const currentTitle = currentIndex.title.toUpperCase();
//       const currentImage = currentIndex.url;
//       const currentDate = currentIndex.date;
//       for (let i = 0; i < 1; i++) {
//         card += `
//   <div class="col position-relative">
//     <img
//       src="./img/pin.svg"
//       class="position-absolute top-0 start-50 translate-middle z-1"
//       alt="pin"
//     />
//     <div id="full-card" class="card h-100 rounded-0">
//       <img
//         src="${currentImage}"
//         class="card-img-top px-3 pt-3"
//         alt="${currentTitle}"
//       />
//       <div class="card-body">
//         <time datetime="2024-07-01">${currentDate}</time>
//         <h5 class="card-title">${currentTitle}</h5>
//       </div>
//     </div>
//   </div> `;
//       }
//       rowEl.innerHTML = card;
//     });
// }
