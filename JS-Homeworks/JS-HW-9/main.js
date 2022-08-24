const knightContainer=document.getElementById('heroDavion')
const bossContainer=document.getElementById('heroBoss')
const superHit=document.getElementById('superudar')
const armorFix=document.getElementById('fixarmor')
const roundContainer=document.getElementById('roundCount')
const manaRefill=document.getElementById('refillmana')
const udarStrange=document.getElementById('stranudar')
const healSpell=document.getElementById('heal')

class Hero{
    constructor(name,hp,mana,attack,armor){
        this.name=name
        this.hp=hp
        this.mana=mana
        // this.maxHealth=maxHealth
        this.attack=attack
        this.armor=armor
    }
}
class Round{
    constructor(Round){
        this.Round=Round
    }
}

class Knight extends Hero{}
class Boss extends Hero{}   

const knight=new Hero('Knight',1000,200,100,5)
const boss=new Hero('Roshan',5000,0,50,7)
const round =new Round(1)

const healcost=60
const supercost=60
const strancost=50


function displayStats(Hero){
    let empty="";
    Object.keys(Hero).forEach((key)=>{
        empty +=`
        <div class = 'stats'>
        <h2>${key}</h2>
        <h2>:${Hero[key]}</h2>
        </div>`;
    }); 
    return empty;
}

function displayRound(Round){
    let empty="";
    Object.keys(Round).forEach((key)=>{
        empty +=`
        <div class = 'rounds'>
        <h2>${key}</h2>
        <h2>:${Round[key]}</h2>
        </div>`;
    });
    return empty;
}   

function updateStats() {
    const probability=Math.floor(Math.random()*34)
    
    if (boss.hp<=0){
        boss.hp=0
        alert('Knight wins')
    } if (knight.hp<=0){
        knight.hp=0
        alert ('Boss wins')
    } if(probability===21){
        knight.hp=1

        alert('Boss Instantly Killed your hero by chance of 3%')
    } if (knight.mana<=0){
        knight.mana=0
    }if(knight.mana<healcost){
        healSpell.disabaled='true'
        healSpell.style.backgroundColor='grey'
        alert('Not enough mana ')
    }if(knight.mana<supercost){
        superHit.disabaled='true'
        superHit.style.backgroundColor='grey'
    } 
    if(knight.mana<strancost){
        udarStrange.disabaled='true'
        udarStrange.style.backgroundColor='grey'
    }
    if(knight.mana>=healcost){
        healSpell.disabaled='false'
        healSpell.style.backgroundColor='#0dbc1e'
    }
 
    
    knightContainer.innerHTML = displayStats(knight);
    bossContainer.innerHTML = displayStats(boss);
    roundContainer.innerHTML=displayRound(round)
}
updateStats();

function Attack(){
    
    const bossDamage=Math.floor(Math.random()*101)+boss.attack
    boss.hp=boss.hp+boss.armor-knight.attack
    knight.hp=knight.hp+boss.armor-bossDamage
    round.Round=round.Round+1
    if (round.Round%6===0){
        knight.armor=knight.armor-1
    }
    updateStats()
   
    
}



function heal(){
    const bossDamage=Math.floor(Math.random()*101)+boss.attack
    if(knight.hp>=1000){
        knight.hp=1000
        alert('Your hero is full HP, there is no need to heal him anymore ')
    } else if(knight.hp<1000){
        knight.hp=knight.hp+knight.armor-bossDamage
        knight.hp=knight.hp+300
        knight.mana=knight.mana-healcost
    }  
    round.Round=round.Round+1
    updateStats()
   
}

function fixArmor(){
    
    const bossDamage=Math.floor(Math.random()*101)+boss.attack
    round.Round=round.Round+1
    knight.hp=knight.hp+knight.armor-bossDamage
    knight.mana=knight.mana-20
    if(knight.armor<5){
        knight.armor=5
    } 
    armorFix.style.pointerEvents='none'
    armorFix.style.backgroundColor='grey'
    updateStats()
    
}
function refillMana(){
    
    const bossDamage=Math.floor(Math.random()*101)+boss.attack
    round.Round=round.Round+1
    knight.hp=knight.hp+knight.armor-bossDamage
    if(knight.mana<200){
        knight.mana=200
    }
    manaRefill.style.pointerEvents='none'
    manaRefill.style.backgroundColor='grey'
    updateStats()
}

function SuperUdar(){
    
    const bossDamage=Math.floor(Math.random()*101)+boss.attack
    round.Round=round.Round+1
    const manausage=knight.mana-supercost
    if (knight.mana>49){
        boss.hp=boss.hp-knight.attack*5
        knight.hp=knight.hp+knight.armor-bossDamage
        knight.mana=manausage   
    } else if (knight.mana<50){
        knight.hp=knight.hp+knight.armor-bossDamage
    }
    superHit.style.pointerEvents='none'
    superHit.style.backgroundColor='grey'
    updateStats()   
    
}

function StrangeUdar(){
    round.Round=round.Round+1
    knight.hp=knight.hp-knight.hp*0.5
    boss.hp=boss.hp-boss.hp*0.5
    knight.mana=knight.mana-strancost
    if (knight.mana<=0){
        knight.mana=0
        
    }
    udarStrange.style.pointerEvents='none';
    udarStrange.style.backgroundColor='grey';
    updateStats()
    
}
function rage(){
    const bossDamage=Math.floor(Math.random()*101)+boss.attack
    round.Round=round.Round+1
    knight.hp=knight.hp+knight.armor-bossDamage*2
    updateStats()
   
}
