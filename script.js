//your JS code here. If required.
let li = document.getElementById("level");
let levelText = li.innerText;
let arr = levelText.split(' ');
let level = arr[1];

alert(`The level of the element is: ${level}`)