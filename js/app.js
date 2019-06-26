const Calculadora = {
  operandoUno: 0,
  operandoDos: 0,
  resultado: 0,
  op: "",
  dato: null,
  init() {
    //
    const cero = document.getElementById("0");
    const uno = document.getElementById("1");
    const dos = document.getElementById("2");
    const tres = document.getElementById("3");
    const cuatro = document.getElementById("4");
    const cinco = document.getElementById("5");
    const seis = document.getElementById("6");
    const siete = document.getElementById("7");
    const ocho = document.getElementById("8");
    const nueve = document.getElementById("9");
    const resetBtn = document.getElementById("on");
    const signo = document.getElementById("sign");
    const punto = document.getElementById("punto");
    const sumaKey = document.getElementById("mas");
    const restaKey = document.getElementById("menos");
    const multiKey = document.getElementById("por");
    const divisionKey = document.getElementById("dividido");
    const igualKey = document.getElementById("igual");
    const raizKey = document.getElementById("raiz");
    //
    cero.addEventListener("click", this.numbKey);
    uno.addEventListener("click", this.numbKey);
    dos.addEventListener("click", this.numbKey);
    tres.addEventListener("click", this.numbKey);
    cuatro.addEventListener("click", this.numbKey);
    cinco.addEventListener("click", this.numbKey);
    seis.addEventListener("click", this.numbKey);
    siete.addEventListener("click", this.numbKey);
    ocho.addEventListener("click", this.numbKey);
    nueve.addEventListener("click", this.numbKey);
    resetBtn.addEventListener("click", this.reset);
    signo.addEventListener("click", this.signo);
    punto.addEventListener("click", this.punto);
    sumaKey.addEventListener("click", this.suma);
    restaKey.addEventListener("click", this.resta);
    multiKey.addEventListener("click", this.multi);
    divisionKey.addEventListener("click", this.division);
    igualKey.addEventListener("click", this.resultado);
    raizKey.addEventListener("click", this.raizCuadrada);
    //

    cero.addEventListener("mousedown", this.pressButton);
    cero.addEventListener("mouseup", this.releaseButton);
    uno.addEventListener("mousedown", this.pressButton);
    uno.addEventListener("mouseup", this.releaseButton);
    dos.addEventListener("mousedown", this.pressButton);
    dos.addEventListener("mouseup", this.releaseButton);
    tres.addEventListener("mousedown", this.pressButton);
    tres.addEventListener("mouseup", this.releaseButton);
    cuatro.addEventListener("mousedown", this.pressButton);
    cuatro.addEventListener("mouseup", this.releaseButton);
    cinco.addEventListener("mousedown", this.pressButton);
    cinco.addEventListener("mouseup", this.releaseButton);
    seis.addEventListener("mousedown", this.pressButton);
    seis.addEventListener("mouseup", this.releaseButton);
    siete.addEventListener("mousedown", this.pressButton);
    siete.addEventListener("mouseup", this.releaseButton);
    ocho.addEventListener("mousedown", this.pressButton);
    ocho.addEventListener("mouseup", this.releaseButton);
    nueve.addEventListener("mousedown", this.pressButton);
    nueve.addEventListener("mouseup", this.releaseButton);
    sumaKey.addEventListener("mousedown", this.pressButton);
    sumaKey.addEventListener("mouseup", this.releaseButton);
    restaKey.addEventListener("mousedown", this.pressButton);
    restaKey.addEventListener("mouseup", this.releaseButton);
    multiKey.addEventListener("mousedown", this.pressButton);
    multiKey.addEventListener("mouseup", this.releaseButton);
    divisionKey.addEventListener("mousedown", this.pressButton);
    divisionKey.addEventListener("mouseup", this.releaseButton);
    igualKey.addEventListener("mousedown", this.pressButton);
    igualKey.addEventListener("mouseup", this.releaseButton);
    resetBtn.addEventListener("mousedown", this.pressButton);
    resetBtn.addEventListener("mouseup", this.releaseButton);
    raizKey.addEventListener("mousedown", this.pressButton);
    raizKey.addEventListener("mouseup", this.releaseButton);
    signo.addEventListener("mousedown", this.pressButton);
    signo.addEventListener("mouseup", this.releaseButton);
    punto.addEventListener("mousedown", this.pressButton);
    punto.addEventListener("mouseup", this.releaseButton);
  },
  suma() {
    Calculadora.operandoUno = document.getElementById("display").innerHTML;
    Calculadora.op = "suma";
    display.innerHTML = "";
  },
  resta() {
    Calculadora.operandoUno = document.getElementById("display").innerHTML;
    Calculadora.op = "resta";
    display.innerHTML = "";
  },
  multi() {
    Calculadora.operandoUno = document.getElementById("display").innerHTML;
    Calculadora.op = "multiplicacion";
    display.innerHTML = "";
  },
  division() {
    Calculadora.operandoUno = document.getElementById("display").innerHTML;
    Calculadora.op = "division";
    display.innerHTML = "";
  },
  raizCuadrada() {
    let dato = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = Math.sqrt(dato);
  },
  resultado() {
    Calculadora.operandoDos = document.getElementById("display").innerHTML;
    switch (Calculadora.op) {
      case "suma":
        Calculadora.resultado =
          parseFloat(Calculadora.operandoUno) +
          parseFloat(Calculadora.operandoDos);
        break;
      case "resta":
        Calculadora.resultado =
          parseFloat(Calculadora.operandoUno) -
          parseFloat(Calculadora.operandoDos);
        break;
      case "multiplicacion":
        Calculadora.resultado =
          parseFloat(Calculadora.operandoUno) *
          parseFloat(Calculadora.operandoDos);
        break;
      case "division":
        Calculadora.resultado =
          parseFloat(Calculadora.operandoUno) /
          parseFloat(Calculadora.operandoDos);
        break;
      default:
        this.resultado = 0;
        break;
    }
    display.innerHTML = Calculadora.resultado;
    console.log(Calculadora.resultado);
  },
  numbKey() {
    let idValue = this.id;
    let dato = document.getElementById("display").innerHTML;
    if (dato.length < 8) {
      if (dato !== "0") {
        document.getElementById("display").innerHTML = dato + idValue;
      } else {
        document.getElementById("display").innerHTML = idValue;
      }
    }
  },
  reset() {
    display.innerHTML = "0";
  },
  signo() {
    let dato = document.getElementById("display").innerHTML;
    let dato1 = Number(dato);
    let dato2 = 0;
    dato1 = -1 * dato1;
    dato2 = dato1.toString();
    document.getElementById("display").innerHTML = dato2;
  },
  punto() {
    let hayPunto = false;
    let dato = document.getElementById("display").innerHTML;
    for (let i = 0; i < dato.length; i++) {
      if (dato[i] == ".") {
        hayPunto = true;
      } else {
        // hayPunto = false;
      }
    }
    if (hayPunto == false && dato.length < 8) {
      display.innerHTML = dato + ".";
    }
  },
  pressButton() {
    let idValue = this.id;
    document.getElementById(idValue).style.padding = "3px";
  },
  releaseButton() {
    let idValue = this.id;
    document.getElementById(idValue).style.padding = "0px";
  }
};

Calculadora.init();
