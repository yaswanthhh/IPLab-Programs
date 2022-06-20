var fs = require('fs');

//Rename the file "mynewfile1.txt" into "myrenamedfile.txt":
fs.rename('sample.txt', 'file.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
