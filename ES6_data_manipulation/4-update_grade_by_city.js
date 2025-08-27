export default function updateStudentGradeByCity(students, city, newGrade) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const updatedStudent = newGrade.find(g => g.studentId === student.id);
      let grade;
      if (updatedStudent) {
        grade = updatedStudent.grade;
      } else {
        grade = 'N/A';
      }

      return {
        ...student,
        grade: grade
      };
    })
}
