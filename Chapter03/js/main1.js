//Example 3.5...
function jsAjax(){
    //define a variable to hold the data
    var myData;

    //basic fetch
    fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json();
        }) 
        .then(function(response){
            myData = response;

            // Data can be accessed here (inside the second .then() block)
            console.log("Data can be accessed here:", myData);
        }) 

    // Data cannot be accessed here (outside the .then() block)
    console.log("Data cannot be accessed here:", myData);
};

// Call the jsAjax function
jsAjax();
