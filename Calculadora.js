 function calcularRaizes(){
  var a = document.getElementById("ValorA").value;
  var b = document.getElementById("ValorB").value;
  var c = document.getElementById("ValorC").value;
  var delta = (b*b) - (4*a*c);

  if (delta >= 0){
    var x1 = (-b + Math.sqrt(delta))/(2*a);
    var x2 = (-b - Math.sqrt(delta))/(2*a);
    document.getElementById("resultado").innerHTML = "Resultado: Raizes x1 = " + x1 + " e x2 = " + x2;
  } else {
    document.getElementById("resultado").innerHTML = "Resultado: A equação não possui raizes reais";
  }
}
     
