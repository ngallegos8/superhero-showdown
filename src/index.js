import { apiKey } from './key.js';


fetch(`https://www.superheroapi.com/api.php/${apiKey}/search/a`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error));