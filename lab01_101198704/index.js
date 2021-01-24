
const fs = require('fs').promises;

async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}
// reading file 
readFile('input_countries.csv');
// deleting Canada
fs.unlink("Canada.txt")

fs.unlink("Canada.txt", (err) => {
    console.log("File Deleted Successfully...")
})

// Delete USA.txt 
fs.unlink("USA.txt",(err) =>{
    console.log("File successfully deleted!!!")
})
// open a new txt file and reading it throw 
async function openFile() {
    try {
      const csvHeaders = 'Afghanistan'
      await fs.writeFile('Afghanistan.txt', csvHeaders);
    } catch (error) {
      console.error(`Got an error trying to write to a file: ${error.message}`);
    }
  }

  async function addData(country,year,population) {
    try {
      const csvLine = `\n${country},${year},${population}`
      await fs.writeFile('Afghanistan.txt', csvLine, { flag: 'a' });
    } catch (error) {
      console.error(`Got an error trying to write to a file: ${error.message}`);
    }
  }

  (async function () {
    await openFile();
    await addData('country : ', 'Afghanistan');
    await addData('year', 2008);
    await addData('population', '34 million');
    await addData('country : ', 'Afghanistan');
    await addData('year', 2020);
    await addData('population', '36 million');

  })();
