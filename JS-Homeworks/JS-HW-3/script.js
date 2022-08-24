//Question 1
// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

function task1(){
    const a=[1,2,3]
    const b=[4,5,6]
    const resultArray=a.concat(b)
    console.log('Task 1',resultArray)
}
task1()

// Question 2
// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

function task2(){
    const a=[1,2,3]
    const resultArray=a.reverse()
    console.log('Task 2',resultArray)
}
 task2()

 //Question 3
 //Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
    const a=[1,2,3]
    a.push(4,5,6)
    console.log('Task 3',a)

//Question 4
// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
    const array=[1,2,3]
    array.unshift(4,5,6)
    console.log('Task 4',array)

//Question 5
//Дан массив ['js', 'css', 'jq']. Выведите в консоли  первый элемент.
    const array5=['js', 'css', 'jq']
    arrayNew=array5[0]
    console.log('Task 5',arrayNew)

//Question 6
//Дан массив ['js', 'css', 'jq']. Выведите а консоли последний элемент. 
    const array6=['js', 'css', 'jq']
    arrayNew6=array6[2]
    console.log('Task 6',arrayNew6)

//Question 7
//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
    const array7=[1,2,3,4,5]
    const newArray7=array7.slice(0,3) //indeces from 0 to 3, element 4 wont be included 
    console.log('Task 7',newArray7)

//Question 8
//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
    const array8=[1,2,3,4,5]
    const newArray8=array8.slice(3,5)
    console.log('Task 8',newArray8)
// Question 9
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
    const array9=[1,2,3,4,5]
    const newArray9=array9.splice(1,2)
    // array9.splice(1,2)
    console.log('Task 9',array9)

//Question 10
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
    const array10=[1,2,3,4,5]
    let del=array10.splice(1,3)
    // array10.splice(1,3) we cant use it because a question of task requires you to add new massive
    console.log('Task 10',array10)

//Question 11
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
    const array11=[1,2,3,4,5]
    array11.splice(3,0,'a','b','c')
    // let arv=array11.splice(3,0,'a','b','c')
    console.log('Task 11',array11)

//Question 12
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
    const array12=[1,2,3,4,5]
    let a1=array12.splice(1,0,'a','b')
    let a2=array12.splice(6,0,'c')
    let a3=array12.splice(8,0,'e',)    
    console.log('Task 12',array12)

//Question 13
//Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
  const array13=[]
  array13.unshift('xxx')
  array13.unshift('xx')
  array13.unshift('x')
  console.log('Task 13',array13)

  //Question 14
  //Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.

  const array14=[]
  array14.unshift('333')
  array14.unshift('22')
  array14.unshift('1')
  console.log('Task 14',array14)

  //Question 15
  //Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. 
//   Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. 
//   Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x']
  
  
  let ab=[]
//   let length=4
//   let value='x'
  function arrayFill(value,length){
      for (let index = 1; index <= length; index++){
        ab.push(value)}
        
    }         
  arrayFill('x',5);
  console.log('Task 15',ab)

  //Question 16
  //Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
  const numbers=[1,1,3,2,3,6,7,8,9]
  let sum=0
  let newArray16=[]
  for (let index = 0; index < array.length; index++) {
    sum+=numbers[index]
    if(sum<=10){
        newArray16.push(numbers[index])
    }    
  }
console.log ('Task 16',newArray16)

//Question 17
//Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

const numbers2=[1,22,34,6,12,3,9]

for (let i = 0; i < numbers2.length/2; i++) {
    var swap = numbers2[numbers2.length - 1 - i];
    numbers2[numbers2.length - 1 - i] = numbers2[i];
    numbers2[i] = swap;
}
console.log ('Task 17',numbers2)
// numbers2.reduceRight((e, i) => (e.push(i), e), [])
// console.log(numbers2.reduce((a, b) => [b].concat(a)));
// console.log(numbers2.sort( a => -1))


//Question 18
//Дан массив с числами. Найти самое большое число в этом массиве и вывести в консоли.
const numbers3=[1,152,12,155,19,311]
maxNumber = (a, b) => {
    return a > b ? a : b;
},
minNumber = (a, b) => {
    return a < b ? a : b;
}
console.log('Task 18 Max number:',numbers3.reduce(maxNumber))
// console.log('Min number:',numbers3.reduce(minNumber))

//Question 19
//Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй,
// а третий элемент на четвертый. Результаты сложите, 
//присвойте переменной result. Выведите на экран значение этой переменной.

const arr=[2,5,3,9]
    result=arr[0]*arr[1]+arr[2]*arr[3]
    console.log('Task 19:',result)

//Question 20
//Дан массив из имен например ['john', 'jane', 'kate', 'peter']. 
//Вывести новый массив в котором каждая первая буква элемента будет с большой буквы.

    const namesOfStudents=['john', 'jane', 'kate', 'peter']
    let newNames=[]
    for (let index = 0; index < namesOfStudents.length; index++) {
        newNames[index]=namesOfStudents[index][0].toUpperCase()+namesOfStudents[index].substring(1)
        // newnewNames=newNames.split('.')
    }
    console.log(newNames)
    

