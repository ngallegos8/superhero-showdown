//DELETE These lines

// api key reference: 7448105941879772

//DELETE above these lines 


function fetchApiData() {
    const url = `https://api.themoviedb.org/3/movie/550?api_key=7448105941879772`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error));
}