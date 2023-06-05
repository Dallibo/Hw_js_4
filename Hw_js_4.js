let age = +prompt("Введите свой возраст")
if (age >= 0 && age <=11){
    alert ("Вы ребенок")
} 
else if (age >= 12 && age <=17){
    alert ("Вы подросток")
} 
else if (age >= 18 && age <=59){
    alert ("Вы взрослый")
} 
else if (age >= 60){
    alert ("Вы пенсионер")
}

let numb = +prompt("Введите число от 0 до 9:");
let numb2;
switch (numb) {
    case 0:
        numb2 = ")";
        break;
    case 1:
        numb2 = "!";
        break;
    case 2:
        numb2 = "@";
        break;
    case 3:
        numb2 = "#";
        break;
    case 4:
        numb2 = "$";
        break;
    case 5:
        numb2 = "%";
        break;
    case 6:
        numb2 = "^";
        break;
    case 7:
        numb2 = "&";
        break;
    case 8:
        numb2 = "*";
        break;
    case 9:
        numb2 = "(";
        break;
}
alert("Знак на этой клавише: " + numb2);

let numb3 = +prompt("Введите трехзначное число");
let first = Math.floor(numb3 / 100);
let second = Math.floor((numb3 / 10) % 10);
let third = numb3 % 10;
if (first === second || first === third || second === third) {
    alert("В числе есть одинаковые цифры");
} 
else {
    alert("В числе нет одинаковых цифр");
};

let year = +prompt("Введите год");
let year2 = false;
if (year % 400 === 0) {
    year2 = true;
} 
else if (year % 4 === 0 && year % 100 !== 0) {
    year2 = true;
}
if (year2) {
    alert("Год высокосный");
} else {
    alert("Год не высокосный");
}

let numb4 = prompt("Введите пятизначное число");
let Palindr = false;
if (numb4.length === 5) {
    let numb5 = numb4.split('').reverse().join('');
if (numb4 === numb5) {
    Palindr = true;
    }
}
if (Palindr) {
    alert("Это число палиндр");
} else {
    alert("Это число не палиндр");
}

let usd = +prompt("Введите колличество USD");
let currency = prompt("Выберите валюту конвертации (EUR, UA или AZN)");
let convert;
switch (currency) {
    case "EUR":
        convert = usd * 0.93;
        break;
    case "UA":
        convert = usd * 37.07;
        break;
    case "AZN":
        convert = usd * 1.7;
        break;
    default:
        alert("Неправильно выбранна валюта");
        break;
}
alert(`Полученная сумма: ${convert.toFixed(2)}`);

let numb6 = +prompt("Введите сумму покупки");
let discount = 0;
if (numb6 >= 200 && numb6 < 300) {
    discount = 0.03;
} else if (numb6 >= 300 && numb6 < 500) {
    discount = 0.05;
} else if (numb6 >= 500) {
    discount = 0.07;
}
let result = numb6 - (numb6 * discount);
alert(`Сумма со скидкой: ${result.toFixed(2)}`);

let circleRadius = +prompt("Введите длинну круга");
let squarePerimeter = +prompt("Введите периметр квадрата");
let squareSide = squarePerimeter / 4;
let circleDiameter = circleRadius * 2;
if (circleDiameter <= squareSide) {
    alert("Круг может поместиться в квадрат");
} else {
    alert("Круг не может поместиться в квадрат");
}

let score = 0;
let answer1 = prompt("Вопрос 1: Какая столица Украины\n(a) Львов\n(b) Киев\n(c) Одесса");
if (answer1.toLowerCase() === "b") {
    score += 2;
}
let answer2 = prompt("Вопрос 2: Какой год считаеться началом 21 века\n(a) 2000\n(b) 2001\n(c) 1999");
if (answer2.toLowerCase() === "b") {
    score += 2;
}
let answer3 = prompt("Вопрос 3: Какая самая большая планета солнечной системы?\n(a) Земля\n(b) Марс\n(c) Юпитер");
if (answer3.toLowerCase() === "c") {
    score += 2;
}
alert(`Вы набрали ${score} балы`);

let day1 = +prompt("Введите день:");
let month1 = +prompt("Введите месяц:");
let year1 = +prompt("Введите год:");
if (day1 >=0 && day1 <=31){
}
if (month1 >=1 && month1 <=12){
}
if (year1 >0){
}

var day2 = parseInt(prompt("Введите день:"));
var month2 = parseInt(prompt("Введите месяц:"));
var year3 = parseInt(prompt("Введите год:"));
var isLeapYear = false;
if ((year3 % 4 === 0 && year3 % 100 !== 0) || year3 % 400 === 0) {
  isLeapYear = true;
}
function getDaysInMonth(month, isLeapYear) {
  var daysInMonth = 31;

  if (month2 === 4 || month2 === 6 || month2 === 9 || month2 === 11) {
    daysInMonth = 30;
  } else if (month2 === 2) {
    daysInMonth = isLeapYear ? 29 : 28;
  }

  return daysInMonth;
}
var daysInCurrentMonth = getDaysInMonth(month2, isLeapYear);
if (day2 < 1 || day2 > daysInCurrentMonth || month2 < 1 || month2 > 12) {
  alert("Введена некорекная дата!");
} else {
  if (day2 === daysInCurrentMonth) {
    day2 = 1;
    if (month2 === 12) {
      month2 = 1;
      year3++;
    } else {
      month2++;
    }
  } else {
    day2++;
  }
  var nextDate = day2 + "." + month2 + "." + year3;
  alert("Следующая дата: " + nextDate);
  document.write("Следующая дата: " + nextDate);
}
