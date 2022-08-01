var inputText = document.getElementById('inputDis');
var txt = inputText.value;
function evaluates()
{
    location.reload();
}
function calculation()
{
   try{
    let answer = eval(inputText.value);
    inputText.value = answer;
   }
   catch(e)
   {
    inputText.value="Error";
   }
}
function numberS(args)
{
    num = args.id;
    document.getElementById('inputDis').value += num;    
    flagOp=0;
}
let flagDec=0;
let flagOp=0;
function operators(op)
{
    txt = inputText.value;
    if( op== "+" || op== "-" || op== "*" || op== "/")
    {
        flagOp++;
        if(flagOp==1 && txt.trim()!="")
        {
            if(op== "*")
            {
                document.getElementById('inputDis').value += "*";
            }
            if(op=="/")
            {
                document.getElementById('inputDis').value += "/";
            }
            if(op=="-")
            {
                document.getElementById('inputDis').value += "-";
            }
            if(op=="+"){
                document.getElementById('inputDis').value += "+";
            }

            flagDec=0;
        }
    }   
    else //not operator
    {
        flagOp=0;
    }   
} 
function dot()
{
    flagDec++;
    if(flagDec==1)
    {
        document.getElementById('inputDis').value += ".";
    }
    else 
    {
        return;
    }
}