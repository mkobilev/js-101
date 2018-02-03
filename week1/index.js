//Ваш код будет здесь
window.addEventListener('load', function() {
  var button = document.querySelector('.startNewGame');
  var cells = document.querySelectorAll('.cell');
  var field = document.querySelector('.field');
  var winnerMsg = document.querySelector('.winner-message');
  var nextMove = 'x';

  button.addEventListener('click', function startNewGame() {
    cells.forEach(cell => {
      cell.classList.remove('x');
      cell.classList.remove('o');
    });
    nextMove = 'x';
    winnerMsg.innerHTML = '';
  });

  field.addEventListener('click', function handleCellClick(e) {
    if (
      !e.target.classList.contains('cell') ||
      e.target.classList.contains('x') ||
      e.target.classList.contains('o')
    ) {
      return;
    }

    if (getWinner()) {
      return;
    }

    e.target.classList.add(nextMove);
    if (nextMove === 'x') {
      nextMove = 'o';
    } else {
      nextMove = 'x';
    }

    var winner = getWinner();
    if (winner) {
      if (winner === 'x') {
        winnerMsg.innerHTML = 'Крестик победил';
      } else {
        winnerMsg.innerHTML = 'Нолик победил';
      }
    }
  });

});
