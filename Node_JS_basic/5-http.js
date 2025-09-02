const http = require('http');
const fs = require('fs');

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

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    countStudents(process.argv[2])
      .then((data) => {
        res.end(data);
      })
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
