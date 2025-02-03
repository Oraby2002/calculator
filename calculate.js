function addNumbers() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  const result = num1 + num2;

  document.getElementById("result").textContent = result;
}
function subNumbers() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  const result = num1 - num2;

  document.getElementById("result").textContent = result;
}

function miltiNumbers() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  const result = num1 * num2;

  document.getElementById("result").textContent = result;
}
function dividNumbers() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 / num2;
  document.getElementById("result").textContent = result;
}
