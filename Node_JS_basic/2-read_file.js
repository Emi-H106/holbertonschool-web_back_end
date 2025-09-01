const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n').filter((line) => line.trim() !== '');
  lines.shift();

  const students = {};
  for (const line of lines) {
    const record = line.split(',');
    const firstname = record[0].trim();
    const field = record[3].trim();

    if (!students[field]) {
      students[field] = [];
    }
    students[field].push(firstname);
  }

  const totalStudents = Object.values(students).reduce((sum, arr) => sum + arr.length, 0);
  console.log(`Number of students: ${totalStudents}`);

  for (const field of Object.keys(students).sort()) {
    console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
  }
}

module.exports = countStudents;
