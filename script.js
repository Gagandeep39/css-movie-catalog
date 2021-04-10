const API_KEY = '77befa197a7663030aa15e44197a82e4';
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1&query="`;

const form = document.getElementById('form');
const search = document.getElementById('search');

// Get Initial mvie
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
}

form.addEventListener('submit', (e) => {
  // Prevent refresh
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm) {
    console.log('triggered');
    getMovies(SEARCH_URL + searchTerm);
    search.value = '';
  } else {
    window.location.reload;
  }
});
