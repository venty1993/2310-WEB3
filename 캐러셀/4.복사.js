const contentsWrapper = document.querySelector('.contents-wrapper');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const 슬라이드갯수 = contentsWrapper.childElementCount
const nowPage = document.querySelector('.now-page')
const totalPage = document.querySelector('.total-page');

let index = 0;

totalPage.innerText = 슬라이드갯수;
console.log(슬라이드갯수)

prevButton.addEventListener('click', ()=>{
    
    index--;
    if(index < 0){
        index = 슬라이드갯수-1;
    }

    위치적용();
})
nextButton.addEventListener('click',()=>{
    index++;
    if(index > 슬라이드갯수-1) {
        index = 0;
    }
    위치적용();
})


function 위치적용() {
    contentsWrapper.style.transform = 
    `translateX(${index * -300}px)`

    nowPage.innerText = index+1;

    contentsWrapper.style.transition = `1s`

    버튼색변경(index);
}



const 하단버튼 = document.querySelectorAll('.slider-radio-button')

console.log(하단버튼[0]);


function 버튼색변경(버튼순서) {


    
    for(let i = 0 ; i < 하단버튼.length; i ++) {
        하단버튼[i].classList.remove('active');
    }


    하단버튼[버튼순서].classList.add('active');
    
}

for(let i = 0 ; i < 하단버튼.length ; i ++) {
    하단버튼[i].addEventListener('click',()=>{
        index = i;
        위치적용();
    })
}

