function gradeToPoint(grade) {
   console.log(grade);
    switch (grade) {
        case "A+":
          return 4.0;
        case "A":
          return 3.75;
        case "A-":
          return 3.50;
        case "B+":
          return 3.25;
        case "B":
          return 3.00;
        case "B-":
          return 2.75;
        case "C+":
          return 2.50;
        case "C":
          return 2.25;
        case "D":
          return 2.00;
        default:
          return 0.0;
    }
  }
  function getGradeFromPoint(gradePoint) {
    if (gradePoint >= 4.0) {
      return "A+";
    } else if (gradePoint >= 3.75) {
      return "A";
    } else if (gradePoint >= 3.5) {
      return "A-";
    } else if (gradePoint >= 3.25) {
      return "B+";
    } else if (gradePoint >= 3.0) {
      return "B";
    } else if (gradePoint >= 2.75) {
      return "B-";
    } else if (gradePoint >= 2.5) {
      return "C+";
    } else if (gradePoint >= 2.25) {
      return "C";
    } else if (gradePoint >= 2.0) {
      return "D";
    } else {
      return "F";
    }
  }
  function savetoLocalStorage(data){
      console.log(data);
      localStorage.removeItem('result');
      localStorage.setItem('result',JSON.stringify(data))
  }
  function getfromLocalStorage()
  {
     if(localStorage.getItem('result')) return JSON.parse(localStorage.getItem('result'));
     else
     {
       return {
          data: [
            { id: 1, semesterNumber: 'First Year First Semester (1-1)', credit: '18.50', scgpa: '', grade: '' },
            { id: 2, semesterNumber: 'First Year Second Semester (1-2)', credit: '19.50', scgpa: '', grade: ''  },
            { id: 3, semesterNumber: 'Second Year First Semester (2-1)', credit: '17.75', scgpa: '', grade: ''},
            { id: 4, semesterNumber: 'Second Year Second Semester (2-2)', credit: '19.25', scgpa: '', grade: '' },
            { id: 5, semesterNumber: 'Third Year First Semester (3-1)', credit: '19.50', scgpa: '', grade: '' },
            { id: 6, semesterNumber: 'Third Year Second Semester (3-2)', credit: '19.50', scgpa: '', grade: '' },
            { id: 7, semesterNumber: 'Fourth Year First Semester (4-1)', credit: '18.50', scgpa: '', grade: '' },
            { id: 8, semesterNumber: 'Fourth Year Second Semester (4-2)', credit: '15.50', scgpa: '', grade: '', },
          ],
          totalCredit:148,
          CGPA:0.00,
          activatedCredit:0,
        };
     }
  }
  export {gradeToPoint,getGradeFromPoint,savetoLocalStorage,getfromLocalStorage};