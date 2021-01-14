function myFunction()
{
var a=document.getElementById("text_a").value;

if (a=="hello")
  {
document.getElementById("answer").innerText="Correct!";
  }
else
  {
document.getElementById("answer").innerHTML="Oops!";
  }
}
