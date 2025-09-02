const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      lines.shift();

      const students = {};
      for (const line of lines) {
        const record = line.split(',');
        const firstname = record[0].trim();
        const field = record[3] ? record[3].trim() : '';
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      }

      const total = Object.values(students).reduce((sum, arr) => sum + arr.length, 0);
      console.log(`Number of students: ${total}`);

      for (const field of Object.keys(students).sort()) {
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
