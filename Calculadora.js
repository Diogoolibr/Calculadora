function calcularRaizes() {
  var a = document.getElementById("ValorA").value;
  var b = document.getElementById("ValorB").value;
  var c = document.getElementById("ValorC").value;
  var delta = b * b - 4 * a * c;

  if (delta >= 0) {
    var x1 = (-b + Math.sqrt(delta)) / (2 * a);
    var x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.getElementById("resultado").innerHTML =
      "Resultado: Raizes x1 = " + x1 + " e x2 = " + x2;
  } else {
    document.getElementById("resultado").innerHTML =
      "Resultado: A equação não possui raizes reais";
  }
}

function exibirParabola() {
  var canvas = document.getElementById("parabolacanvas");
  var context = canvas.getContext("2d");

  context.clearRect(0, 0, canvas.width, canvas.height);

  var a = parseFloat(document.getElementById("ValorA").value);
  var b = parseFloat(document.getElementById("ValorB").value);
  var c = parseFloat(document.getElementById("ValorC").value);
  context.strokeStyle = "blue";
  context.lineWidth = 2;

  context.beginPath();

  for (var x = -10; x <= 10; x += 0.1) {
    var y = a * x * x + b * x + c;
    var pixelX = (x + 10) * (canvas.width / 20);
    var pixelY = canvas.height - (y + 10) * (canvas.height / 20);

    if (x == -10) {
      context.moveTo(pixelX, pixelY);
    } else {
      context.lineTo(pixelX, pixelY);
    }
  }

  context.stroke();
  context.closePath();
  desenharEixos(canvas);
}

function desenharEixos(canvas) {
  var context = canvas.getContext("2d");

  context.strokeStyle = "black";
  context.lineWidth = 1;
  context.beginPath();

  context.moveTo(0, canvas.height / 2);
  context.lineTo(canvas.width, canvas.height / 2);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.moveTo(canvas.width / 2, 0);
  context.lineTo(canvas.width / 2, canvas.height);

  context.stroke();
  context.closePath();
}

exibirParabola();
