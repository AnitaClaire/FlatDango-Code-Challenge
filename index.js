//Write your code here
let filmsEndpoint = 'http://localhost:3000/films';

// Fetch the films from the server
fetch(filmsEndpoint)
  .then(response => response.json())
  .then(films => {
    var filmsList = document.getElementById('films');

    films.forEach(film => {
      let filmItem = document.createElement('li');
      filmItem.className = 'film item';
      filmItem.innerText = film.title;

      //For each film item add the click event listener
      filmItem.addEventListener('click', () => {
        displayFilmDetails(film);
      });

      filmsList.appendChild(filmItem);
    });
  });

//To display the film details on needs to fetch first
function displayFilmDetails(film) {
  let posterElement = document.getElementById('poster');
  let titleElement = document.getElementById('title');
  let runtimeElement = document.getElementById('runtime');
  let showtimeElement = document.getElementById('showtime');
  let availableTicketsElement = document.getElementById('available-tickets');
  let buyTicketButton = document.getElementById('buy-ticket');

  //While on the page the film details are updated
  posterElement.src = film.poster;
  titleElement.innerText = film.title;
  runtimeElement.innerText = `Runtime: ${film.runtime} minutes`;
  showtimeElement.innerText = `Showtime: ${film.showtime}`;
  availableTicketsElement.innerText = `Available Tickets: ${film.capacity - film.tickets_sold}`;


  buyTicketButton.disabled = film.tickets_sold >= film.capacity;

  
  //For the buy the ticket button the event listener is added
  buyTicketButton.addEventListener('click', () => {
    if (film.tickets_sold < film.capacity) {
      film.tickets_sold++;
      availableTicketsElement.innerText = `Available Tickets: ${film.capacity - film.tickets_sold}`;

      
      let patchEndpoint = `${filmsEndpoint}/${film.id}`;
      fetch(patchEndpoint, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          tickets_sold: film.tickets_sold
        })
      })
        .then(response => response.json())
        .then(updatedFilm => {
          
        })
        .catch(error => {
          console.error('Failed to update tickets_sold:', error);
        });
    }
  });
}

