"use strict";
const arrEntry =[];
function addEntry()
{
    var idInput = document.getElementById('idInput').value;
    var nameInput = document.getElementById('nameInput').value;
    var salInput = document.getElementById('salInput').value;
    arrEntry.push({ID:idInput,Name:nameInput,TotalSalary:salInput});
    var text = "<table><tr><td>ID</td><td>Name</td><td>Salary</td></tr>"
    for(var i=0;i<arrEntry.length;i++)
    {
        text += "<tr><td>"+arrEntry[i].ID+"</td><td>"+arrEntry[i].Name+"</td><td>"
        +arrEntry[i].TotalSalary+"</td></tr>";   
    }
    text += "</table>";
    arrEntry[0].TotalSalary = 30000;
    document.getElementById('divTable').innerHTML=text;
    populate();
    document.getElementById('idInput').value="";
    document.getElementById('nameInput').value="";
    document.getElementById('salInput').value="";
}
function populate()
{
    var text = "<table><tr><td>ID</td><td>Name</td><td>Salary</td></tr>"
for( var i=0;i<arrEntry.length;i++){
    text += "<tr><td>"+arrEntry[i].ID+"</td><td>"+arrEntry[i].Name+"</td><td>"
    +arrEntry[i].TotalSalary+"</td></tr>";
}
document.getElementById('divTable').innerHTML=text;
}