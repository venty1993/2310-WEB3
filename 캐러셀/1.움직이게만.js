const contentsWrapper = 
document.querySelector('.contents-wrapper');

// contentsWrapper.style.transform = 
// `translateX(-300px)`


const nextButton =
document.querySelector('.next');
const prevButton =
document.querySelector('.prev');


// nextButton을 누를떄 -300


let 슬라이더위치 = 0;

nextButton.addEventListener('click', ()=>{
    슬라이더위치 = 슬라이더위치 - 300
    위치적용();
})

prevButton.addEventListener('click', ()=>{
    슬라이더위치 = 슬라이더위치 + 300
    위치적용();
})

function 위치적용() {
    contentsWrapper.style.transform = 
    `translateX(${슬라이더위치}px)`
}