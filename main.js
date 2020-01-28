const buttonOne   = document.getElementById("buttonFour");
const buttonTwo   = document.getElementById("buttonSix");
const buttonThree = document.getElementById("buttonEight");
const buttonFour  = document.getElementById("buttonTen");

const buttonYes   = document.getElementById("buttonBukvYes");
const buttonNo    = document.getElementById("buttonBukvNo");
const darkOn      = document.getElementById("darkModeOn");
const darkOf      = document.getElementById("darkModeOf");
const effOn       = document.getElementById("effectOn");
const effOf       = document.getElementById("effectOf");

const upperOn     = document.getElementById("buttonUpperYes");
const upperNo     = document.getElementById("buttonUpperNo");

const start       = document.getElementById("startCreatePass");
let inputValue    = document.getElementById("vvodLengthPass");
let out           = document.getElementById("finish");

let baseNumber    = [0,1,9,2,8,3,7,4,6,5]; 
let metodUpper    = [0,0,1,0,1,0,0,0,0,1,0,0,1,0]; // ВОЗМОЖНОСТЬ СДЕЛАТЬ БУКВЫ В ВВЕРХНЕМ РЕГИСТРЕ
let upperYesNo    = []; // ВОЗМОЖНОСТЬ СДЕЛАТЬ БУКВЫ В ВВЕРХНЕМ РЕГИСТРЕ

let baseWords     = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
let baseWordsNum  = [1,'q',0,'w',2,'e',3,'-','r',4,'t',5,'y',6,'u',7,'i',8,'o',9,'p','a',2,'s',4,'d',6,'f',8,'g','/','h',9,'j',7,'k',5,'l',3,'z',1,'x','c','v','-','@','#','$','6','b','n','m'];
let buttonBase    = []; // для длины 
let baseYesOrNo   = []; // ВОЗМОЖНОСТЬ ИСПОЛЬЗОВАТЬ БУКВЫ
let resultBase    = []; // РЕЗУЛЬТАТ
let xNumber;

// ВКЛ | ВЫКЛ - UPPERCASE
upperOn.addEventListener("click", function(e) {
  upperOn.style = "background: var(--marun); color: white";
  upperNo.style = "background: white; color: black";
  upperYesNo.push(1);
});
upperNo.addEventListener("click", function(e) {
  upperNo.style = "background: var(--marun); color: white";
  upperOn.style = "background: white; color: black";
  upperYesNo.push(0);
});
upperNo.style = "background: var(--marun); color: white";
upperYesNo.push(0);

// КНОПКИ С НАСТРОЙКАМИ . ТЁМНЫЙ РЕЖИМ .ЭФФЕКТЫ
darkOn.addEventListener('click', function(e) {
  document.documentElement.style.setProperty('--bodbc', '#cccccc');
  document.documentElement.style.setProperty('--marun', 'black');
  // document.documentElement.style.setProperty('--radius', '0px');
  darkOf.style = "background: var(--proz); color: black";
  darkOn.style = "background: var(--marun); color: white";
});
darkOf.addEventListener('click', function(e) {
  document.documentElement.style.setProperty('--bodbc', 'white');
  document.documentElement.style.setProperty('--marun', 'maroon');
  darkOn.style = "background: var(--proz); color: black";
  darkOf.style = "background: var(--marun); color: white";
});
darkOf.style = "background: var(--marun); color: white";

effOn.addEventListener('click', function(e) {
  document.documentElement.style.setProperty('--radius', '8px');
  document.documentElement.style.setProperty('--effect', '0.3s ease-in-out');
  document.documentElement.style.setProperty('--sertw', '#c0c0c0');
  effOf.style = "background: var(--proz); color: black";
  effOn.style = "background: var(--marun); color: white";
});
effOf.addEventListener('click', function(e) {
  document.documentElement.style.setProperty('--radius', '0px');
  document.documentElement.style.setProperty('--effect', '0.0s ease-in-out');
  document.documentElement.style.setProperty('--sertw', 'transparent');
  effOn.style = "background: var(--proz); color: black";
  effOf.style = "background: var(--marun); color: white";
});
effOn.style = "background: var(--marun); color: white";

// ОСНОВНЫЕ КНОПКИ
buttonNo.style = "background: var(--marun); color: white";
baseYesOrNo.push(0);
buttonOne.style = "background: var(--marun); color: white";
buttonBase.push(4);

buttonOne.addEventListener("click", function(e) {
  buttonOne.style = "background: var(--marun); color: white";

  buttonTwo.style = "background: white; color: black";
  buttonThree.style = "background: white; color: black";
  buttonFour.style = "background: white; color: black";
  inputValue.style = "background: white; color: black";
  buttonBase.push(4);
});
buttonTwo.addEventListener("click", function(e) {
  buttonTwo.style = "background: var(--marun); color: white";

  buttonOne.style = "background: white; color: black";
  buttonThree.style = "background: white; color: black";
  buttonFour.style = "background: white; color: black";
  inputValue.style = "background: white; color: black";
  buttonBase.push(6);
});
buttonThree.addEventListener("click", function(e) {
  buttonThree.style = "background: var(--marun); color: white";

  buttonOne.style = "background: white; color: black";
  buttonTwo.style = "background: white; color: black";
  buttonFour.style = "background: white; color: black";
  inputValue.style = "background: white; color: black";
  buttonBase.push(8);
});
buttonFour.addEventListener("click", function(e) {
  buttonFour.style = "background: var(--marun); color: white";

  buttonOne.style = "background: white; color: black";
  buttonThree.style = "background: white; color: black";
  buttonTwo.style = "background: white; color: black";
  inputValue.style = "background: white; color: black";
  buttonBase.push(10);
});
inputValue.addEventListener("focus", function(e) {
  inputValue.style = "background: var(--marun); color: white";

  buttonFour.style = "background: white; color: black";
  buttonOne.style = "background: white; color: black";
  buttonThree.style = "background: white; color: black";
  buttonTwo.style = "background: white; color: black";
});

inputValue.addEventListener("blur", function(e) {
  inputValue.style = "background: var(--marun); color: white";

  buttonFour.style = "background: white; color: black";
  buttonOne.style = "background: white; color: black";
  buttonThree.style = "background: white; color: black";
  buttonTwo.style = "background: white; color: black";
  let numVvod = Number(document.getElementById("vvodLengthPass").value);
  buttonBase.push(numVvod);
});

buttonYes.addEventListener("click", function(e) {
  buttonYes.style = "background: var(--marun); color: white";
  buttonNo.style = "background: white; color: black";
  baseYesOrNo.push(1);
});
buttonNo.addEventListener("click", function(e) {
  buttonNo.style = "background: var(--marun); color: white";
  buttonYes.style = "background: white; color: black";
  baseYesOrNo.push(0);
});

start.addEventListener("click", function(e) {
  xNumber = buttonBase[buttonBase.length - 1];

  startOperation();
  check();
  out.innerHTML = resultBase.join("");
  console.log(out.innerHTML.length + " | " + out.innerHTML);
  resultBase.length = 0;
});

function check() 
{
  out.innerHTML = " ";
  if (resultBase.length != xNumber) startOperation();
  if (resultBase.length < xNumber) startOperation();
  if (resultBase.includes(undefined)) startOperation();
}

function startOperation() 
{
  resultBase.length = 0;
  let trueOrFalse = baseYesOrNo[baseYesOrNo.length - 1];
  switch (trueOrFalse) {
    case 1:
      let upperTrueFalse = upperYesNo[upperYesNo.length - 1];
      switch (upperTrueFalse) {
        case 1:
          resultBase.length = 0;
          xNumber = buttonBase[buttonBase.length - 1];
          for (i = 0; i < xNumber; i++) {
            let uppY = metodUpper[Math.ceil(Math.random() * metodUpper.length)];
            if (uppY == 1) 
            {
              let x = baseWordsNum[Math.ceil(Math.random() * baseWordsNum.length)];
              if (typeof x == "string") 
              {
                resultBase.push(x.toUpperCase());
              }
              else {
                resultBase.push(x);
              }
            }
            else {
              let x = baseWordsNum[Math.ceil(Math.random() * baseWordsNum.length)];
              resultBase.push(x);
            }
          }
          break;
        case 0:
          xNumber = buttonBase[buttonBase.length - 1];
          for (i = 0; i < xNumber; i++) {
            let x = baseWordsNum[Math.ceil(Math.random() * baseWordsNum.length)];
            resultBase.push(x);
          }
          break;
        default:
          break; 
      }
      break;
    case 0: 
      xNumber = buttonBase[buttonBase.length - 1];
      for (i = 0; i < xNumber; i++) {
        let x = baseNumber[Math.ceil(Math.random() * baseNumber.length)];
        resultBase.push(x);
      }
      break;
    default:
      break;
  }
}
// let x = buttonBase[buttonBase.length - 1];
// console.log(x);
