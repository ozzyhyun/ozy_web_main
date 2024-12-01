
const sec01 = document.querySelector('.section_01');


const frame = document.querySelector('.frame');
const iframe = frame.querySelector('iframe');

const projects = document.querySelectorAll('.pjt');

// let num = 0;
//버튼 클릭 시 num++;

//console.log() 로 num 띄워서 확인한거 캡쳐로 보내기

/*
const //선언과 동시에 값이 부여되어야 하고, 변수명은 겹칠 수 없음;
let   // 선언과 동시에 값이 부여 안되어도 괜찮지만, 변수명은 겹치면 안됨;
var //다 괜찮음 동시에 값이 부여 안되어도 상관없고, 변수명 겹쳐도 괜찮음; 얘는 사용하지 말 것
/

/ height 100px++
    width:100%;
    text:고정
*/

window.addEventListener('scroll', () => {
    let bg  = window.scrollY;
    let sec01AddVal = 99; // 섹션1 스크롤 높이
    if(bg > sec01AddVal){
        sec01.classList.add('active');
    }
    if(bg > 125 ){
        if(!document.querySelector('header').classList.contains('bgBlack')){
            document.querySelector('header').classList.add('bgBlack');
        }
    }else{
        if(document.querySelector('header').classList.contains('bgBlack')){
            document.querySelector('header').classList.remove('bgBlack');
        }
    }
})

const closeBtn =  document.querySelector('.btn_close');
closeBtn.addEventListener('click',() => {
    frame.classList.remove('active');
    frame.classList.remove('on_left');
});


for(let i = 0; i < projects.length; i++){
    projects[i].addEventListener('click',()=>{
        //클릭된 주체 .pjt 에 .left 클래스가 있는지
        if(projects[i].classList.contains('left')){
            frame.classList.add('on_left');
        }
        //공통 실행부분
        frame.querySelector('iframe').src = `./ozzy_web_sub_detail_0${i + 1}.html`;
        // 템플릿 리터럴 문법
        frame.classList.add('active');
    });
}




AOS.init({
    duration: 800,
    once: true,
})
