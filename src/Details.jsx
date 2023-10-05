import { useEffect, useState } from "react";
import SingleSemester from "./SingleSemester";
import { getDetailsresult, getSemesterCount, setSemsterCount } from "./assets/utility/semesterResult";

const Details = () => {
    const [allinfo,setInfo] =useState([]);
    const [cntSemester,setCnt]=useState(1);
    const [dataloaded,setDataLoaded]=useState(false);
    const [detailsResult,setResult]=useState({});
    useEffect(()=>{
        const fetchData = async () => {
            fetch('/allSemester.json')
                .then(res => res.json())
                .then(data => setInfo(data))
            const data = await getDetailsresult();
            const cnt =await getSemesterCount();
            setResult(data);
            setCnt(cnt);
            setDataLoaded(true);
        };
        fetchData();
        console.log(allinfo,detailsResult,cntSemester )
        console.log("%c I'm Here","background-color:red;");
    }
    ,[]);
    // useEffect(()=>{
    //     const fetchData = async () => {
    //         const data = await getfromLocalStorage();
    //         setCnt(data);
    //         setDataLoaded(true);
    //       };
    //     fetchData();
    // },[]);
    function addNewSemester(){
        setCnt(cntSemester+1);
        setSemsterCount(cntSemester);
    }
    return (
        <>
        <div className=" ">
            {dataloaded  && <div className=" w-2/4 mx-auto ">{ allinfo.slice(0,cntSemester).map((info,index) => <SingleSemester  key={index} SemesterInfo={info} resultinfo={detailsResult[1+index]}></SingleSemester>)}</div>}
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