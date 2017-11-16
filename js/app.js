window.addEventListener('load', function() {
  var table = document.getElementsByClassName('board')[0];
  var count = 0;
  var centinel = true;

  document.getElementById('btn').addEventListener('click', function() {
    window.location.reload();
  });
  
  table.addEventListener('click', function() {
    if (event.target.matches('td') && event.target.textContent === '') {
      if (centinel) {
        event.target.textContent = 'X';
        centinel = false;
        count++;
      } else {
        event.target.textContent = 'O';
        centinel = !centinel;
        count++;
      }
    }
    if (count >= 5 && count <= 9) {
      win();
    };
  });

  var tb1 = document.getElementById('td1');
  var tb2 = document.getElementById('td2');
  var tb3 = document.getElementById('td3');
  var tb4 = document.getElementById('td4');
  var tb5 = document.getElementById('td5');
  var tb6 = document.getElementById('td6');
  var tb7 = document.getElementById('td7');
  var tb8 = document.getElementById('td8');
  var tb9 = document.getElementById('td9');

  function win() {
    switch (true) {
    case tb1.textContent === 'X' && tb2.textContent === 'X' && tb3.textContent === 'X':
      alert('GANA X!');
      tb1.className += 'winner';
      tb2.className += 'winner';
      tb3.className += 'winner';
      break;
    case tb1.textContent === 'O' && tb2.textContent === 'O' && tb3.textContent === 'O':
      alert('GANA O');
      tb1.className += 'winner';
      tb2.className += 'winner';
      tb3.className += 'winner';
      break;
    case tb4.textContent === 'X' && tb5.textContent === 'X' && tb6.textContent === 'X':
      alert('GANA X!');
      tb4.className += 'winner';
      tb5.className += 'winner';
      tb6.className += 'winner';
      break;
    case tb4.textContent === 'O' && tb5.textContent === 'O' && tb6.textContent === '0':
      alert('GANA O!');
      tb4.className += 'winner';
      tb5.className += 'winner';
      tb6.className += 'winner';
      break;
    case tb7.textContent === 'X' && tb8.textContent === 'X' && tb9.textContent === 'X':
      alert('GANA X!');
      tb7.className += 'winner';
      tb8.className += 'winner';
      tb9.className += 'winner';
      break;
    case tb7.textContent === 'O' && tb8.textContent === 'O' && tb9.textContent === 'O':
      alert('GANA O!');
      tb7.className += 'winner';
      tb8.className += 'winner';
      tb9.className += 'winner';
      break;
    case tb1.textContent === 'X' && tb4.textContent === 'X' && tb7.textContent === 'X':
      alert('GANA X!');
      tb1.className += 'winner';
      tb4.className += 'winner';
      tb7.className += 'winner';
      break;
    case tb1.textContent === 'O' && tb4.textContent === 'O' && tb7.textContent === 'O':
      alert('GANA O!');
      tb1.className += 'winner';
      tb4.className += 'winner';
      tb7.className += 'winner';
      break;
    case tb2.textContent === 'X' && tb5.textContent === 'X' && tb8.textContent === 'X':
      alert('GANA X!');
      tb2.className += 'winner';
      tb5.className += 'winner';
      tb8.className += 'winner';
      break;
    case tb2.textContent === 'O' && tb5.textContent === 'O' && tb8.textContent === 'O':
      alert('GANA O!');
      tb2.className += 'winner';
      tb5.className += 'winner';
      tb8.className += 'winner';
      break;
    case tb3.textContent === 'X' && tb6.textContent === 'X' && tb9.textContent === 'X':
      alert('GANA X!');
      tb3.className += 'winner';
      tb6.className += 'winner';
      tb9.className += 'winner';
      break;
    case tb3.textContent === 'O' && tb6.textContent === 'O' && tb9.textContent === 'O':
      alert('GANA O!');
      tb3.className += 'winner';
      tb6.className += 'winner';
      tb9.className += 'winner';
      break;
    case tb1.textContent === 'X' && tb5.textContent === 'X' && tb9.textContent === 'X':
      alert('GANA X!');
      tb1.className += 'winner';
      tb5.className += 'winner';
      tb9.className += 'winner';
      break;
    case tb1.textContent === 'O' && tb5.textContent === 'O' && tb9.textContent === 'O':
      alert('GANA O!');
      tb1.className += 'winner';
      tb5.className += 'winner';
      tb9.className += 'winner';
      break;
    case tb3.textContent === 'X' && tb5.textContent === 'X' && tb7.textContent === 'X':
      alert('GANA X!');
      tb3.className += 'winner';
      tb5.className += 'winner';
      tb7.className += 'winner';
      break;
    case tb3.textContent === 'O' && tb5.textContent === 'O' && tb7.textContent === 'O':
      alert('GANA O!');
      tb3.className += 'winner';
      tb5.className += 'winner';
      tb7.className += 'winner';
      break;
    case count === 9:
      alert('EMPATE');
      break;
    };
  };
});

