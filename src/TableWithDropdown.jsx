import  { Component } from 'react';
import './table.css';
import { gradeToPoint } from './assets/utility/gradetoPoint';

class TableWithDynamicHeadersAndDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, courseCode: 'CSE-1101', courseName: 'Fundamentals of Computers and Computing', credit: 2, grade: 'Select', gradePoint: 0.0 },
        { id: 2, courseCode: 'CSE-1102', courseName: 'Discrete Mathematics', credit: 3, grade: 'Select', gradePoint: 0.0 },
        { id: 3, courseCode: 'EEE-1103', courseName: 'Electrical Circuits', credit: 3, grade: 'Select', gradePoint: 0.0 },
        { id: 4, courseCode: 'CHE-1104', courseName: 'Chemistry', credit: 3, grade: 'Select', gradePoint: 0.0 },
        { id: 5, courseCode: 'MATH-1105', courseName: 'Differential and Integral Calculus', credit: 3, grade: 'Select', gradePoint: 0.0 },
        { id: 6, courseCode: 'CSE-1111', courseName: 'Fundamentals of Computers and Computing Lab', credit: 1.5, grade: 'Select', gradePoint: 0.0 },
        { id: 7, courseCode: 'EEE-1113', courseName: 'Electrical Circuits Lab', credit: 1.5, grade: 'Select', gradePoint: 0.0 },
        { id: 8, courseCode: 'CHE-1114', courseName: 'Chemistry Lab', credit: 1.5, grade: 'Select', gradePoint: 0.0 },
        // Add more data here...
      ],
      SCGPA:0.00,
      totalCredit:18.50,
    };
  }
  
 
  handleGradeChange = (event, id) => {
    
    const { data ,totalCredit} = this.state;
    let cnt=0;
    const newData = data.map((item) => {
      let gradepoint=item.gradePoint;
      if (item.id === id) {
        gradepoint=gradeToPoint(event.target.value) ;
        cnt=cnt+item.credit*gradepoint;
        return  { ...item, grade: event.target.value,gradePoint :gradepoint };
      }
      cnt=cnt+item.credit*gradepoint;
      return item;
    });
    this.setState({ data: newData,SCGPA: cnt/totalCredit });
  };

  render() {
    const totalRowNumber = this.state.data.length;
    return (
      <table className="custom-table">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Credit</th>
            <th>Grade</th>
            <th>Grade Point</th>
            <th> SCPA </th>
          </tr>
        </thead>
        <tbody >
          {this.state.data.map((item,index) => (
            <tr key={item.id}>
              <td>{item.courseCode}</td>
              <td>{item.courseName}</td>
              <td>{item.credit}</td>
              <td>
                <select
                  value={item.grade}
                  onChange={(e) => this.handleGradeChange(e, item.id)}
                >
                  <option value="Select">Select</option>
                  <option value="A+">A+</option>
                  <option value="A">A</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B">B</option>
                  <option value="B-">B-</option>
                  <option value="C+">C+</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="F">F</option>
                </select>
              </td>
              <td>{item.gradePoint}</td>
              { index==0 && <td rowSpan={totalRowNumber}> {this.state.SCGPA.toFixed(2)}</td>}
            </tr>
            
          ))}
        </tbody>
      </table>
    );
  }
}

export default TableWithDynamicHeadersAndDropdown;
