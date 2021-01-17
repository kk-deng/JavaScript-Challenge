# JavaScript-Challenge
This project can create a table dynamically based upon a dataset, allowing our users to filter the table data for specific values, which is based on JavaScript, HTML, and CSS, and D3.js.

## Files Index

Following files are attached:

1. <a href="https://github.com/kk-deng/JavaScript-Challenge/blob/main/UFO-level-2/index.html">index.html</a>: Main page with required HTML structures.

2. <a href="https://github.com/kk-deng/JavaScript-Challenge/blob/main/UFO-level-2/static/js/app.js">app.js</a>: Main D3 JavaScript file to populate data dynamically. 

## Summary of functions

* A function which takes input data array to append data into HTML:

```javascript
// Build a callable function to convert data into a table
function buildData(inputData) {
    // Get a reference to the table body
    var tbody = d3.select("tbody");

    // Clean the existing codes inside tbody html
    tbody.html("");

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
```

* An object was created to compare multiple filter values:

```javascript
// Create filter for all conditions
ufoFilter = {
    datetime: inputDatetime.value,
    city: inputCity.value,
    state: inputState.value,
    country: inputCountry.value,
    shape: inputShape.value
};

// Get filtered data
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
```

* A reset function was used to triger when clicking reset button:

```javascript
function resetTable() {
    // Clear out all input values
    d3.select("#datetime").node().value = "";
    d3.select("#city").node().value = "";
    d3.select("#state").node().value = "";
    d3.select("#country").node().value = "";
    d3.select("#shape").node().value = "";
    
    // Show all data as a default page
    buildData(tableData);
};
```

## View Screenshots
* Default page

<img src="https://github.com/kk-deng/JavaScript-Challenge/blob/main/Screenshots/default.png">

* Multiple filters

<img src="https://github.com/kk-deng/JavaScript-Challenge/blob/main/Screenshots/multifilter.png">
