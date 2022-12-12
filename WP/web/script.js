// 문서의 내용이 모두 load되면 할 일
// 대상.addEventListener('이벤트종류', 할 일);
// DOMContentLoaded
// 할 일 = 함수 = function(){ 실제로 }

document.addEventListener('DOMContentLoaded', function(){
    // 변수 지정
    var $slideInner = document.querySelector('.slide_inner'),
    $slide = document.querySelectorAll('.slide'), /* 슬라이드가 배열로 들어옴 */ 
    $navPrev = document.getElementById('prev'),
    $navNext = document.getElementById('next'),
    $slideCount = $slide.length,
    $lastCheck = 0,
    $currentIndex = 0;
    
    // 슬라이드 가로로 배열하기
    for(var j = 0; j < $slideCount; j++) {
        $slide[j].style.left = j * 100 + '%';
    }

    // 슬라이드 이동 함수
    function goToSlide(idx){
        $slideInner.style.left = idx * -100 + '%';
        $currentIndex = idx;
    }

    // 버튼을 클릭하면 슬라이드 이동시키기
    $navPrev.addEventListener('click', function(){ // 이전 버튼 클릭 시
        $lastCheck = $currentIndex - 1;
        if($lastCheck >= 0) {
            goToSlide($lastCheck);
        }
    });
    $navNext.addEventListener('click', function(){ // 다음 버튼 클릭 시
        $lastCheck = $currentIndex + 1
        if($lastCheck != $slideCount) {
            goToSlide($lastCheck);
        }
    });
})


// 대륙마다 나라 변경
function findChecked(id) { // id = "Asia", "America", ...
    let popList = ["pop1","pop2","pop3","pop4","pop5"];

    let continentAll = document.getElementsByName("continent");
    for(let i = 0; i < continentAll.length; i++) {
        if(continentAll[i].id == id) {
            current_val = document.getElementById(popList[i]);
            current_val.style.display = "block";
        } else{
            document.getElementById(popList[i]).style.display = "none";
        }
    }
}

// title(대륙 이름) 변경
function titleChange(id) {
    var t = document.querySelector('.title');
    if(id == "Africa/UAE") {
        t.innerHTML = "Africa<br>&<br>UAE";
        t.style.fontSize = 120 + "px";
        t.style.top = 170 + "px";
        t.style.lineHeight = 95 + "%";
    } else {
        t.innerHTML = id;
        t.style.fontSize = 160 + "px";
        t.style.top = 185 + "px";
        t.style.lineHeight = 100 + "%";
    }
}

// Top