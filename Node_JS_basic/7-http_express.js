const express = require('express');
const fs = require('fs');

const app = express();

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      lines.shift();

      if (lines.length === 0) {
        reject(new Error('No students found in the database'));
        return;
      }

      const students = {};
      for (const line of lines) {
        const trimmedLine = line.trim();
        if (trimmedLine !== '') {
          const fields = line.split(',');
          const firstname = fields[0];
          const field = fields[3];

          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstname);
        }
      }

      let output = `Number of students: ${lines.length}\n`;
      for (const [field, names] of Object.entries(students)) {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      resolve(output.trim());
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  try {
    const data = await countStudents(process.argv[2]);
    res.end(data);
  } catch (err) {
    res.end(err.message);
  }
});

app.listen(1245);

module.exports = app;
