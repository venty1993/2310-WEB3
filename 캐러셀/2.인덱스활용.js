const contentsWrapper = document.querySelector('.contents-wrapper');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let index = 0;
// childeElementCount 에는 html요소가 가진 자식의 갯수가 들어있다
const 슬라이드갯수 = contentsWrapper.childElementCount
console.log(슬라이드갯수)
// prev버튼을 누르면 인덱스가 1 감소하게
prevButton.addEventListener('click', ()=>{
    // if문을 이용해 버튼을 누를때 범위 밖으로 벗어나려고 할 떄
    // 범위 밖으로 넘어가지 않도록 작성해주세요.
    
    // index = index - 1
    index--;
    if(index < 0){
        index = 슬라이드갯수-1;
    }

    위치적용();
})
// next버튼을 누르면 인덱스가 1 증가하게
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
    // index 0 : 값 0
    // index 1 : 값 -300
    // index 2 : 값 -600
    // 위 규칙을 식으로 나타내면 index * -300이다.

    nowPage.innerText = index+1;
}

const nowPage = document.querySelector('.now-page')
const totalPage = document.querySelector('.total-page');

totalPage.innerText = 슬라이드갯수;

// 인덱스에 따라 나우페이지가 변하게끔
// 토탈페이지는 전체 슬라이드 갯수로 설정해주세요.

// 나우페이지는 prev,next 버튼을 누를때마다 갱신되어야합니다.
