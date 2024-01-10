// HBD-text 부분
let hbdTarget = document.getElementById('HBD-text');
let hbdStringArr = ['생일 축하해 하늘!!'];

function randomHbdString() {
  return hbdStringArr[0].split('');
}

function resetHbdTyping() {
  hbdTarget.textContent = '';
  hbdText(randomHbdString());
}

function hbdText(randomArr) {
  if (randomArr.length > 0) {
    hbdTarget.textContent += randomArr.shift();

    setTimeout(function () {
      hbdText(randomArr);
    }, 150);
  }
}

hbdText(randomHbdString());

function blink() {
  hbdTarget.classList.toggle('remove');
}
setInterval(blink, 600);

// memory-text 부분
let memoryTarget = document.getElementById('memory-text');
let memoryStringArr = ['우리가 함께한 시간들'];

function randomMemoryString() {
  return memoryStringArr[0].split('');
}

function resetMemoryTyping() {
  memoryTarget.textContent = '';
  // blink(); // 추가: 커서 깜빡임 효과를 시작하기 위해 blink 함수 호출
  memoryText(randomMemoryString());
}

function memoryText(randomArr) {
  if (randomArr.length > 0) {
    memoryTarget.textContent += randomArr.shift();

    setTimeout(function () {
      memoryText(randomArr);
    }, 150);
  }
}

// ==================================== cake motion

// 5초 후 timeout
setTimeout(function delCake() {
  let cakeArr = Array.from(
    document.querySelectorAll(
      'article#lights, div#candle-body, div#cream, div.chiffon, div#cake-bottom, h3#next-text'
    )
  );
  cakeArr = cakeArr.reverse();
  let i = 0;

  let runCake = setInterval(function () {
    cakeArr[i].classList.remove('displayNone');
    i++;

    if (i == cakeArr.length) {
      clearInterval(runCake);

      // 'cake motion'이 완료된 후 'memory text' 시작
      setTimeout(function () {
        resetMemoryTyping();
      }, 1000); // 1000은 'cake motion' 애니메이션의 지속 시간을 대략적으로 고려한 값
    }
  }, 1000);
}, 2000);

// ============================== next button

function nextPage() {
  let nextButton = document.getElementById('candle');
}

// ==================================================== memory text
