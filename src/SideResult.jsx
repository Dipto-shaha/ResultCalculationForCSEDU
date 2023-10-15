import PropTypes from 'prop-types';
import './table.css';
const SideResult = ({info}) => {
    return (
        <div>
            <div className='mt-10'>
            <table className=" w-3/5 items-center custom-table mb-20 mx-auto">
                <thead>
                    <tr>
                    <th>Semester Number</th>
                    <th>Credit</th>
                    <th>SCGPA</th>
                    <th>Grade</th>
                    <th>CGPA</th>
                    </tr>
                </thead>
                {
                     <tbody>
                    {info.map((item) => (
                        <tr key={item.id}>
                            <td>
                            {item.semesterNumber}
                            </td>
                            <td>{item.credit}</td>
                            <td>{item.cgpa}</td>
                            <td>{item.grade}
                            </td>
                            {item.id===1 && <td rowSpan={8}>{info.CGPA}</td>}
                            
                        </tr>
                    ))}
                    </tbody>
                }
                
                </table>
          </div>
        </div>
    );
};
SideResult.propTypes = {
    info: PropTypes.array
};
export default SideResult;