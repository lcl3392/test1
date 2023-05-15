 // 상단 진료 안내 

   function $(selector) {                          // $ 함수는 전달된 CSS selector를 가진 첫 번째 요소를 선택합니다
    return document.querySelector(selector);       
  }
  
  function $$(selector) {                          // $$ 함수는 전달된 CSS selector를 가진 모든 요소를 선택합니다.
    return document.querySelectorAll(selector);   
  }
  
  let title = $('.navi_n2 .menu1');
  let list = $('.navi_n2 .th1');
  
  title.addEventListener('mouseover', e => {       //navi_n2 .menu1 요소에 마우스 오버 시 발생
    list.classList.add('on');                      //이벤트 콜백 함수에서는 .navi_n2 .th1 요소에 .on 클래스를 추가하여 메뉴 리스트를 보여줍니다. 
    list.addEventListener('mouseover', e => {      //메뉴 리스트에서 마우스 오버를 한 경우에도 .on 클래스를 유지
      list.classList.add('on');
    })
  });
  
  title.addEventListener('mouseleave', e => {      //마우스가 해당 엘리먼트 위로 올라갔을 때 발생, .navi_n2 .th1 요소에서 .on 클래스를 제거하여 메뉴 리스트를 숨깁니다
    list.classList.remove('on');
    list.addEventListener('mouseleave', e => {     //마우스 오버를 한 경우에도 마찬가지로 .on 클래스를 제거
      list.classList.remove('on');
    })
  });
  
  let title1 = $('.navi_n3 .menu2');
  let list1 = $('.navi_n3 .th2');
  
  title1.addEventListener('mouseover', e => {
    list1.classList.add('on');
    list1.addEventListener('mouseover', e => {
      list1.classList.add('on');
    })
  });
  
  title1.addEventListener('mouseleave', e => {
    list1.classList.remove('on');
    list1.addEventListener('mouseleave', e => {
      list1.classList.remove('on');
    })
  });
  

  // li진료 box
  const medicalList = $$('.medical_list_clinic > li');          //medicalList 변수에는 medical_list_clinic 클래스를 가진 요소의 자식 li들이 담김
  
  medicalList.forEach(item => {                              
    item.addEventListener('mouseenter', e => {                  //medicalList 배열의 각 요소에 대해 mouseenter 이벤트 리스너가 추가
      let id = e.currentTarget.dataset.id;                      //mouseenter 이벤트가 발생하면 해당 이벤트의 타겟 요소의 data-id 속성 값을 가져옴
      const clinicBox1 = $$('.clinic-box1 > li');               //clinicBox1 변수에는 clinic-box1 클래스를 가진 요소의 자식 li들이 담김
      clinicBox1.forEach((box, index) => {                      //clinicBox1 배열의 각 요소에 대해 콜백 함수가 실행됩니다. 이 콜백 함수에서는 인덱스와 id 값을 비교하여 인덱스가 id와 일치하는 경우 
        box.style.display = index == id ? 'block' : 'none';     //해당 요소를 보이도록(display: block) 설정하고,  그렇지 않은 경우에는 해당 요소를 숨기도록(display: none) 설정
      });                                                       //마우스를 요소 위에 올렸을 때 해당 요소의 data-id 속성 값에 해당하는 clinic-box1 클래스를 가진 요소만 보이도록 하는 기능을 구현하는 코드
    });
  });
 

  


//  상단아이콘
const get = target => {
    return document.querySelector(target);
}
const getAll = target => {
    return document.querySelectorAll(target);
}

// 타이틀박스
let $shareIcon = getAll('.title-wrap .icon-box li p');
let $snsBox = get('.title-wrap .icon-box li .sns-box');
let $shareBg = get('.title-wrap .bg');

//타이틀박스 공유 아이콘 All
$shareIcon.forEach(shareItem => {
    shareItem.addEventListener('mouseenter',e => e.currentTarget.classList.add('on'));
    shareItem.addEventListener('mouseleave',e=> e.currentTarget.classList.remove('on'));
})

//타이틀박스 sns공유 아이콘 팝업
$shareIcon[0].addEventListener('click',e=>{
    $snsBox.classList.add('on');
    $shareBg.classList.add('on');
})
$shareBg.addEventListener('click',e=>{
    $shareBg.classList.remove('on');
    $snsBox.classList.remove('on');
})
$shareIcon[1].addEventListener('click',e=> prompt('이 글의 URL 주소입니다. Ctrl+C를 눌러 클립보드로 복사하세요.', window.location.href));
$shareIcon[2].addEventListener('click',e=> window.print());



