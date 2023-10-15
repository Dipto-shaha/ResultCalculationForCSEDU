import { useState,useEffect } from 'react';
import { gradeToPoint } from './assets/utility/gradetoPoint';
import './table.css';
import PropTypes from 'prop-types';
import { getDetailsresult ,savedetalsAll,setDetailsresult} from './assets/utility/semesterResult';

const SingleSemester = ({SemesterInfo,SemesterId,setSideResult,sideResult}) => {
    const [resultInfo,setResult]=useState({});
    const [loaded,setLoad]=useState(false);
    useEffect(()=>{
      const fetchData = async () => {
          const data = await getDetailsresult(SemesterId); 
          setResult(data);
          setLoad(true);
      };
      fetchData();
  },[]);
    const handleGradeChange = (e,id) =>{
      console.log("%cHendle Chnaged  is clicked","background-color:red");
      let totalPoint =0,totalCredit=0;
      const newData = resultInfo.result.slice(0,SemesterInfo.length).map((item,index) => {
        if (index=== id) {
          totalPoint = totalPoint+gradeToPoint(e.target.value)*SemesterInfo[id].credit;
          totalCredit = totalCredit+SemesterInfo[id].credit
          return e.target.value;
        }
        totalPoint = totalPoint+gradeToPoint(item)*SemesterInfo[index].credit;
        totalCredit= totalCredit+SemesterInfo[index].credit;
        return item;
      });
      let res= (totalPoint/totalCredit);
      res= res.toFixed(2);
      const data={result:newData,scgpa:res};
      console.log("Data is",data);
      setResult(data);
      setDetailsresult(data,SemesterId);
      const sidedata = sideResult.map(item=> { 
          if(item.id==SemesterId+1)
          {
              const newSidedata = { ...item ,scgpa:res  };
              return newSidedata;
          }
          return item;
      })
      setSideResult(sidedata);
      console.log(sideResult);
      savedetalsAll(sidedata);
    }
    //console.log(SemesterInfo,resultInfo)
    return (
     <>
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
        {loaded && <tbody >
          {SemesterInfo.map((item,index) => (
            <tr key={item.id}>
              <td>{item.course_code}</td>
              <td>{item.course_name}</td>
              <td>{item.credit}</td>
              <td>
                <select
                   value={resultInfo?.result[index]  }
                  onChange={(e) => handleGradeChange(e, index)}
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
              <td>{gradeToPoint(resultInfo?.result[index])}</td>
              
              { index==0 && <td rowSpan={SemesterInfo.length}> {resultInfo.scgpa}</td>}
            </tr>
            
          ))}
        </tbody>}
      </table>
     </div>
     <div>

     </div>
     </>
    );
};
SingleSemester.propTypes = {
    SemesterInfo: PropTypes.array,
    SemesterId:PropTypes.number,
    setSideResult:PropTypes.func,
    sideResult:PropTypes.array
};
export default SingleSemester;