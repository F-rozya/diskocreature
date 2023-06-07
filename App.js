
const block = document.querySelector('.block')
const block2 = document.querySelector('.block__2')
const block3 = document.querySelector('.block__3')
const block4 = document.querySelector('.block__4')
const eye = document.querySelector('.eye')
const pupil = document.querySelector('.pupil')
const leftHand = document.querySelector('.left-hand')
const rightHand = document.querySelector('.right-hand')
const styleBtn = document.querySelector('.style-but')

let MouseX = 0
let MouseY = 0

let blink = (time) =>{
    eye.classList.add('blink')
    eye.style.cssText = 'height:0%;'
    setTimeout(() => {
        eye.classList.remove('blink')
        eye.style.cssText = 'height:75%;'
    }, time);
}
let pupilTrigger = (time) =>{
    pupil.classList.add('pupilTrigger')
    setTimeout(() => {
        pupil.classList.remove('pupilTrigger')
    }, time);
}
let randomM = (value , value2) =>{
    let item = Math.round(Math.random() * value)
    if(item < value2){
        item = value2
    }
    return(item)
}

let emotiton = ()=>{

    pupil.style.cssText = `width:${randomM(10 , 2)}vw;`
    pupil.style.cssText = `height:${randomM(10 , 2)}vw;`

    eye.style.cssText = `width:${randomM(80 , 15)}%`
    eye.style.cssText = `height:${randomM(80 , 15)}%;`
    eye.style.cssText = `transform:rotate(${randomM(20 , 0)}deg);` 

    block2.style.cssText = `background-color: #${randomM(9 , 0)}${randomM(9 , 0)}${randomM(9 , 0)};`

    setTimeout(() => {
        
        emotiton()

    }, Math.random() * 10000);

}

emotiton()

window.addEventListener('mousemove' , (item)=>{
    MouseX = item.clientX - document.body.clientWidth / 2
    MouseY = item.clientY - document.body.clientHeight / 2
    document.body.style.cssText = `--mouse-X:${MouseX}px; --mouse-Y:${MouseY}px;`
})

eye.addEventListener('click' , ()=>{
    blink(100)
})
pupil.addEventListener('click' , ()=>{
    pupilTrigger(300)
})
styleBtn.addEventListener('click' , ()=>{
    block.classList.toggle('--transparent')
    block3.classList.toggle('--transparent')
    block4.classList.toggle('--transparent')
})