function calculateGrade(mark) {
    if (mark > 79) {
      return 'A';
    } else if (mark >= 60) {
      return 'B';
    } else if (mark >= 50) {
      return 'C';
    } else if (mark >= 40) {
      return 'D';
    } else {
      return 'E';
    }
  }
  
  function studentGradeGenerator() {
    const mark = parseFloat(prompt('Enter the student mark (0-100):'));
  
    if (isNaN(mark) || mark < 0 || mark > 100) {
      return 'Invalid input. Please enter a valid mark between 0 and 100.';
    }
  
    const grade = calculateGrade(mark);
    return `The student's grade is: ${grade}`;
  }
  
  
  const result = studentGradeGenerator();
  console.log(result);
  
