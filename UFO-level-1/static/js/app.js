// from data.js
var tableData = data;

// Build a callable function to append data
function appenData(inputData) {
    // Get a reference to the table body
    var tbody = d3.select("tbody");

    // Clean the existing codes inside tbody html
    tbody.html("")

    // Loop through the data list
    inputData.forEach(event => {
        // Append one table row 'tr' for each object
        var row = tbody.append("tr");

        // Use Object entries to loop each key value pair
        Object.entries(event).forEach(([_, value]) => {
            // Append one cell per column
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// Show all data as a default page
appenData(tableData);

// ------- Using form to filter data -------

// Select the button & form
var button = d3.select("#filter-btn");
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing enter key
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    // Prevent the page from refreshing after submitting
    d3.event.preventDefault();

    // Select the input element of each input
    var inputDatetime = d3.select("#datetime").node();
    var inputCity = d3.select("#city").node();
    var inputState = d3.select("#state").node();
    var inputCountry = d3.select("#country").node();
    var inputShape = d3.select("#shape").node();

    // Create filter for all conditions
    ufoFilter = {
        datetime: inputDatetime.value,
        city: inputCity.value,
        state: inputState.value,
        country: inputCountry.value,
        shape: inputShape.value
    };

    // Print out the input value
    console.log(ufoFilter)

    // Get filtered data  event.datetime === valueDatetime
    var filteredData = tableData.filter(event => {
        for (var key in ufoFilter) {
            // Only compare keys with values rather than empty string
            if (ufoFilter[key] != "" && event[key] != ufoFilter[key]) {
                return false;
            };
        };
        // For results 
        return true;
    });
    
    // Show filtered data
    appenData(filteredData);
};