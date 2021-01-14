function myFunction()
{
var a=document.getElementById("text_a").value;

if (a=="GUARUJEBA")
  {
document.getElementById("answer").innerText="Abro para a acolhida e também para a despedida !";
  }
else
  {
document.getElementById("answer").innerHTML="Oops! Errou Rude! Tente novamente!";
  }
}
