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
	}
}

async function getFromAPI(fileData) {
	url += fileData.number;
	return await fetch(url)
		.then((data) => data.text())
		.catch((error) => console.log(error));
}

async function writeDataInFile(fileName, apiData) {
	console.log(apiData);
	try {
		await fsp.writeFile(fileName, apiData);
	} catch (error) {
		console.error('Nie udał się zapis pliku');
	}
}

(async () => {
	const fileData = await readFromFile();
	const apiData = await getFromAPI(fileData);
	await writeDataInFile(fileData.filename, apiData);
})();