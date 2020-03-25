var tableData = data;
console.log(tableData);

tbody = d3.select("tbody")

function displayData (data){ 
    tbody.text("")
    data.forEach(function(UFOsightings){
    console.log(UFOsightings);
    updateTable = tbody.append("tr")
    Object.entries(UFOsightings).forEach(function([key, value]){
        console.log(key, value);
        finalTable = updateTable.append("td").text(value)	
    })
})}

displayData(tableData)

var filterInput = d3.select("#datetime")
var button = d3.select("filter-btn")

function changeHandler(){
    d3.event.preventDefault();
    console.log(filterInput.property("value"));
    var filtered_table = tableData.filter(UFOsightings => UFOsightings.datetime===filterInput.property("value"))
    displayData(filtered_table)
}

button.on("click", changeHandler) 
filterInput.on("change", changeHandler)