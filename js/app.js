window.onload = function() {
    var board=document.querySelector('.michi-js');
    board.addEventListener('click',addX);
    };
    var centinel=true;
    function addX(event){
      if(event.target.matches('td') && event.target.textContent === ''){
          event.target.textContent='X';
          centinel=!centinel;
        } else {
          event.target.textContent='O';
          centinel=!centinel;
        }
      }
    }