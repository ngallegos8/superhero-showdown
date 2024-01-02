//DELETE These lines

// api key reference: 7448105941879772

//DELETE above these lines 


function fetchApiData() {
    const url = `https://superheroapi.com/api/${apiKey}/search/${searchTerm}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error));
}