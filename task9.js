const arrEntry =[];
function addEntry()
{
    document.getElementById('error').innerHTML="";
    var idInput = document.getElementById('idInput').value;
    var nameInput = document.getElementById('nameInput').value;
    var salInput = document.getElementById('salInput').value;
    try
    {
        if(idInput == "" && nameInput == "" && salInput =="")
        {
            throw "All fields must be filled";
        }
        if(nameInput.match(/[0-9]/)){
            throw "Name should not contain numbers";
        }
        arrEntry.push({ID:idInput,Name:nameInput,TotalSalary:salInput});
        var text = "<table><tr><td>ID</td><td>Name</td><td>Salary</td></tr>"
        for(i=0;i<arrEntry.length;i++)
        {
            text += "<tr><td>"+arrEntry[i].ID+"</td><td>"+arrEntry[i].Name+"</td><td>"
            +arrEntry[i].TotalSalary+"</td></tr>";   
        }
        text += "</table>";
        document.getElementById('divTable').innerHTML=text;
        document.getElementById('idInput').value="";
        document.getElementById('nameInput').value="";
        document.getElementById('salInput').value="";
    }
    catch(e)
    {
        document.getElementById('error').innerHTML = e;
    }

}
populate();
function populate()
{
    var text = "<table><tr><td>ID</td><td>Name</td><td>Salary</td></tr>"
for(i=0;i<arrEntry.length;i++){
    text += "<tr><td>"+arrEntry[i].ID+"</td><td>"+arrEntry[i].Name+"</td><td>"
    +arrEntry[i].TotalSalary+"</td></tr>";
}
document.getElementById('divTable').innerHTML=text;
}