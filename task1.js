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