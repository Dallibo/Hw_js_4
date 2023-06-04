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





