const contentsWrapper = 
document.querySelector('.contents-wrapper');
const prevButton =
document.querySelector('.prev');
const nextButton =
document.querySelector('.next');

let index = 0;

// prev버튼을 누르면 인덱스가 1 감소하게

prevButton.addEventListener('click', ()=>{
    // index = index - 1
    index--;
    위치적용();
})
// next버튼을 누르면 인덱스가 1 증가하게

nextButton.addEventListener('click',()=>{
    index++;
    위치적용();
})

function 위치적용() {
    contentsWrapper.style.transform = 
    `translateX(${index * -300}px)`
}


