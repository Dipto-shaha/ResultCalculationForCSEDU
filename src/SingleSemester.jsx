import './table.css';
import PropTypes from 'prop-types';

const SingleSemester = ({SemesterInfo}) => {
    const handleGradeChange = () =>{
        
    }
    return (
     <div className=' mb-10 w-full'>
         <table className=" w-full custom-table">
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
          {SemesterInfo.map((item,index) => (
            <tr key={item.id}>
              <td>{item.course_code}</td>
              <td>{item.course_name}</td>
              <td>{item.credit}</td>
              <td>
                <select
                  value={item.grade}
                  onChange={(e) => handleGradeChange(e, item.id)}
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
              <td>fhhj</td>
              { index==0 && <td rowSpan={SemesterInfo.length}> ifnfa</td>}
            </tr>
            
          ))}
        </tbody>
      </table>
     </div>
    );
};
SingleSemester.propTypes = {
    SemesterInfo: PropTypes.object
  };
export default SingleSemester;