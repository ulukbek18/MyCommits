//Question 1

function task1(){
    const namesOfStudents=['john', 'jane', 'kate', 'peter']
    let newNames=[]
    for (let index = 0; index < namesOfStudents.length; index++) {
        newNames[index]=namesOfStudents[index][0].toUpperCase()+namesOfStudents[index].substring(1)
        // newnewNames=newNames.split('.')
    }
    alert(newNames)
}


//Question 2
//
//На html странице должен быть input. написать функцию которая достает
// значение введенного текста и делает поиск по ней не чувствительно к регистру. 
// Пример запроса 'Hello' или 'hello' должен возвращать всю строку, если нет совпадений тогда 
//возвращает сообщение о том что ничего не найдено. Строка может быть любая, запрос может быть любой.

function search(){
    const input=document.getElementById('search-input');
    const text = ['Hello','hello','my name is Ulukbek','Today is a good day'];
    const inputValue=input.value.toLowerCase();
    const lowertext=text.map((element)=>element.toLowerCase());
    filtered=lowertext.filter(function(str){return str.includes(inputValue)})
    if ( inputValue!=="" && filtered.length>0){
        alert(filtered)
        console.log(filtered)
    } else if (filtered.length===0){
        alert('Not found')
        console.log('Not found')
    }
    else {
        alert('No text entered')
        console.log('No text entered')
    }
    }



//Question 3
//На html странице должен быть input. Написать функцию которая считает кол-во каждой буквы 
//в данной строке и выводит в консоль. input:  "hello world" 
//Выводит в html output: h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 


function measure(){
const input=document.getElementById('measure-input')
const inputValue=input.value.toLowerCase()
let  counter=inputValue=>{
    return inputValue.split('').reduce((total,letter)=>{
        total[letter] ? total[letter]++:total[letter]=1
        return total
    },{})
}
console.log (counter(inputValue))
}

// Question 4
//Сумма диапазона. Напишите функцию range, принимающую два аргумента, начало и конец диапазона, 
//и возвращающую массив, который содержит все числа из него, включая начальное и конечное. 
//Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. Запустите 
//указанную выше инструкцию и убедитесь, что она возвращает сумму значений массива.


function range (start,end){
    let array=[];
        for (let index = start; index <=end; index++) {
            const element=array[index]
            array.push(index)
        }
        console.log(array)
    const sum=array.reduce((accumulator,number)=>{
        return accumulator+number
    },0);
    console.log(sum)
}   

function rangeWithStep (start,end,step){
    let array=[];

    if (step>0){
        
        for (let index = start; index <=end; index+=step) {
            // const element=array[index]
            array.push(index)
        }
    } else if (step==null && start<end){
        for (let index = start; index <= end; index++) {
            const element = array[index];
            array.push(index)
        }
    } else if (step==null && start>end){
        for (let index = start; index >= end; index--) {
            const element = array[index];
            array.push(index)
        }
    } else{
        for (let index = start; index >=end; index+=step) {
            const element = array[index];
            array.push(index)
        }
    }
    console.log (array)

    const sum=array.reduce((accumulator,number)=>{
        return accumulator+number
    },0);
    
    console.log(sum)
}   


