import { useEffect, useState } from "react";
import SingleSemester from "./SingleSemester";
import {  getSemesterCount, setSemsterCount } from "./assets/utility/semesterResult";

const Details = () => {
    const [allinfo,setInfo] =useState([]);
    const [cntSemester,setCnt]=useState(getSemesterCount());
    const [dataloaded,setDataLoaded]=useState(false);
    useEffect(()=>{
        const fetchData = async () => {
            fetch('/allSemester.json')
                .then(res => res.json())
                .then(data => setInfo(data))
           // const cnt = getSemesterCount();
            //setCnt(cnt);
            setDataLoaded(true);
        };
        fetchData();
        console.log(allinfo,cntSemester )
        console.log("%c I'm Here","background-color:red;");
    },[]);
    useEffect(()=>{
        console.log("Hi")
        setSemsterCount(cntSemester);
    },[cntSemester]);
    const  addNewSemester =async() =>{
        setCnt(cntSemester+1);
    }
    return (
        <>
        <div className=" ">
            {dataloaded  && <div className=" w-2/4 mx-auto ">{ allinfo.slice(0,cntSemester).map((info,index) => <SingleSemester  key={index} SemesterId={index} SemesterInfo={info} ></SingleSemester>)}</div>}
        </div>
        <div className=" text-center mb-10">
        {
            cntSemester<8 &&  <button className=" rounded-lg px-5 py-3 bg-[#13274d] text-[#FFF]" onClick={addNewSemester}> Add Next Semester</button>
        }
        </div>
        
        </>
    );
};

export default Details;