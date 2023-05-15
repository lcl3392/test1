let box = document.querySelectorAll('.counseling .table')
let btn = document.querySelectorAll('.counseling .professional_text button')
let container = document.querySelector('#professional-container')
let id = 0, old = 0;

btn.forEach(item=>{
    item.addEventListener('click',e=>{
        id =e.currentTarget.dataset.id;

        box.forEach(boxList=>{
            boxList.style.display = 'none';
        })
        box[id].style.display = 'block';

        btn[old].classList.remove('on');
        e.currentTarget.classList.add('on');

        old = id;

    })
})


let proTitle = document.querySelector('.professional_text strong')
let proTitle1 = document.querySelector('.professional_text strong')

function make1(){
    proTitle1.innerHTML = '전문의 상담'
}
function make2(){
    proTitle.innerHTML = '영양제 상담'
}



//모달창 버튼
function openModal() {
    document.getElementById("pwModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("pwModal").style.display = "none";
  }
  

