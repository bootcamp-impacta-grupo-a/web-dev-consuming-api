function buildCalculateImc() {
  var heightElem = document.querySelector("#altura")
  var weightElem = document.querySelector("#peso")

  return function () {
    var height = heightElem.value
    var weight = weightElem.value

    doCalculateImc({ height, weight })
  }
}

async function doCalculateImc(payload) {
  const result = await fetch("http://localhost:8080/imc/calculate", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  }).then(response => response.json())

  document.querySelector("#imc").innerHTML = `${result.imc} - ${result.imcDescription}`
}

window.onload = function (evt) {
  var btn = document.querySelector("#main-action")
  btn.addEventListener("click", buildCalculateImc())
}
