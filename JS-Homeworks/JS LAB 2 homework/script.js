// Question 1
//Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

const a_1=0;
if (a_1===0){
    console.log('Correct')
}else {
    console.log('Incorect')
}

//Question 2
//Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

const a_2=3
if (a_2>0){
    console.log ('Correct')
}else {
    console.log('Incorect')
}

//Question 3
//Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

const a_3=1
if (a_3<0){
    console.log ('Correct')
}else {
    console.log('Incorect')
}

//Question 4
//Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
const a_4=-1
if (a_4>=0){
    console.log ('Correct')
}else {
    console.log('Incorect')
}

//Question 5
//Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
const a_5=-1
if (a_5<=0){
    console.log ('Correct')
}else {
    console.log('Incorect')
}

//Question 6
//Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
const a_6=0
if (a_6!==0){
    console.log ('Correct')
}else {
    console.log('Incorect')
}

//Question 7
// Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.
const a_7='тест'
if (a_7=='test'){
    console.log ('Correct')
}else {
    console.log('Incorect')
}

//Question 8
//Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.
const a_8=1;
if (a_8==='1'){
    console.log ('Correct')
}else {
    console.log('Incorect')
}


//Работа с логическими переменными
//Question 1
//Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

//First option
const test=false;
if (test==true){
    console.log ('Correct')
}else {
    console.log('Incorect')
}
//Second option
const test_1=true? 'Correct': 'Incorrect'
console.log(test_1)

//Question 2
//Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

//First option
const test_2=true;
if (test_2!=true){
    console.log ('Correct')
}else {
    console.log('Incorect')
}
//Second option
const test_2a=!true? 'Correct': 'Incorrect'
console.log(test_2a)

//Работа с && (и) и || (или)
//Question 1
//Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

const a_9=2
if(a_9 >0 && a_9 <5){
    console.log('Correct')
} else {
    console.log('Incorrect')
}

//Question 2
// Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
const a_10=2
if (a_10==0 || a_10==2){
    console.log(a_10+7)
} else {
    console.log(a_10/10)
}

//Question 3
// Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
const a_11=3
const b_11=5
if(a_11<=1 && b_11>=3){
    console.log(a_11+b_11)
} else{
    console.log(a_11-b_11)
}

//Question 4
// Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
const a_12=3
const b_12=3
if(a_12>2 && a_12<11 || b_12>=6 && b_12<14){
    console.log('Correct')
} else{
    console.log('Incorrect')
}
// ASK THIS QUESTION 


// На switch-case
//Question 1
//Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
const num='2';
switch (num){
    case'1':
     console.log('Winter');
        break;
    case '2':
        console.log ('Spring')
        break;
    case '3':
     console.log ('Summer')
        break;
    case '4':
        console.log ('Autumn')
        break;
    default:
        console.log ('I DONT KNOW WHAT SEASON IT IS')
        break;

}

//Задачи
//Напишите скрипт, который считает количество секунд в часе.

//Задача 1
const hourr=5;
if (hourr>0){
const result1=60*60*hourr;
console.log('result',result1)
console.log(`in ${hourr} hour=${result1} second.`);
} else{
    console.log('You are dumb, clock doesnt go backwards')
}

//Задача 2
//Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.
const hour =14
const minute=43
const second=32
const time= hour +':' +minute+ ':' + second;
console.log (`${hour}/${minute}/${second}`); //Interpolation
console.log('time:',time)


//Задача 3
//В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
const day=26;
if (day>1 && day<11){
    console.log('First Decade')
} else if (day>11 && day<21){
    console.log('Second Decade')
} else if (day>21 && day<31){
    console.log('Third Decade')
} else {
    console.log('This date does not exist')
}

//Задача 4
//В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
const month=10;
if (month>1 && month<3){
    console.log('Winter')
} else if (month>3 && month<6){
    console.log('Spring')
} else if (month>6 && month<9){
    console.log('Summer')
}else if (month>9 && month<12){
    console.log('Autumn')
} else {
    console.log('This date does not exist')
}