const contentsWrapper = document.querySelector('.contents-wrapper');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const 슬라이드갯수 = contentsWrapper.childElementCount
const nowPage = document.querySelector('.now-page')
const totalPage = document.querySelector('.total-page');
const 하단버튼 = document.querySelectorAll('.slider-radio-button')
const 한번에보는슬라이드=1;
const 애니메이션속도 = 1000

let index = 1;

let moveAble = true;

슬라이드초기세팅();
// 이전버튼
prevButton.addEventListener('click', ()=>{
    if(moveAble){
        moveAble = false;
        index--;
        위치적용(true);
        setTimeout(() => {

            moveAble = true;

            if(index === 한번에보는슬라이드 - 1) {
                index = 슬라이드갯수 + 한번에보는슬라이드 - 1;
                위치적용(false);
            }

        }, 애니메이션속도);
    }
})



nextButton.addEventListener('click',()=>{

     if(moveAble){
        moveAble = false;
        index++;
        위치적용(true);
        setTimeout(() => {

            moveAble = true;

            if(index > 슬라이드갯수+한번에보는슬라이드-1) {
                index = 한번에보는슬라이드;
                위치적용(false);
            }

        }, 애니메이션속도);
    }
})

function 위치적용(애니메이션여부) {

    let 현재슬라이드 = index - 한번에보는슬라이드 + 1;

    contentsWrapper.style.transform = `translateX(${index * -300}px)`

    if(현재슬라이드 === 0){
        console.log('범위초과')
        nowPage.innerText = 슬라이드갯수;
        버튼색변경(슬라이드갯수);

    }else if(현재슬라이드 === 슬라이드갯수+1){
        nowPage.innerText = '1';
        버튼색변경(1);
        
    }else {
        nowPage.innerText = 현재슬라이드;
        버튼색변경(현재슬라이드);
    }

    if(애니메이션여부){
        contentsWrapper.style.transition = `${애니메이션속도}ms`
    }else {
        contentsWrapper.style.transition = `0ms`
    }
}

function 버튼색변경(버튼순서) {
    for(let i = 0 ; i < 하단버튼.length; i ++) {
        하단버튼[i].classList.remove('active');
    }
        하단버튼[버튼순서-1].classList.add('active');
}


function 슬라이드초기세팅() {
    const 첫번째페이지복사본 = contentsWrapper.firstElementChild.cloneNode(true);
    const 마지막페이지복사본 = contentsWrapper.lastElementChild.cloneNode(true);

    contentsWrapper.appendChild(첫번째페이지복사본);
    contentsWrapper.insertBefore(마지막페이지복사본,contentsWrapper.firstElementChild);

    totalPage.innerText = 슬라이드갯수;

    for(let i = 0 ; i < 하단버튼.length ; i ++) {
        하단버튼[i].addEventListener('click',()=>{
            index = i+한번에보는슬라이드;
            위치적용(true);
        })
    }

    위치적용(false);
}