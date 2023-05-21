var h1= document.createElement("h1");
h1.innerHTML="GET & DISPLAY THE API DATA";
h1.style.textAlign="center";
h1.style.marginTop="50px";

var div=document.createElement("div");
div.style.textAlign="center";

var input=document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "country");input.style.width="30%";
input.setAttribute("placeholder" , "Enter the CountryName");

var linebreaker= document.createElement("br");
var button=document.createElement("button");
button.setAttribute("type" , "button");
button.classList.add("brn", "btn-primary");
button.style.margin="20px";
button.style.width="10%";
button.innerHTML="Search";
button.addEventListener("click", fnclick);
var outputdata=document.createElement("div");
outputdata.style.fontSize="20px";

async function fnclick(){                 
    let name=document.getElementById("country","probability").value;
    console.log(name);
    let url=`https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane${name}`;
    let country=await fetch(url);
    let probability=await country.json();
    console.log(probability);
    var index=probability.length-1;
    console.log(probability[index]);
   
}


div.append(input,linebreaker,button,outputdata)
document.body.append(h1)
document.body.append(div);
