import {id,name,salary} from './export.js';

const details = [{ID:2,Name:"Raj",TotalSalary:4000},
{ID:3,Name:"harry",TotalSalary:8000},
{ID:4,Name:"john",TotalSalary:200}];

var objExport = {ID:id,Name:name,TotalSalary:salary};
details.push(objExport);
populateUpdate();
function populateUpdate()
{
    var text = "<table><tr><td><b>ID</b></td><td><b>Name</b></td><td><b>TotalSalary</b></td></tr>"
    for(var i=0;i<details.length;i++)
    {
        text += "<tr><td>"+details[i].ID+"</td><td>"+details[i].Name+"</td><td>"+details[i].TotalSalary+"</td></tr>";
    }
    text+="</table>";
    document.getElementById('divTask7').innerHTML=text;
}
