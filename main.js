//  Milestone 1
// Utilizzando Postman, testiamo una chiamata a questo endpoint:
// https://lanciweb.github.io/demo/api/pictures/
// In ogni caso studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
//Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
const rowEl = document.getElementById("row");
const iconEl = document.getElementById("close-icon");
const overlayEl = document.getElementById("overlay");
const openImgEl = document.getElementById("open-image");
// const imgContainerEl = document.getElementById("img-container");

let card = ``;
// let img = ``;

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
          <img id="img-card"
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

  const cardNodes = document.querySelectorAll("#full-card");
  console.log(cardNodes);
  for (const node of cardNodes) {
    console.log(node);
    node.addEventListener("click", function () {
      overlayEl.classList.remove("d-none");
      const nodeImg = node.querySelector("img");
      opneImgEl.src = nodeImg.src;
    });
  }
});

// OVERLAY SCOMPARE QUANDO CLICCO L'X
iconEl.addEventListener("click", function () {
  overlayEl.classList.add("d-none");
});
