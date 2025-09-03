import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
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
      resolve(students);
    });
  });
}
