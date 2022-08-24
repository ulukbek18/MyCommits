

//Question 1
//Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.

function q_1(){
    const a=10
    const b=3
    const res=a%b  // % sign gives ostatok 
    console.log('Question 1:',res)
}


//Question 2
//Даны переменные a и b. Проверьте, что a делится без остатка на b. 
//Eсли это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком'
// и остаток от деления.

function task2(){

    const a2=10
    const b2=3
    const result2=a2%b2
    if (result2==0){
        alert('Делится')
    } else {
        alert('Не делится')
    }
    console.log(result2)
}

//Question 3
//Возведите 2 в 10 степень. Результат запишите в переменную st.
function task3(){
    const st=Math.pow(2,10)
    console.log('Question 3:',st)
}

//Question 4
//Найдите квадратный корень из 245.
function task4(){
    const number4=245
    const result4=Math.sqrt(number4)
    console.log ('Question 4:',result4)
}

//Question 5
//Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень 
//из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

function task5(){

    const array5=[4,2,5,19,13,0,10]
    let newArray5=0
    for (let index = 0; index < array5.length; index++) {
        newArray5+=Math.pow(array5[index],3)    
    }
    console.log('Question 5 Сумма кубов:',newArray5)
    const finalresult5=Math.sqrt(newArray5)
    console.log('SQRT Question 5:',finalresult5)
}


//Question 6
//Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
function task6(){

    const a6=379
    const result6=Math.sqrt(a6)
    console.log('Question 6 sqrt of 379:',result6)
    const tofixed1=result6.toFixed(0)  // either Math.round
    console.log('Question 6 toFixed(1)',tofixed1)
    const tofixed10=result6.toFixed(2)
    console.log('Question 6 toFixed(2)',tofixed10)
    const tofixed100=result6.toFixed(3)
    console.log('Question 6 toFixed(3)',tofixed100)
}

//Question 7
//Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны,
// запишите результаты округления в объект с ключами 'floor' и 'ceil'.

function q_7(){
    const a=587
    const result=Math.sqrt(a)
    let value1=Math.floor(result)
    let value2=Math.ceil(result)
    let Object={
        floor:value1,
        ceil:value2
    }
    console.log(Object)
}

//Question 8
//Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

function q_8(){
    const array8=[4,-2,5,19,-130,0,10]
    let maximum= Math.max.apply(null,array8)
    let minimum= Math.min.apply(null,array8)
    console.log(`Maximum is ${maximum},Minimum is ${minimum}`)
}

//Question 9
//Выведите на экран случайное целое число от 1 до 100.

function q_9(){
    const result=(Math.random()*101)
    console.log(result.toFixed(0))
}

//Question 10
//Заполните массив 10-ю случайными целыми числами. 
//(Подсказка: нужно воспользоваться циклами for или while).

function q_10(){
const array10=[]
        
    for (let index = 0; index <=9; index++) {
        const element = Math.floor(Math.random()*101)
        array10.push(element)
    }
    console.log(array10)
}

//Question 11
//Даны переменные a и b. Найдите найдите модуль разности a и b. 
//Проверьте работу скрипта самостоятельно для различных a и b.

function q_11(){
    const a=-17
    const b=3
    let result =a-b
    const result2 =Math.abs(result)
    console.log(result2)
}

//Question 12
//Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. 
//Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. 
//Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.

function q_12(){
    const a=-1
    const b=6
    const c=Math.abs(a-b)
    console.log('Task 12:',c)
}

//Question 13
//Дан массив arr. Найдите среднее арифметическое его элементов.
// Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

function q_13(){
    const array=[12,15,20,25,59,79]
    const calcSum=array.reduce((accumulator,item)=>{
        accumulator+=item
        return accumulator
    },0)
    const finalResult=calcSum/array.length
    console.log( 'Question 13:',finalResult)
}

//Question 14
//находить факториал числа. Факториал (обозначается !) - это произведение (умножение) 
//всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.

function q_14(){
    let f=[1,2,3,4,5]
    let res=f.reduce((acc,item)=>{
        acc=acc*item
        return acc 
    })
    console.log('Question 14:',`The factorial of ${f.length}=${res}`)
}

//Question 15
//Создать массив products (10 объектов минимум) с полями name, description, quantity, price.
// Нарисовать таблицу в html со списком products.

let buttonGet=document.getElementById('button')
let myTable=document.getElementById('table')

let products=[
    {name: 'Iphone 12promax',description: 'mobile',quantity:100,price:'900 USD',},
    {name: 'Ipad',description: 'tablet',quantity:299,price:'1100 USD',},
    {name: 'Macbook',description:'PC',quantity:347,price:'2000 USD',},
    {name: 'EarPods',description:'audio',quantity:15,price:'300 USD',},
    {name: 'MacSafe',description:'mobile-accessories',quantity:100,price:'100 USD',},
    {name: 'Case',description:'accessories',quantity:222,price:'50 USD',},
    {name: 'IpadMini', description:'mobile',quantity:100,price:'450 USD',},
    {name: 'Iphone 13',description:'mobile',quantity:257,price:'1200 USD',},
    {name: 'Iphone 12', description:'mobile',quantity:100,price:'1000 USD',},
    {name: 'Iphone 10',description:'mobile',quantity:50,price:'650 USD',},
]
let headers=['Name','Description','Quantity','Price']
    buttonGet.addEventListener('click',()=>{
        if (myTable.childNodes.length!==0){
            return;
        }
        let table=document.createElement('table')
        let headerRow=document.createElement('tr')
        headers.forEach(headerText=>{
            let header=document.createElement('th')
            let textNode=document.createTextNode(headerText)
            header.appendChild(textNode)
            headerRow.appendChild(header)
        })
        table.appendChild(headerRow)
        products.forEach(prod=>{
            let row=document.createElement('tr')
            Object.values(prod).forEach(text=>{
                let cell=document.createElement('td')
                let textNode=document.createTextNode(text)
                cell.appendChild(textNode)
                row.appendChild(cell)
            })
            table.appendChild(row)
        })
        myTable.appendChild(table)
    })




//Question 16
//Дан массив [1, 2, 3, 4, 5] с помощью метода reduce сделать объект в котором ключ 
//будет равен элементу массива а значение (элемент * 100)
//input [1, 2, 3, 4, 5]
//output {1: 100, 2: 200, 3: 300 ...}

function q_16() {
    const numbers=[1,2,3,4,5]
    const result=numbers.reduce((acc,item)=>{
        acc[item]=item*100
        return acc
    },{})
    console.log('Task 16:',result)
}   

//Question 17
//Дан массив skills = ['skill1', 'skill2', ... 'skilln'] скиллы произвольные самим придумать.
// Написать функцию которая создает из массива skills объект с рэндомными значениями от 1 до 100,
//использовать reduce
//['hook', 'blackhole']
//{'hook': 20, 'blackhole: 100'}
function q_17() {
    const numbers=['Black hole','Reverse Polarity','Coup de grace','Fins Grip']
    const result=numbers.reduce((acc,item)=>{
        const random=(Math.random()*101)
        acc[item]=random.toFixed(0)
        return acc
    },{})
    console.log('Task 17:',result)
}   

//Question 18
//Дан произвольный массив из чисел больше 0 с помощью reduce посчитать сумму четных и нечетных чисел.
//input [1,2,3,4,5,6,7,8,9,10,11, 100, 200, 300]
//output: { even: 100, odd: 100 } // 100 это для примера сумма должна высчитываться.

function q_18(){
    const numbers=[1,2,3,4,5,6,7,8,9,10,11, 100, 200, 300]
    function evenodd(numbers){
        return numbers.reduce((acc,item)=>
        item % 2 ===0
         ? {odd:acc.odd, even:acc.even+item}
         : {even:acc.even, odd:acc.odd+item},
         {even:0,odd:0}
    ); 
    }
    console.log('Question 18:',evenodd(numbers))
}
