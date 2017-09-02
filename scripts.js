var getButton = document.getElementsByClassName('button');

console.log(getButton);

for ( var i = 0 ; i < getButton.length ; i++) {
	alert(getButton[i].innerText);
}	