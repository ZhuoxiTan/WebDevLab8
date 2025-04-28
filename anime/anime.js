'use strict';

const animeGallery = document.getElementById('animeGallery');
const loadAnimeBtn = document.getElementById('loadAnimeBtn');

loadAnimeBtn.addEventListener('click', fetchAnime);

async function fetchAnime() {
  animeGallery.innerHTML = ''; // clear cards

  const url = 'https://api.jikan.moe/v4/top/anime'; 
  try {
    const response = await fetch(url);
    const data = await response.json();
    const animeList = data.data.slice(0, 6); 

    animeList.forEach(anime => createAnimeCard(anime));
  } catch (error) {
    console.error('Error fetching anime:', error);
  }
  
}

function createAnimeCard(anime) {
  const card = document.createElement('div');
  card.className = 'col-12 col-md-4';

  card.innerHTML = `
    <div class="card">
      <img src="${anime.images.jpg.image_url}" class="card-img" alt="${anime.title}">
      <div class="card-body">
        <h5 class="card-title">${anime.title}</h5>
        <p class="card-text">Score: ${anime.score || 'N/A'}</p>
        <a href="${anime.url}" class="btn" target="blank">More Info</a>
      </div>
    </div>
  `;

  animeGallery.appendChild(card);
}
