let searchInp = document.querySelector('.inp')

const cardsList = document.querySelector('.film-cards');
async function movies() {
    try {
        const res = await fetch('https://api.tvmaze.com/shows');
        const data = await res.json();
        for (let i = 0; i < 20; i++) {
            cards(data[i]);
        }
    } catch (error) {
        console.error("ERROR", error);
    }
}

function cards(data) {
    cardsList.innerHTML += `
    <div class="card col-3 mt-2 mx-2" style="width: 12rem;">
      <img src="${data.image.medium}" class="card-img-top mt-1" alt="...">
      <div class="card-body">
        <h5 class="card-text">${data.name}</h5>
      </div>
      <button><a href='details.html?id=${data.id}' target="_blank">Details</a></button>
    </div>`;
}

movies();

searchInp.addEventListener('keyup', function () {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        const productName = card.querySelector('.card-text').textContent.toLowerCase();
        if (productName.includes(searchInp.value.toLowerCase())) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
})