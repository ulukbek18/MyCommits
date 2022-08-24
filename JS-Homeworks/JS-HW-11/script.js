const userContainers=document.getElementById('users')


const renderUsers=(users)=>{
    let result=''
    users.forEach(element => {
        // if(element.id>20){
        //     return 
        // } else {
            
        // }
        result+=`
        <div>
        <span>${element.id}</span>
        <span>${element.name}</span>
            <span>${element.genre}</span>
            <span>${element.developers}</span>
              <span>${element.releaseDates.Japan}</span>
            <span>${element.releaseDates.NorthAmerica}</span>
            <span>${element.releaseDates.Europe}</span>
            <span>${element.releaseDates.Australia}</span>
        </div>`
    });
    userContainers.innerHTML=result
}

// let newResponse=[]
const fetchData = ()=>{
    fetch(`https://api.sampleapis.com/playstation/games`)
    .then ((response)=>{
        return response.json()
    })
    .then ((users)=>{
        renderUsers(users)
    })
    .catch ((error)=>{
        alert('Error',error)
    })
    // response.push(newResponse)
    // console.log(newResponse)
}
