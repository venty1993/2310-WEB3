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

    // 인덱스에 따라 버튼색이 변화할수 있도록 작성
    버튼색변경(index);
}


// 버튼의 색깔을 바꾸는 함수

const 하단버튼 = document.querySelectorAll('.slider-radio-button')

console.log(하단버튼[0]);


function 버튼색변경(버튼순서) {
    // let 버튼순서 = 3; <- 매개변수가 3을 가져오면 이런식으로 작동한다.

    // 개체에 클래스 넣고 뺴는 방법!
    // const 개체 = document.쿼리셀렉터('선택자');
    // 개체.classList.add('클래스이름') <- 클래스추가하는법
    // 개체.classList.remove('클래스이름') <- 클래스 삭제하는법
    // 개체.classList.contains('클래스이름') <- 해당 개체가 지정한 클래스를 가지고있는지 확인(true, false를 반환해줌.) 

    // 하단버튼[0].classList.remove('active');
    // 하단버튼[1].classList.remove('active');
    // 하단버튼[2].classList.remove('active');
    // 하단버튼[3].classList.remove('active');
    // 하단버튼[4].classList.remove('active');
    
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

