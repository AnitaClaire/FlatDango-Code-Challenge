# Flatdango Movie Theater
FlatDango is an application that helps people to be able to purchase their tickects to the movies.

# SetUp
For on to be able to set up the FlatDango application one should:

1. Clone this repository to your local machine.
2. The local server shouls run a JSON DB.server.
3. Update the 'index.js' file with the correct URL.
4. Open the 'index.html' file in the browser.

## Features

### Core Deliverables

- View Movie Details- After the page is dne loading, the first movie's details including its poster, title, runtime, showtime, and available tickets are displayed in the movie details section. 
- Buy Ticket-Users can buy a ticket for a movie by clicking the "Buy Ticket" button. The number of available tickets decreases on the frontend, and the button is disabled if the showing is sold out (0 tickets available). No persistence is needed for this feature.

### Bonus Deliverables

- Switch Movie- Clicking on a movie in the film list replaces the currently displayed movie's details with the new movie's details. An additional GET request is made to access the movie's details.
- "Sold Out"- When a movie is sold out (no available tickets remaining), the button text changes to "Sold Out". 

## Technologies Used

- HTML
- CSS
- JavaScript

## Credits

This FlatDango movie application is used as part of a code challenge.Its requirements are provided by Flatiron School.


## License

This project is licensed under the [MIT License](LICENSE).
