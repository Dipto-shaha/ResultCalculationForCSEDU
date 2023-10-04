import  { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './table.css';

import { getGradeFromPoint, getfromLocalStorage, savetoLocalStorage } from './assets/utility/gradetoPoint';
class GradeTable extends Component {
  constructor(props) {
    super(props);
    this.state =getfromLocalStorage();
  }

  handleInputChange = (event, id, columnName) => {
    const scpa=parseFloat(event.target.value)
    console.log(scpa);
    let  totalCredit=this.state.totalCredit;
    if(event.target.value==='')
    {
        const { data } = this.state;
        const newData = data.map((item) => {
        if (item.id === id) {
            return { ...item, [columnName]: event.target.value , grade:''};
        }
        return item;
        });
        this.setState({ data: newData });
    }
    else if( scpa <=4.00 &&  scpa>=0.00 ){
        const { data } = this.state;
        let total=0.0;
        const newData = data.map((item) => {
            if (item.id === id) {
                const temp=getGradeFromPoint(scpa);
                //console.log(total)
                total=scpa*parseFloat(item.credit)+total;
                //console.log(id,total,scpa,parseFloat(item.credit))
                return { ...item, [columnName]: event.target.value , grade:temp};
            }
            //console.log(total)
            if(parseFloat(item.scgpa))
                total=total+parseFloat(item.scgpa)*parseFloat(item.credit);
            else totalCredit-=parseFloat(item.credit);
            // console.log(item.id,total,parseFloat(item.scgpa),parseFloat(item.credit))
            // console.log(total)
        return item;
        });
        console.log(total,totalCredit )
        total= (total/totalCredit) ;
        this.setState({ data: newData,CGPA:total});
        console.log(newData);
        savetoLocalStorage(this.state);
    }
    else {
        event.target.value='';
        toast("Please insert Correct Fomrate in bettween(0.00 to 4.00)");
    }
  };

  render() {
    return (
      <>
        <div>
            <p className='text-5xl font-bold mb-4'>CGPA</p>
        <table className="custom-table mb-20">
        <thead>
          <tr>
            <th>Semester Number</th>
            <th>Credit</th>
            <th>SCGPA</th>
            <th>Grade</th>
            <th>CGPA</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((item) => (
            <tr key={item.id}>
              <td>
                {item.semesterNumber}
              </td>
              <td>{item.credit}</td>
              <td>
                <input
                  type="text"
                  value={item.scgpa}
                  onChange={(e) => this.handleInputChange(e, item.id, 'scgpa')}
                />
              </td>
              <td>
                {item.grade}
              </td>
             {item.id===1 && <td rowSpan={8}>{this.state.CGPA.toFixed(2)}</td>}
            </tr>
          ))}
        </tbody>
        <ToastContainer />
      </table>
        </div>
      </>
    );
  }
}

export default GradeTable;

