import { useEffect, useState } from "react";
import SingleSemester from "./SingleSemester";
import {  getSemesterCount, detailsAll, setSemsterCount } from "./assets/utility/semesterResult";
import SideResult from "./SideResult";

const Details = () => {
    const [allinfo,setInfo] =useState([]);
    const [cntSemester,setCnt]=useState(getSemesterCount());
    const [dataloaded,setDataLoaded]=useState(false);
    const [sideResult,setSideResult]=useState(detailsAll());
    useEffect(()=>{
        const fetchData = async () => {
            fetch('/allSemester.json')
                .then(res => res.json())
                .then(data => setInfo(data))
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
        <div className="flex relative">
            {dataloaded  && <div className=" w-2/4 ml-80 ">{ allinfo.slice(0,cntSemester).map((info,index) => 
            <SingleSemester  key={index} SemesterId={index} SemesterInfo={info} sideResult={sideResult} setSideResult={setSideResult}>
            </SingleSemester>)}</div>}
            <div className="fixed right-0">
                <SideResult info={sideResult}  ></SideResult>
            </div>
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