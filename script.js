function cambiasimbolo(event){
  const simbolo = event.currentTarget.querySelector(".simbolo");

  if (simbolo.textContent === "+"){
    simbolo.textContent = "-";
  } else {
    simbolo.textContent = "+";
  }
}
