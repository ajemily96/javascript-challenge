// from data.js
var tableData = data;

// input the data into the table body (tag in HTML is tbody)
var tbody = d3.select("tbody");

// for each dictionary in the list
tableData.forEach((sighting)=>{
    // create a new row of data
    var row = tbody.append("tr");
    // for each key/value pair in the dictionary
    Object.entries(sighting).forEach(([key, value]) => {
        // create new data point in the new row
        var cell = row.append("td");
        // set the data point value to the 'value' part of the key/value pair
        cell.text(value);
    });
});

// find the button (id in HTML is filter-btn)
var button = d3.select("#filter-btn");

// find the form (id in HTML is form-group)
var form = d3.select("#form-group");

// this function should clear the data in the table and replace it with the filtered data
function filterData() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement_date = d3.select("#datetime");
    var inputElement_city = d3.select("#city");
    var inputElement_state = d3.select("#state");
    var inputElement_country = d3.select("#country");
    var inputElement_shape = d3.select("#shape");
  
    // Get the value property of the input element
    var inputValue_date = inputElement_date.property("value");
    var inputValue_city = inputElement_city.property("value");
    var inputValue_state = inputElement_state.property("value");
    var inputValue_country = inputElement_country.property("value");
    var inputValue_shape = inputElement_shape.property("value");
  
    // fitler the data
    var filteredData = tableData

    if (inputValue_date !== null && inputValue_date !== '') {
        filteredData= filteredData.filter(signting => signting.datetime === inputValue_date);
    };

    if (inputValue_city !== null && inputValue_city !== '') {
        filteredData = filteredData.filter(signting => signting.city === inputValue_city);
    };

    if (inputValue_state !== null && inputValue_state !== '') {
        filteredData = filteredData.filter(signting => signting.state === inputValue_state);
    };

    if (inputValue_country !== null && inputValue_country !== '') {
        filteredData = filteredData.filter(signting => signting.country === inputValue_country);
    };

    if (inputValue_shape !== null && inputValue_shape !== '') {
        filteredData = filteredData.filter(signting => signting.shape === inputValue_shape);
    };

    // // select the table
    // var tbody = d3.select("tbody");
  
    // remove any rows from the table
    tbody.html("");
  
    // append filtered data rows to table
    filteredData.forEach((sighting)=>{
        // create a new row of data
        var row = tbody.append("tr");
        // for each key/value pair in the dictionary
        Object.entries(sighting).forEach(([key, value]) => {
            // create new data point in the new row
            var cell = row.append("td");
            // set the data point value to the 'value' part of the key/value pair
            cell.text(value);
        });
    });
  };

// Create event handlers 
button.on("click", filterData);
form.on("submit",filterData);