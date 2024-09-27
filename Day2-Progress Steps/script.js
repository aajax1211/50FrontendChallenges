const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currectActivie = 1;

next.addEventListener('click', ()=>{
    currectActivie++
    
    if(currectActivie > circles.length){
        currectActivie = circles.length
    }

    update()

})


prev.addEventListener('click', ()=>{
    currectActivie--
    
    if(currectActivie < 1){
        currectActivie = 1
    }

    update()
})


function update(){
    circles.forEach((circle,idx)=>{
        if(idx < currectActivie){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll(".active")
    progress.style.width = (actives.length-1)/ (circles.length-1)* 100 + "%";

    if(currectActivie === 1){
        prev.disabled = true
    }else if(currectActivie === circles.length) {
        next.disabled = true
    }else {
        prev.disabled = false
        next.disabled = false
    }

}