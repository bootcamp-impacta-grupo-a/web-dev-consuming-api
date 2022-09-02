function buildCalculateImc() {
  var heightElem = document.querySelector("#altura")
  var weightElem = document.querySelector("#peso")

  return function () {
    var height = heightElem.value
    var weight = weightElem.value

    doCalculateImc(height, weight)
  }
}

function doCalculateImc(height, weight) {
  const payload = {
    height,
    weight,
  }

  const result = fetch("http://localhost:8080/calculate", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  }).then(response => response.json())

  document.querySelector("#imc").innerHTML = result
}

window.onload = function (evt) {
  console.log(evt)

  var btn = document.querySelector("#main-action")
  btn.addEventListener("click", buildCalculateImc())
}
