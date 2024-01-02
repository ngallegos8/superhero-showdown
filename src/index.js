import { apiKey } from "./key.js";

function handleAPIQuery(event) {
    event.preventDefault();
    const searchTerm = event.target.query.value;
    console.log(searchTerm);
    searchAPI(searchTerm);

    fetch(`https://www.superheroapi.com/api.php/${apiKey}/search/${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error));
}

console.log(handleAPIQuery(superman));
