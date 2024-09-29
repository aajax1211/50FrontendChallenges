const boxes = document.querySelectorAll('.box')

let timer;
function debounce(fn,delay) {
    return function (){
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, arguments), delay);
    }
}

function checkboxes(){
  const triggerBottom = window.innerHeight / 5 * 4;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top

    if(boxTop < triggerBottom){
        box.classList.add('show')
    }else{
        box.classList.remove('show')
    }
  })
}

window.addEventListener("scroll" , debounce(checkboxes, 10))

checkboxes()