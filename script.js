


gsap.from(".box", {
    opacity: 0,
    y: -100,
    duration: 1,
    stagger: 0.2 // 각 요소 사이의 애니메이션 간격
});


window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    let bg  = window.scrollY;
    
    if(bg > 136){
        if(!document.querySelector('header').classList.contains('bgBlack')){
            document.querySelector('header').classList.add('bgBlack');
        }
        
    }else{
        if(document.querySelector('header').classList.contains('bgBlack')){
            document.querySelector('header').classList.remove('bgBlack');
        }
    }

})

