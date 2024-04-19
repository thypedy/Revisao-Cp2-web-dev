function calcular() {
  let digi = parseInt(document.getElementById("numBooks").value);
  let res = document.getElementById("resultado");
  let total = "";

  if (digi <= 60) {
    res.innerHTML = `Não há multas`;
  } else {
    total = 100 * (digi - 60);
    res.innerHTML = `A multa foi de ${total} reais`;
  }
}
