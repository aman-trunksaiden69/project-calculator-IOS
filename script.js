const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const neagtive = document.querySelector('.negative');
const percent = document.querySelector('.percent');


let firstvalue = "";
let isfirstvalue = false;
let secondvalue = "";
let issecondvalue = false;
let sign = "";
let resultvalue = 0;

for(let i = 0; i< numbers.length; i++){
  numbers[i].addEventListener('click', (e) => {
    let atr = e.target.getAttribute('value');
    if(isfirstvalue === false){
       GetFirstValue(atr);
    }
    if(issecondvalue === false){
        GetSecondValue(atr);
    }
  })   
}

//FUNCTIONS:-

function GetFirstValue(el) {
  result.innerHTML = "";
  firstvalue += el;
  result.innerHTML = firstvalue;
  firstvalue = + firstvalue;
}

function GetSecondValue(el) {
  if(firstvalue != "" && sign != ""){
    secondvalue += el;
    result.innerHTML = secondvalue;
    secondvalue = + secondvalue;
  }
}

function GetSigns() {
    for(let i = 0; i < signs.length; i++){
        signs[i].addEventListener('click', (e) => {
          sign = e.target.getAttribute('value');
          console.log(sign)
          isfirstvalue = true;
        })
    }
}

function Equal() {
    equals.addEventListener('click', () => {
        result.innerHTML = "";
        if(sign === "+"){
            resultvalue = firstvalue + secondvalue;
        } else if(sign === "-"){
            resultvalue = firstvalue - secondvalue;
        } else if(sign === "x"){
            resultvalue = firstvalue * secondvalue;
        } else if(sign === "/"){
            resultvalue = firstvalue / secondvalue;
        }
        result.innerHTML = resultvalue;
        firstvalue = resultvalue;
        secondvalue = "";
    
        CheckResultLength();
    })
    
}

function CheckResultLength() {
    resultvalue = JSON.stringify(resultvalue);
    if(resultvalue.length >= 8){
      resultvalue = JSON.parse(resultvalue);
      result.innerHTML = resultvalue.toFixed(5);
    }
}

function Negatives() {
    neagtive.addEventListener('click', () => {
        result.innerHTML = "";
        if(firstvalue != ""){
            resultvalue = -firstvalue;
            firstvalue = resultvalue;
        }
    
        if(firstvalue != "" && secondvalue != "" && sign != ""){
           resultvalue = -resultvalue; 
        }
    
        result.innerHTML = resultvalue;
    })
    
}

function Percent() {
    percent.addEventListener('click', () => {
        result.innerHTML = "";
        if(firstvalue != ""){
            resultvalue = firstvalue / 100;
            firstvalue = resultvalue;
        }
    
        if(firstvalue != "" && secondvalue != "" && sign != ""){
           resultvalue = resultvalue / 100; 
        }
    
        result.innerHTML = resultvalue;
    })
    
}

function Clear() {
    clear.addEventListener('click', () => {
        result.innerHTML = 0;
    
         firstvalue = "";
         isfirstvalue = false;
         secondvalue = "";
         issecondvalue = false;
         sign = "";
         resultvalue = 0;
    
    })
}



GetSigns();
Equal();
Negatives();
Percent();
Clear();