function filterItems(category, button) {
    const items = document.querySelectorAll('#item_list li');
    let itemArr = [];
    if(button.classList.contains('active')){
        button.classList.remove('active');
    }else{
        button.classList.add('active')
    };
    const activeBtn = $('.filter_label.active');
    for(let i = 0; i < activeBtn.length; i++){
        itemArr.push(activeBtn.eq(i).data('filter'))
    }
    console.log(itemArr);

    // 필터링
    items.forEach(item => {
        if (itemArr.includes(item.className)) {
            item.style.display = 'list-item'; // 표시
        } else {
            item.style.display = 'none'; // 숨김
        }
    });

    // 모든 버튼에서 active 클래스 제거
    const buttons = document.querySelectorAll('.filter_label');
    // buttons.forEach(btn => {
    //     btn.classList.remove('active');
    // });
    // 클릭된 버튼에 active 클래스 추가
    
    // function filterItems(category, button) {
    //     const items = document.querySelectorAll('#item_list li');
    //     let itemArr = [];
    //     if(button.classList.contains('active')){
    //         button.classList.remove('active');
    //     }else{
    //         button.classList.add('active')
    //     };
    
    //     const activeBtn = $('.filter_label.active');
    //     for(let i = 0; i < activeBtn.length; i++){
    //         itemArr.push(activeBtn.eq(i).text())
    //     }
    //     console.log(itemArr);
        
    //     // 필터링
    //     items.forEach(item => {
    //         if (item.classList.contains(category)) {
    //             item.style.display = 'list-item'; // 표시
    //         } else {
    //             item.style.display = 'none'; // 숨김
    //         }
    //     });
    
    //     // 모든 버튼에서 active 클래스 제거
    //     const buttons = document.querySelectorAll('.filter_label');
    //     // buttons.forEach(btn => {
    //     //     btn.classList.remove('active');
    //     // });
    //     // 클릭된 버튼에 active 클래스 추가
        
    
    
    // }

}

// 모든 항목을 다시 표시하는 함수
function clearFilter() {
    const items = document.querySelectorAll('#item_list li');
        // 항목 지우려면 list-item 이 아닌 none 으로 해주셔야 해요!
    items.forEach(item => {
        item.style.display = 'none'; // 모든 항목 표시
    });

    // 모든 버튼에서 active 클래스 제거
    const buttons = document.querySelectorAll('.filter_label');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
}


 // 이건 chat gpt가 해줘서 개념을 다시 이해해야할것 같습니다 
 //개념을 설명해주세요 !!!!!!!!!!!!!!!!!!



//jquery 클릭 이벤트
// .click( ()=>{}  )

$('#work').click( ()=>{
    $('.filter_area').delay(1000).slideDown({
        duration:800,
    })
}
)

$('.filter_arrow').click(()=>{
    $('.filter_area').slideUp({
        duration:800,
    })
    $('.filter_arrow').css('transform','rotate(180deg)')
    // $('.filter_arrow').delay(800).css('transform','')
    setTimeout(()=>{
        $('.filter_arrow').css('transform','')
    },800);
    //filter_arrow
})