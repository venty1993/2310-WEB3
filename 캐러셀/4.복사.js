const contentsWrapper = document.querySelector('.contents-wrapper');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const 슬라이드갯수 = contentsWrapper.childElementCount
const nowPage = document.querySelector('.now-page')
const totalPage = document.querySelector('.total-page');

const 한번에보는슬라이드=1;

const 애니메이션속도 = 1000



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
    위치적용(true);

    if(index === 한번에보는슬라이드 - 1) {

        // 예약 실행 시켜주는 함수
        // setTimeout(() => {

        //   예약실행할부분. 작성된 코드가 정해진 시간 뒤에 실행된다.

        // }, 1000ms); <- 1초 뒤에 실행하겠다는 뜻

        //    setTimeout 함수에는 두개의 인수를 전달한다.
        // 실행할 함수(콜백), 몇초 뒤에 실행할것인지 시간(ms)


        // 애니메이션 끝난다음에 = 1초뒤에
        // 인덱스를 마지막페이지로 넘기고
        // 트랜지션 없이 위치 적용
        setTimeout(() => {


            index = 슬라이드갯수 + 한번에보는슬라이드 - 1;
            위치적용(false);

        }, 애니메이션속도);
    }
})
nextButton.addEventListener('click',()=>{
    index++;
    if(index > 슬라이드갯수+한번에보는슬라이드-1) {
        setTimeout(() => {
            index = 한번에보는슬라이드;
            위치적용(false);
        }, 애니메이션속도);
    }
    위치적용(true);
})


function 위치적용(애니메이션여부) {

    let 현재슬라이드 = index - 한번에보는슬라이드 + 1;
    console.log(현재슬라이드);


    contentsWrapper.style.transform = 
    `translateX(${index * -300}px)`


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


    // 애니메이션 여부가 true라면 트랜지션을 1초로,
    // false라면 0초로 지정되게끔 해주세요.
    // 초는 문자열을 직접 넣는게 아니라, 상수 [애니메이션속도] 를 활용해 설정해봅시다.

    if(애니메이션여부){
        contentsWrapper.style.transition = `${애니메이션속도}ms`
    }else {
        contentsWrapper.style.transition = `0ms`
    }

    // contentsWrapper.style.transition = `1s`

    
}



const 하단버튼 = document.querySelectorAll('.slider-radio-button')

console.log(하단버튼[0]);


function 버튼색변경(버튼순서) {


    
    for(let i = 0 ; i < 하단버튼.length; i ++) {
        하단버튼[i].classList.remove('active');
    }

        하단버튼[버튼순서-1].classList.add('active');
    
}

for(let i = 0 ; i < 하단버튼.length ; i ++) {
    하단버튼[i].addEventListener('click',()=>{
        index = i;
        위치적용();
    })
}


위치적용(false);