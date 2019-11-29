let myVariable = '李雷';
myVariable = '韩梅梅';

let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('我最喜欢巧克力冰激淋了。');    
} else {
  alert('但是巧克力才是我的最爱呀……');    
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

/*document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test-site.png') {
      myImage.setAttribute('src', 'images/test-site2.png');
    } else {
      myImage.setAttribute('src', 'images/test-site.png');
    }
}


// 设置个性化欢迎信息
// 获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// 个性化欢迎信息设置函数
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }
}

// 初始化代码：在页面初次读取时进行构造工作：
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

// 为按钮设置 onclick 事件处理器：
myButton.onclick = function() {
  setUserName();
};

