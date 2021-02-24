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
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // fitler the data
    var filteredData = tableData.filter(signting => signting.datetime === inputValue);
  
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