import PropTypes from 'prop-types';
import './table.css';
import { useEffect, useState } from 'react';
import { getGradeFromPoint } from './assets/utility/gradetoPoint';
const SideResult = ({info}) => {
    const [infoSideResult,setinfoSide]=useState(info);
    const [cgpa,setCGPA]=useState(0);
    useEffect(()=>{
        console.log("Yes");
        console.log(info);
        setinfoSide(info);
        let point=0,credit=0;
        info.map(item=>{
            if(item.scgpa)
            {
                point=point+item.scgpa*parseFloat( item.credit);
                credit=credit+parseFloat( item.credit);
            }
        });
        const res=(point/credit).toFixed(2);
        console.log(point,credit,res);
        setCGPA(res);
    },[info]);
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
                    {infoSideResult.map((item) => (
                        <tr key={item.id}>
                            <td>
                            {item.semesterNumber}</td>
                            <td>{item.credit}</td>
                            <td>{item.scgpa}</td>
                            <td>{ item.scgpa!='' ?getGradeFromPoint(item.scgpa) : ""} </td>
                            {item.id===1 && <td rowSpan={8}>{cgpa}</td>}
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