// przykładowa metoda wywołania kodu to: node task2.js 1, 2, 3, 4, 5, 6 //

const colors = require('colors');
// obsługa parametrów wejściowych
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Brak podanego tekstu!');
  process.exit(1);
}
const text = args.join(' ');

// wyświetlanie kolorowego tekstu
console.log(colors.rainbow(text));
