'use strict';

const dogGallery = document.getElementById('dogGallery');
const loadDogsBtn = document.getElementById('loadDogsBtn');

loadDogsBtn.addEventListener('click', fetchDogPics);

async function fetchDogPics() {
  dogGallery.innerHTML = ''; // clear old dogs

  // Fetch 3 random dog images
  for (let i = 0; i < 3; i++) {
    const url = 'https://dog.ceo/api/breeds/image/random';
    try {
      const response = await fetch(url);
      const data = await response.json();
      createDogCard(data.message);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  }
}

function createDogCard(imageUrl) {
  const card = document.createElement('div');
  card.className = 'col-12 col-md-4';

  card.innerHTML = `
    <div class="card h-100 shadow-sm">
      <img src="${imageUrl}" class="card-img-top" alt="Cute Dog">
      <div class="card-body">
        <h5 class="card-title">Such Wow!</h5>
        <p class="card-text">Click "Load Dog Pictures" to see more adorable dogs.</p>
      </div>
    </div>
  `;

  dogGallery.appendChild(card);
}