
function search(){
    const input = document.getElementById('input');
    const inputValue = input.value.toLowerCase();
    
    const kyrgyzletters=['ң', 'ө', 'ү','өө','үү','жы','шы','кандай']
    const russianletters=['ца', 'жи', 'ши','ь','ъ','ща','привет', 'как дела']

    if (kyrgyzletters.some(value => inputValue.includes(value))){
         console.log('Kyrgyz Language')
         alert('Kyrgyz Language')

     } else if(russianletters.some(value => inputValue.includes(value))){
        alert('Russian Language')
        console.log('Russian Language')
     } 
     else{
        console.log('It might be a combination of both or a different language')
        alert('It might be a combination of both or a different language')
     }
}


