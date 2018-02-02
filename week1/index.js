//Ваш код будет здесь

var startNewGame = function() {
  alert('Она работает');

  var cells = document.querySelectorAll('div.cell');
  console.log('cells', cells);

  cells.forEach( cell => {
    cell.classList.remove('x');
    cell.classList.remove('o');

    console.log('cell', cell);
  })
}