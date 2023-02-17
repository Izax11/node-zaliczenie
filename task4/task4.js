const fetch = require('node-fetch');
const fsp = require('fs').promises;

let url = 'http://numbersapi.com/';

async function readFromFile() {
try {
    const data = await fsp.readFile('data.json', 'utf8');
    const fileData = JSON.parse(data);
return fileData;
} catch (error) {
    console.error('Nie udało się odczytać pliku');
    throw error; // rzucamy błąd, aby obsłużyć go w wyższej funkcji
    }
}

async function getFromAPI(fileData) {
url += fileData.number;
try {
    const data = await fetch(url);
    const textData = await data.text();
return textData;
} catch (error) {
    console.log(error);
throw error; // rzucamy błąd, aby obsłużyć go w wyższej funkcji
}
}

async function writeDataInFile(fileName, apiData) {
console.log(apiData);
try {
    await fsp.writeFile(fileName, apiData);
        } catch (error) {
    console.error('Nie udał się zapis pliku');
    throw error; // rzucamy błąd, aby obsłużyć go w wyższej funkcji
    }
}

(async () => {
try {
    const fileData = await readFromFile();
    const apiData = await getFromAPI(fileData);
await writeDataInFile(fileData.filename, apiData);
} catch (error) {
    console.error('Wystąpił błąd:', error);
}
})();