let target = document.getElementById("HBD-text");
let stringArr = ["배짱님의 생일을 축하합니다.", "이은창님의 생일을 축하합니다.",
 "은창님의 생일을 축하합니다.", "은냥님의 생일을 축하합니다."];
// 배열 크기 미만인 값까지 가져옴
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
// 가지고 온 배열의 문자열을 "" 기준으로 쪼개(split) 다시 배열로 변경
let selectStringArr = selectString.split(""); 


function randomString() {
  let target = document.getElementById("HBD-text");
  let stringArr = ["배짱님의 생일을 축하합니다.", "이은창님의 생일을 축하합니다.",
  "은창님의 생일을 축하합니다.", "은냥님의 생일을 축하합니다."];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");  

  return selectStringArr;
}

// reset typing
function restetTyping() {
  target.textContent = "";
  hbdText(randomString());
}

// 한글자씩 텍스트 출력 함수
//배열화 되어있는 값이 매개변수로 전달됨
function hbdText(randomArr) {
// 배열 길이 값이 0이 될 때까지 실행
  if(randomArr.length > 0){
    //shift : 배열이 있다면 앞의 값부터 빼냄, textContent로 빠진 값을 출력
    target.textContent += randomArr.shift();
    //모든 문자열이 출력될 때까지 반복
    setTimeout(function(){
      hbdText(randomArr);
    }, 150);
  }else { // 남아있는게 없을 때
    setTimeout(restetTyping, 2000);
  }
}
//호출 시 랜덤 배열을 매개변수로 받음
hbdText(randomString());

// 커서 깜박임 효과
function blink() {
  target.classList.toggle("remove");
}
setInterval(blink, 600);

function nextPage() {
  let nextButton = document.getElementById("next-btn");
  window.scrollTo(0, 1281);
}

// 캔버스요소 가져오기        
let cake_body1 = document.getElementById("cake-body1");
let cake_body2 = document.getElementById("cake-body2");
// 드로잉용 컨텍스트 생성        
let context_canvas1 = cake_body1.getContext("2d");
let context_canvas2 = cake_body2.getContext("2d");
// 드로잉 살
context_canvas1.fillStyle = "#535E78"; // 면색상
context_canvas2.fillStyle = "#535E78"; // 면색상

// 드로잉 뼈      
context_canvas1.rect(20, 20, 120, 20); // 도형       
context_canvas2.rect(20, 20, 120, 20); // 도형       
context_canvas1.fill(); // 면색       
context_canvas2.fill(); // 면색       