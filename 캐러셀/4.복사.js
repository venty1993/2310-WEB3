const contentsWrapper = document.querySelector('.contents-wrapper');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const 슬라이드갯수 = contentsWrapper.childElementCount
const nowPage = document.querySelector('.now-page')
const totalPage = document.querySelector('.total-page');

const 한번에보는슬라이드=1;



//복사붙여넣기 하고나면 슬라이드의 갯수가 늘어나기때문에
// line 4의 갯수를 파악하는 구문 실행 이후에 노드를 복제해야한다.
const 첫번째페이지복사본 = contentsWrapper.firstElementChild.cloneNode(true);
const 마지막페이지복사본 = contentsWrapper.lastElementChild.cloneNode(true);

contentsWrapper.appendChild(첫번째페이지복사본);
contentsWrapper.insertBefore(마지막페이지복사본,contentsWrapper.firstElementChild);






let index = 1;

totalPage.innerText = 슬라이드갯수;
console.log(슬라이드갯수)

prevButton.addEventListener('click', ()=>{
    
    // index--;
    // if(index < 1){
    //     index = 슬라이드갯수;
    // }

    // 위치적용();

    index--;
    위치적용();

    if(index === 한번에보는슬라이드 - 1) {
        // 애니메이션 끝난다음에 = 1초뒤에
        setTimeout(() => {
        //    setTimeout 함수에는 두개의 인수를 전달한다.
        // 실행할 함수(콜백), 몇초 뒤에 실행할것인지 시간(ms)


        // 인덱스를 마지막페이지로 넘기고
        index = 슬라이드갯수 + 한번에보는슬라이드 - 1;
        // 적용, 이때는 트랜지션 X


        }, timeout);
    }
})
nextButton.addEventListener('click',()=>{
    index++;
    if(index > 슬라이드갯수) {
        index = 1;
    }
    위치적용();
})


function 위치적용() {
    contentsWrapper.style.transform = 
    `translateX(${index * -300}px)`

    nowPage.innerText = index - 한번에보는슬라이드 + 1;

    contentsWrapper.style.transition = `1s`

    버튼색변경(index-한번에보는슬라이드);
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
