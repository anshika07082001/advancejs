"use strict";
const details = [{ID:2,Name:"Raj",TotalSalary:4000},
{ID:3,Name:"harry",TotalSalary:8000},
{ID:4,Name:"john",TotalSalary:200}];

var text = "<table><tr><td>ID</td><td>Name</td><td>Salary</td></tr>"
    for(var i=0;i<details.length;i++)
    {
        text += "<tr><td>"+details[i].ID+"</td><td>"+details[i].Name+"</td><td>"
        +details[i].TotalSalary+"</td></tr>"; 
        details[i].TotalSalary = 30000;  
    }
    text += "</table>";
    document.getElementById('divForm').innerHTML=text;
    populate();

function populate()
{
    var text = "<table><tr><td>ID</td><td>Name</td><td>Salary</td></tr>"
    for( var i=0;i<details.length;i++)
    {
        text += "<tr><td>"+details[i].ID+"</td><td>"+details[i].Name+"</td><td>"
        +details[i].TotalSalary+"</td></tr>";
    }
    document.getElementById('divForm').innerHTML=text;
}