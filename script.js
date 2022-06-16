function sum(num1, num2) {
  if (
    num1 == parseInt(num1) &&
    num2 == parseInt(num2) &&
    num1 >= 0 &&
    num2 >= 0
  ) {
    result = num1 + num2;
    return result;
  } else {
    throw new Error(`[divide] Impossible to divide ${num1} / ${num2}`);
  }
}

function mult(num1, num2, base, result) { 

  if (base >= num2) {
    return result;
  }

  return mult(num1, num2, sum(base, 1), sum(result, num1));
}

function div(num1, num2, base) {

  if (num1 < 0 || num2 < 0) {
    throw new Error(`[divide] Impossible to divide ${num1} / ${num2}`);
  }

  if (mult(base, num2, 0, 0) >= num1) {
    return base
  }

  return div(num1, num2, sum(base, 1))
}

document.getElementById("button").addEventListener("click", function () {
  document.getElementById("result").innerHTML = "";

  const num1 = Number(document.getElementById("1").value);
  const num2 = Number(document.getElementById("2").value);
  let result = div(num1, num2, 0);

  document.getElementById("result").innerHTML = result;
});
