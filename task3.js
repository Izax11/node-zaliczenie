const fs = require('fs');

// definiowanie zmiennej 'filePatch'
const filePath = process.argv[1];

fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error(`Błąd przy pobieraniu statystyk pliku: ${err}`);
    return;
  }

  console.log(`Czas utworzenia: ${stats.birthtime}`);
  console.log(`Czas modyfikacji: ${stats.mtime}`);
  console.log(`Rozmiar: ${stats.size} bajtów`);
});


