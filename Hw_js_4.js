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
}

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
        alert("Неправильно выбрана валюта");
        break;
}
if (convert !== undefined) {
    alert(`Полученная сумма: ${convert.toFixed(2)} ${currency}`);
}




