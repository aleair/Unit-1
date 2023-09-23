// City and population table function
function cities() {

    var cities = [
        'Madison',
        'Milwaukee',
        'Green Bay',
        'Superior'
    ];
    var population = [
        233209,
        594833,
        104057,
        27244
    ];

    // table element
    var table = document.createElement("table");

    // Create a header row
    var headerRow = document.createElement("tr");

    // Adds the city column
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    // Adds the population column
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    table.appendChild(headerRow);

    // Loops to add rows each city
    for (var i = 0; i < cities.length; i++) {
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cities[i];
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = population[i];
        tr.appendChild(pop);

        table.appendChild(tr);
    }

    // adds the table to the index.html
    var myDiv = document.getElementById("mydiv");
    myDiv.appendChild(table);
}

// Function for GeoJSON data to display in browser
function debugCallback(response) {
    response.json().then(function (data) {
        var myDiv = document.getElementById("mydiv");
        myDiv.insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(data));
    });
}

// Function to fetch GeoJSON data
function debugAjax() {
    fetch("data/MegaCities.geojson")
        .then(function (response) {
            debugCallback(response);
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
}

function initialize() {
    cities(); 
    debugAjax(); 
}

// Call the initialize function when the window has loaded
window.onload = initialize;
