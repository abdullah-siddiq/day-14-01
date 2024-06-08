class Calculator {
  constructor() {
      this.op1 = null;
      this.op2 = null;
      this.op = "";
      this.memory = 0;   
  }

  appendNumber(n) {
      if (this.op2 === null) this.op2 = "";
      if (n === ".") {
          if (!this.op2.includes(".")) {
              if (this.op2 === "") {
                  this.op2 = "0.";
              } else {
                  this.op2 = this.op2 + n;
              }
              document.getElementById("op2Dis").innerText = this.op2;
          }
      } else {
          if (this.op2 === "0") this.op2 = "";

          this.op2 = this.op2 + n;
          document.getElementById("op2Dis").innerText = this.op2;
      }
  }

  allClear() {
      this.op1 = null;
      this.op2 = null;
      this.op = "";
      document.getElementById("opDis").innerText = "";
      document.getElementById("op1Dis").innerText = "";
      document.getElementById("op2Dis").innerText = "";
  }

  del() {
      if (this.op2 !== null) {
          this.op2 = this.op2.toString().slice(0, -1);
          if (this.op2.length === 0) {
              this.op2 = null;
              document.getElementById("op2Dis").innerText = "";
          } else document.getElementById("op2Dis").innerText = this.op2;
      }
  }

  operate(op) {
      if (this.op1 === null && this.op2 === null) {
          document.getElementById("op2Dis").innerText = "No Operands Found";
      } else if (op === "=") {
          if (this.op1 !== null && this.op2 !== null) {
              let res = eval(this.op1 + this.op + this.op2);
              this.op1 = null;
              this.op2 = res;
              this.op = null;
              document.getElementById("opDis").innerText = "";
              document.getElementById("op1Dis").innerText = "";
              document.getElementById("op2Dis").innerText = res;
          }
      } else if (
          op === "+" ||
          op === "-" ||
          op === "*" ||
          op === "/" ||
          op === "%"
      ) {
          if (this.op1 === null) {
              this.op1 = this.op2;
              this.op2 = null;
              this.op = op;
              //console.log(op);
              document.getElementById("op1Dis").innerText = this.op1;
              document.getElementById("opDis").innerText = this.op;
              document.getElementById("op2Dis").innerText = "";
          } else if (this.op2 === null) {
              this.op = op;
              document.getElementById("opDis").innerText = this.op;
          } else {
              console.log(this.op1 + this.op + this.op2);
              let res = eval(this.op1 + this.op + this.op2);
              this.op1 = res;
              this.op2 = null;
              this.op = op;
              document.getElementById("op1Dis").innerText = this.op1;
              document.getElementById("opDis").innerText = this.op;
              document.getElementById("op2Dis").innerText = "";
          }
      }
  }

  squareRoot() {
      if (this.op2 !== null) {
          this.op2 = Math.sqrt(this.op2);
          document.getElementById("op2Dis").innerText = this.op2;
      }
  }

  square() {
      if (this.op2 !== null) {
          this.op2 = Math.pow(this.op2, 2);
          document.getElementById("op2Dis").innerText = this.op2;
      }
  }

  memoryClear() {
      this.memory = 0;
      console.log("Memory Cleared");
  }

  memoryAdd() {
      if (this.op2 !== null) {
          this.memory += parseFloat(this.op2);
          console.log("Memory Add:", this.memory);
      }
  }

  memorySubtract() {
      if (this.op2 !== null) {
          this.memory -= parseFloat(this.op2);
          console.log("Memory Subtract:", this.memory);
      }
  }
}

var cal = new Calculator();
var titleDiv = document.createElement("div");
titleDiv.setAttribute("class", "titleDiv");
titleDiv.innerText = "Calculator";
document.body.appendChild(titleDiv);

var calculatorFrame = document.createElement("div");
calculatorFrame.setAttribute("class", "calculatorFrame");

var calcDisplay = document.createElement("div");
calcDisplay.setAttribute("class", "calcDisplay");

var op1Dis = document.createElement("div");
op1Dis.setAttribute("class", "op1Dis");
op1Dis.setAttribute("id", "op1Dis");
calcDisplay.appendChild(op1Dis);

var opDis = document.createElement("div");
opDis.setAttribute("class", "opDis");
opDis.setAttribute("id", "opDis");
calcDisplay.appendChild(opDis);

var op2Dis = document.createElement("div");
op2Dis.setAttribute("class", "op2Dis");
op2Dis.setAttribute("id", "op2Dis");
calcDisplay.appendChild(op2Dis);

calculatorFrame.appendChild(calcDisplay);

var buttonsFrame = document.createElement("div");
buttonsFrame.setAttribute("class", "buttonsFrame");

var button0 = document.createElement("button");
button0.setAttribute("onclick", "cal.appendNumber('0')");
button0.innerText = 0;

var buttonDot = document.createElement("button");
buttonDot.setAttribute("onclick", "cal.appendNumber('.')");
buttonDot.setAttribute("class", "oprClass");
buttonDot.innerText = ".";

var button1 = document.createElement("button");
button1.setAttribute("onclick", "cal.appendNumber('1')");
button1.innerText = 1;

var button2 = document.createElement("button");
button2.setAttribute("onclick", "cal.appendNumber('2')");
button2.innerText = 2;

var button3 = document.createElement("button");
button3.setAttribute("onclick", "cal.appendNumber('3')");
button3.innerText = 3;

var button4 = document.createElement("button");
button4.setAttribute("onclick", "cal.appendNumber('4')");
button4.innerText = 4;

var button5 = document.createElement("button");
button5.setAttribute("onclick", "cal.appendNumber('5')");
button5.innerText = 5;

var button6 = document.createElement("button");
button6.setAttribute("onclick", "cal.appendNumber('6')");
button6.innerText = 6;

var button7 = document.createElement("button");
button7.setAttribute("onclick", "cal.appendNumber('7')");
button7.innerText = 7;

var button8 = document.createElement("button");
button8.setAttribute("onclick", "cal.appendNumber('8')");
button8.innerText = 8;

var button9 = document.createElement("button");
button9.setAttribute("onclick", "cal.appendNumber('9')");
button9.innerText = 9;

var buttonPlus = document.createElement("button");
buttonPlus.setAttribute("onclick", "cal.operate('+')");
buttonPlus.setAttribute("class", "oprClass");
buttonPlus.innerText = "+";

var buttonMinus = document.createElement("button");
buttonMinus.setAttribute("onclick", "cal.operate('-')");
buttonMinus.setAttribute("class", "oprClass");
buttonMinus.innerText = "-";

var buttonInt = document.createElement("button");
buttonInt.setAttribute("onclick", "cal.operate('*')");
buttonInt.setAttribute("class", "oprClass");
buttonInt.innerText = "*";

var buttonDiv = document.createElement("button");
buttonDiv.setAttribute("onclick", "cal.operate('/')");
buttonDiv.setAttribute("class", "oprClass");
buttonDiv.innerText = "/";

var buttonMod = document.createElement("button");
buttonMod.setAttribute("onclick", "cal.operate('%')");
buttonMod.setAttribute("class", "oprClass");
buttonMod.innerText = "%";

var buttonSqrt = document.createElement("button");
buttonSqrt.setAttribute("onclick", "cal.squareRoot()");
buttonSqrt.setAttribute("class", "oprClass");
buttonSqrt.innerText = "√";

var buttonSquare = document.createElement("button");
buttonSquare.setAttribute("onclick", "cal.square()");
buttonSquare.setAttribute("class", "oprClass");
buttonSquare.innerText = "x²";

var buttonMAdd = document.createElement("button");
buttonMAdd.setAttribute("onclick", "cal.memoryAdd()");
buttonMAdd.setAttribute("class", "oprClass");
buttonMAdd.innerText = "M+";

var buttonMSub = document.createElement("button");
buttonMSub.setAttribute("onclick", "cal.memorySubtract()");
buttonMSub.setAttribute("class", "oprClass");
buttonMSub.innerText = "M-";

var buttonMC = document.createElement("button");
buttonMC.setAttribute("onclick", "cal.memoryClear()");
buttonMC.setAttribute("class", "oprClass");
buttonMC.innerText = "MC";

var buttonAC = document.createElement("button");
buttonAC.setAttribute("class", "twox oprClassRed");
buttonAC.innerText = "AC";
buttonAC.setAttribute("onclick", "cal.allClear()");

var buttonDel = document.createElement("button");
buttonDel.innerText = "DEL";
buttonDel.setAttribute("class", "oprClassRed");
buttonDel.setAttribute("onclick", "cal.del()");

var buttonEQ = document.createElement("button");
buttonEQ.innerText = "=";
buttonEQ.setAttribute("class", "oprClass");
buttonEQ.setAttribute("onclick", "cal.operate('=')");

buttonsFrame.append(
  buttonAC,
  buttonDel,
  buttonMAdd,
  buttonMSub,
  buttonMC,
  buttonMod,
  buttonSqrt,
  buttonSquare,
  button1,
  button2,
  button3,
  buttonPlus,
  button4,
  button5,
  button6,
  buttonMinus,
  button7,
  button8,
  button9,
  buttonDiv,
  buttonDot,
  button0,
  buttonInt,
  buttonEQ,
 
);

calculatorFrame.appendChild(buttonsFrame);
document.body.append(calculatorFrame);

document.addEventListener("keypress", (event) => {
  let keyName = event.key;
  if (Number(keyName) || keyName === "0" || keyName === ".")
      cal.appendNumber(keyName);
  if (["+", "-", "%", "/", "*"].includes(keyName)) cal.operate(keyName);
  if (keyName === "Enter") cal.operate("=");
});
