//Ваш код будет здесь

var startNewGame = function() {

  var cells = document.querySelectorAll('.cell');
  var winnerMsg = document.querySelector('.winner-message').innerHTML = ''
  var clicks = [];

  cells.forEach( cell => {

    cell.classList.remove('x');
    cell.classList.remove('o');

    let listener = cell.addEventListener('click', function() {
      clicks.push(1)

      if (cell.classList.value.search('x') === -1 &&  cell.classList.value.search('x') === -1 ) {
        if (clicks.length % 2 === 0) {
          cell.classList.add('x');
        } else {
          cell.classList.add('o');
        }
      }

      console.log('getWinner', getWinner());
      var winner = getWinner();
      if (winner) {
        var winnerMsg = document.querySelector('.winner-message').innerHTML = `${winner} Победил`;
      };
      cell.removeEventListener('click', function() {
        console.log('removed');
      });
    });

  });
};