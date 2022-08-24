const dateContainer=document.getElementById('daterelease')
const input=document.getElementById('inputValue')
const inputValue=input.value 
const orozoStart = new Date(2021, 4, 12)
let initialYear=orozoStart.getFullYear()
let initialMonth=orozoStart.getMonth()
let initialDay=orozoStart.getDate()
console.log(initialYear)
function checkValues(){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    if (input.value<=2000 || input.value>=2050){
        document.getElementById('daterelease').innerHTML=`Incorrect Data`

    } else if(input.value<initialYear){
        let multiplier=initialYear-input.value
        let resultedDate= new Date(initialYear-multiplier,initialMonth,initialDay+multiplier*10)
        let kurmanDate=new Date(initialYear-multiplier,initialMonth,initialDay+multiplier*10+70)
        document.getElementById('daterelease').innerHTML=`Дата Орозо Айта: ${resultedDate.toLocaleDateString('ru-RU',options)},
        Дата Курман айта ${kurmanDate.toLocaleDateString('ru-RU',options)}`

        
    } else if(input.value>initialYear){
        let multiplier=input.value-initialYear
        let resultedDate= new Date(initialYear+multiplier,initialMonth,initialDay-multiplier*10)
        let kurmanDate=new Date(initialYear+multiplier,initialMonth,initialDay-multiplier*10+70)
        document.getElementById('daterelease').innerHTML=`Дата Орозо Айта: ${resultedDate.toLocaleDateString('ru-RU',options)},
        Дата Курман айта ${kurmanDate.toLocaleDateString('ru-RU',options)}`
        console.log(kurmanDate)
    }
    
    }