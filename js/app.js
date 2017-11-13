window.onload = function() {
  var board = document.querySelector('.board-js');
  board.addEventListener('click',addX);
};
var centinel = true;
function addX(event) {
  if(event.target.matches('td') && event.target.textContent === ''){
    if (centinel)
      event.target.textContent = 'X';
    else
      event.target.textContent = 'O';
    centinel = !centinel;
  }
}

td1 = document.getElementById('one');
var td2 = document.getElementById('two');
var td3 = document.getElementById('three');
var td4 = document.getElementById('four');
var td5 = document.getElementById('five');
var td6 = document.getElementById('six');
var td7 = document.getElementById('seven');
var td8 = document.getElementById('eight');
var td9 = document.getElementById('nine');
    
function win() {
  if(td1.textContent==='X' && td2.textContent==='X' && td3.textContent==='X'){
      alert('Gano primer jugador');
    }
}
win();