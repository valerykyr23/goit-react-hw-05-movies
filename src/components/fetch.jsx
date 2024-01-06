
// import Notiflix from 'notiflix';

 const notifySettings = {
  width: '380px',
  position: 'right-top',
  distance: '10px',
  opacity: 1,
  fontSize: '20px',
  borderRadius: '12px',
};

// ' Api key: 3e2a9b79a5e73de05d8a7a802641b9ca'


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
      Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTJhOWI3OWE1ZTczZGUwNWQ4YTdhODAyNjQxYjljYSIsInN1YiI6IjY1OThlZDM5YmQ1ODhiMDBmMTA5M2ZjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GrdmDKrxMteKWaigFE-bNGrJW9fwNMj6IIPcgv3kfws'
          
  }
};

const response = fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
  .then(response => response.json())
  .then(response => console.log(response))
    .catch(err => console.error(err));
  






export default {notifySettings, response};