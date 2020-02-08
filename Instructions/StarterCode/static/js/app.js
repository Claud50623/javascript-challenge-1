//call the information from data.js
var data_table = data;
// use d3.select function to select the first dataset in the table body that matches the date entered in the input box
var tbody = d3.select("tbody");

//build a table using the data in the data.js file, erase any data that is in the table
function buildTable(data) {
  //
  tbody.html("");

  //loop through the rows of data and collect/add all the data records that match the date entered in the input box
  data.forEach((dataRow) => {
    var row = tbody.append("tr");
    //looping the values and appending (adding)
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

// when a click happens - the datetime id will be added to the date var
function handleClick() {
  var date = d3.select("#datetime").property("value");
  //The data var will be placed in an new variable
  let filteredData = data_table;
  //if else statement begins - with parameter date
  if (date) {
    //filtering out the date if date is available
    filteredData = filteredData.filter(row => row.datetime === date);
  }
//will build the table with the filtered results 
  buildTable(filteredData);
}

//when the id filter-btn is clicked d3 will select all 
d3.selectAll("#filter-btn").on("click", handleClick);



//building table with tableData
buildTable(tableData);
