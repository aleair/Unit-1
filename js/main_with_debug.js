// sets city attributes
var cityPop = [
    { 
        city: 'Madison',
        population: 233209
    },
    {
        city: 'Milwaukee',
        population: 594833
    },
    {
        city: 'Green Bay',
        population: 104057
    },
    {
        city: 'Superior',
        population: 27244
    }
];

// adds "city cize"
function addColumns(cityPop) {
    // Select table rows and loops through them
    document.querySelectorAll("tr").forEach(function(row, i){
        if (i == 0){
            // For the first row (header row), add the "City Size" header
            row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
        } else {
            // For data rows, determine the city size based on population
            var citySize;

            if (cityPop[i - 1].population < 100000){
                citySize = 'Small';
            } else if (cityPop[i - 1].population < 500000){
                citySize = 'Medium';
            } else {
                citySize = 'Large';
            }

            // Add the citySize to current row
            row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
        }
    });
}

// Function to add mouseover and click events to the table
function addEvents() {
    var table = document.querySelector("table");

    // Add mouseover event to change table background color
    table.addEventListener("mouseover", function(){
        var color = "rgb(";

        for (var i = 0; i < 3; i++){
            var random = Math.round(Math.random() * 255);
            color += random;

            if (i < 2){
                color += ",";
            } else {
                color += ")";
            }
        }

        table.style.backgroundColor = color;
    });

    // Function show dialog box
    function clickme(){
        alert('Hey, you clicked me!');
    }

    // Add click event to the table
    table.addEventListener("click", clickme);
}

// Call the functions to add columns and events to the table
addColumns(cityPop);
addEvents();
