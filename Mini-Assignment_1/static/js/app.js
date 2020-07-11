// Use D3 to select the table
var tableData = grades;
// Use D3 to select the table body
var tbody = d3.select("tbody")
// Use a forEach function to loop through the array of objects (from your data)
grades.forEach(function(GradeData) {
  var row = tbody.append("tr")
  Object.entries(GradeData).forEach(function([key, value]) {
    console.log(key, value);
  
    var cell = row.append("td");
    cell.text(value);
    });
});

