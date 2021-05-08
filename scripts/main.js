var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/002.jpg') {
      myImage.setAttribute ('src','images/003.jpg');
    } else {
      myImage.setAttribute ('src','images/002.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3');



function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello from Sochi, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }