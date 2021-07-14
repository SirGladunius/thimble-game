const button_start= document.getElementById('button_start')
const  block= document.getElementById('redblock')
const thimble1= document.getElementById('thimble1')
const thimble2= document.getElementById('thimble2')
const thimble3= document.getElementById('thimble3')
const question= document.getElementById('question')
const text_round=document.getElementById('round')
let compl=0

function teleport (){
    block.style.left=getComputedStyle(thimble1).left
    block.style.transform= 'translateX(50%)'
    block.style.display='block'
}

function thimbleUp(thimble, up='20%'){
    thimble.style.top=up
}

function thimbleDown(thimble, down='45%'){
    thimble.style.top=down
}

function thimbleON(){
    thimble1.style.pointerEvents='auto'
    thimble2.style.pointerEvents='auto'
    thimble3.style.pointerEvents='auto'
}

function thimbleOff(){
    thimble1.style.pointerEvents='none'
    thimble2.style.pointerEvents='none'
    thimble3.style.pointerEvents='none'
}
/*thimble1.style.left = '15%'
thimble2.style.left = '40%'
thimble3.style.left = '63%'

thimble1.style.transition='top 1s';
    thimble2.style.transition='top 1.2s';
    thimble3.style.transition='top 1.5s';
thimble1.style.top='45%';
thimble2.style.top='45%';
thimble3.style.top='45%';*/
function mixing(){
    let arr= [thimble1,thimble2,thimble3]
    let random1 =Math.floor(Math.random() * 3)
    let random2= Math.floor(Math.random() * 3)
    while(random1===random2){
        random2= Math.floor(Math.random() * 3)
    }
    let c = getComputedStyle(arr[random1]).left
    console.log(c)
    console.log(getComputedStyle(arr[random2]).left)
    arr[random1].style.left = getComputedStyle(arr[random2]).left
    arr[random2].style.left = c

    // arr[Math.round(random2)].style.left=c
    compl++
    if(compl===round+2){
        question.style.opacity='100%'
        thimbleON()
        compl=0
    }

}


function startRound(round){
    block.style.display='block'
    text_round.innerText=`Раунд № ${round}`
    thimbleOff()

    let speed=2
    thimble1.style.transition= `left ${speed/round}s top 1s`;
    thimble2.style.transition= `left ${speed/round}s, top 1.5s`;
    thimble3.style.transition= `left ${speed/round}s, top 2s`;
    setTimeout(()=> thimbleDown(thimble1),1000)
    setTimeout(()=> thimbleDown(thimble2), 1000)
    setTimeout(()=> thimbleDown(thimble3),1000)

    setTimeout(()=>block.style.display='none',2000)
    let timeSleep=2000
    button_start.disabled  = true

    for(let i=0;i<round+2;i++){
        setTimeout(mixing,timeSleep)
        console.log(i)
        timeSleep+=speed/round*1000
    }
}



let round=1

thimbleOff()
button_start.addEventListener('click',() => startRound(round))


// const thimbleClick = (event) => {
//     thimbleOff()
//     block.style.display='block'
//     teleport()
//     button_start.disabled  = false
//     question.style.opacity='0%'
//     event.target.style.transition='top 1s';
//     thimbleUp(event,'15%')
//     round=1
//     setTimeout(() => thimbleUp(thimble1),2000)
//     setTimeout(() => thimbleUp(thimble3),2000)
// }

thimble1.addEventListener('click',function (){
    console.log("-------------------------------------")
    question.style.opacity='0%'
    block.style.display='block'
    thimbleOff()
    teleport()

    thimble1.style.transition=`left ${2000/round} top 1s`;
    thimbleUp(thimble1)
    thimble2.style.transition=`left ${2000/round} top  3s`;
    thimbleUp(thimble2 )
    thimble3.style.transition=`left ${2000/round} top 3s`;
    thimbleUp(thimble3)
    round++


    setTimeout(() => startRound(round),4000)



})
thimble2.addEventListener('click',()=>{
    thimbleOff()
    teleport()
    block.style.display='block'
    button_start.disabled  = false
    question.style.opacity='0%'
    thimble2.style.transition='top 1s';
    thimbleUp(thimble2,'15%')
    round=1
    thimbleUp(thimble1)
    thimbleUp(thimble3)

})
thimble3.addEventListener('click',()=>{
    button_start.disabled  = false
    block.style.display='block'
    thimbleOff()
    teleport()
    question.style.opacity='0%'
    thimble3.style.transition='top 1s';
    thimbleUp(thimble3,'15%')
    round=1
    thimbleUp(thimble1)
    thimbleUp(thimble2)


})
