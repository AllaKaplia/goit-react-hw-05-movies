const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmVlMzk5YzgxMDA2YmVhYzdhOTFhMGFiMTVmNzc1MCIsInN1YiI6IjY0YTFhN2ViYzM5MGM1MDBjYTAwNjk1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kJeKh3R9gav2pLKibdWniRXoWeRIhWOxskbWh5h_iuI'
    }
  };
  
  fetch('https://api.themoviedb.org/3/account/20096673/rated/movies?language=en-US&page=1&sort_by=created_at.asc', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));