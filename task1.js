const arrEntry =[];
function addEntry()
{
    var idInput = document.getElementById('idInput').value;
    var nameInput = document.getElementById('nameInput').value;
    var salInput = document.getElementById('salInput').value;
    arrEntry.push({ID:idInput,Name:nameInput,TotalSalary:salInput,Action:""});
    var text = "<table><tr><td>ID</td><td>Name</td><td>TotalSalary</td><td>Action</td></tr>"
    for(i=0;i<arrEntry.length;i++)
    {
        text += "<tr><td>"+arrEntry[i].ID+"</td><td>"+arrEntry[i].Name+"</td><td>"
        +arrEntry[i].TotalSalary+"</td><td>"+"<a onclick='deleteEntry(this)'>Delete</a>"+"</td></tr>";   
    }
    text += "</table>";
    document.getElementById('newTable').innerHTML=text;
    document.getElementById('idInput').value="";
    document.getElementById('nameInput').value="";
    document.getElementById('salInput').value="";
}
function deleteEntry(args)
{
    tr= args.parentNode.parentNode;
    let index = tr.rowIndex;
    arrEntry.splice(index-1,1);
    populate();
}
function populate()
{
    var text = "<table><tr><td>ID</td><td>Name</td><td>TotalSalary</td><td>Action</td></tr>"
for(i=0;i<arrEntry.length;i++){
    text += "<tr><td>"+arrEntry[i].ID+"</td><td>"+arrEntry[i].Name+"</td><td>"
    +arrEntry[i].TotalSalary+"</td><td>"+"<a onclick='deleteEntry(this)'>Delete</a>"+"</td></tr>";
}
document.getElementById('newTable').innerHTML=text;
}
// //////////////////  task2    /////////////

class newEntry{
    constructor(ID,Name,TotalSalary){
        this.ID=ID;
        this.Name=Name;
        this.TotalSalary=TotalSalary;
    }
}
let myEntries = new newEntry(123,"Anshika",34000);
var text = "<table><tr><td><b>ID</b></td><td><b>Name</b></td><td><b>TotalSalary</b></td></tr>";
text += "<tr><td>"+myEntries.ID+"</td><td>"+myEntries.Name+"</td><td>"+myEntries.TotalSalary+"</td></tr>"; 
text += "</table>";
document.getElementById('divTask2').innerHTML=text;

// ////////////   task3   ////////////

myJSON = '{"ID":"1","Name":"John","TotalSalary":"34000"}';
const myObj = JSON.parse(myJSON);

var text = "<table><tr><td><b>ID</b></td><td><b>Name</b></td><td><b>TotalSalary</b></td></tr>";
text += "<tr><td>"+myObj.ID+"</td><td>"+myObj.Name+"</td><td>"+myObj.TotalSalary+"</td></tr>"; 
text += "</table>";
document.getElementById('divTask3').innerHTML = text;

// //////////////////    Task4 ////////////////////

class details1{
    constructor(ID,Name,TotalSalary){
        this.ID=ID;
        this.Name=Name;
        this.TotalSalary=TotalSalary;
    }
    jsonAccept(jsonobj){
        const obj = JSON.parse(jsonobj);
        this.ID = obj.ID;
        this.Name = obj.Name;
        this.TotalSalary = obj.TotalSalary;
    }
}
let objDetails = new details1(1,"Harry",12000);
jObj = '{"ID":"3","Name":"Smith","TotalSalary":"30424"}';
objDetails.jsonAccept(jObj);

var text = "<table><tr><td><b>ID</b></td><td><b>Name</b></td><td><b>TotalSalary</b></td></tr>";
text += "<tr><td>"+objDetails.ID+"</td><td>"+objDetails.Name+"</td><td>"+objDetails.TotalSalary+"</td></tr>"; 
text += "</table>";
document.getElementById('divTask4').innerHTML = text;