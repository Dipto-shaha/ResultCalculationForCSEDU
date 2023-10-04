import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './table.css';
import {  getfromLocalStorage, getGradeFromPoint, savetoLocalStorage } from './assets/utility/gradetoPoint';
import { useEffect, useState } from 'react';

const Short = () => {
    const [shortresult,setResult]=useState({});
    const [dataloaded,setDataLoaded]=useState(false);
    const [{expected,requiredCGPA},setExpectedResult] =useState({});
    useEffect( ()=>{
        const fetchData = async () => {
            const data = await getfromLocalStorage();
            setResult(data);
            setDataLoaded(true);
          };
        fetchData();
    },
    []);

    const handleInputChange = (event, id, columnName) => {
        setDataLoaded(false);
        const scgpa=parseFloat(event.target.value)
        const { data ,totalCredit} = shortresult;
        if(event.target.value==='')
        {
            let totalcgpa=0,usedcredit=0;
            const newData = data.map((item) => {
            if (item.id === id) {
                return { ...item, [columnName]: '' , grade:''};
            }
            else 
            {
                if(parseFloat(item.scgpa) >=0.00 && parseFloat(item.scgpa) <=4.00 )
                {
                    totalcgpa = totalcgpa+ parseFloat(item.credit)*  parseFloat(item.scgpa);
                    usedcredit= usedcredit+ parseFloat(item.credit);
                }
                return item;
            }
            });
            let res= (totalcgpa/usedcredit);
            res= res.toFixed(2);
            const completedata={ data: newData , CGPA : res,totalCredit:totalCredit, activatedCredit:usedcredit};
            setResult(completedata);
            savetoLocalStorage(completedata);
            console.log(shortresult);
            setDataLoaded(true);
        }
        else if( scgpa <=4.00 &&  scgpa>=0.00 ){
            let totalcgpa=0,usedcredit=0;
            const newgrade =getGradeFromPoint(scgpa);
            const newcgpa= event.target.value;
            console.log(newcgpa);
            const newData = data.map((item) => {
            if (item.id === id) {

                totalcgpa = totalcgpa+ parseFloat(item.credit)* scgpa;
                usedcredit= usedcredit+ parseFloat(item.credit);
                return { ...item, [columnName]: newcgpa , grade: newgrade};
            }
            else 
            {
                if(parseFloat(item.scgpa) >=0.00 && parseFloat(item.scgpa) <=4.00)
                {
                    totalcgpa = totalcgpa+ parseFloat(item.credit)*  parseFloat(item.scgpa);
                    usedcredit= usedcredit+ parseFloat(item.credit);
                }
                return item;
            }});
            let res= (totalcgpa/usedcredit);
            res= res.toFixed(2)
            console.log(totalcgpa,usedcredit);
            const completedata={ data: newData , CGPA : res,totalCredit:totalCredit, activatedCredit:usedcredit};
            setResult(completedata);
            savetoLocalStorage(completedata);
            console.log(shortresult);
            setDataLoaded(true);

        }
        else {
            event.target.value='';
            toast("Please insert Correct Fomrate in bettween(0.00 to 4.00)");
            setDataLoaded(true);
        }
      };
    const handleExpectedCGPA =(e)=>{
        if(dataloaded){
            const cgpa=parseFloat(e.target.value);
            const {CGPA ,activatedCredit:usedCredit}=  shortresult;
            console.log(cgpa,CGPA ,usedCredit);
            const required= (cgpa*148-parseFloat(CGPA)*usedCredit)/(148-usedCredit);
            if(required<=4.00)
            {
                const temp={expected:e.target.value,requiredCGPA:required.toFixed(2)};
                setExpectedResult(temp);
            }
            else  toast("You Can't reach this CGPA");
        }
    }
    return (
        <>
          
          <div className='mt-10'>
            <ToastContainer position="bottom-center" />
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
                    dataloaded &&  <tbody>
                    {shortresult?.data.map((item) => (
                        <tr key={item.id}>
                            <td>
                            {item.semesterNumber}
                            </td>
                            <td>{item.credit}</td>
                            <td>
                            <input
                                type="text"
                                value={item.scgpa}
                                onChange={(e) => handleInputChange(e, item.id, 'scgpa')}
                            />
                            </td>
                            <td>
                            {item.grade}
                            </td>
                            {item.id===1 && <td rowSpan={8}>{shortresult.CGPA}</td>}
                            {/*  */}
                        </tr>
                    ))}
                    
                    </tbody>
                }
                
                </table>
          </div>
          {
            shortresult.activatedCredit!=148 && <div>
            <table className="custom-table w-72 mb-20 mx-auto table-auto">
                <tr>
                    <td>Expected</td>
                    <td className='w-40'>
                        <input
                            type="text"
                            value={expected}
                            onChange={(e) => handleExpectedCGPA(e)}
                        />
                    </td>
                </tr>
                <tr >
                    <td>Required</td>
                    <td className='w-40'> {requiredCGPA}</td>
                </tr>
            </table>
            </div>
          }
        </>
      );
};

export default Short;