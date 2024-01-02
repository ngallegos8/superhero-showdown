
function fetchApiData() {
    const url = `https://superheroapi.com/api/${apiKey}/search/${searchTerm}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error));
}