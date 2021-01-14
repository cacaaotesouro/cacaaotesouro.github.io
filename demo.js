function myFunction()
{
var a=document.getElementById("text_a").value;

if (a=="hello")
  {
document.getElementById("answer").innerText="Acertou! Agora sua próxima pista: O que é o que é XXX YYY ZZZ";
  }
else
  {
document.getElementById("answer").innerHTML="Oops! Errou! Tente novamente!";
  }
}
