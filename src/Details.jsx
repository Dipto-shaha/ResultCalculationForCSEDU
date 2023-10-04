import { useEffect, useState } from "react";
import SingleSemester from "./SingleSemester";

const Details = () => {
    const [allinfo,setInfo] =useState([]);
    const [cntSemester,setCnt]=useState(1);
    const [dataloaded,setDataLoaded]=useState(false);

    useEffect(()=>{
        fetch('/allSemester.json')
            .then(res => res.json())
            .then(data => setInfo(data))
        setDataLoaded(true);
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
    return (
        <>
        <div className=" ">
            {dataloaded  && <div className=" w-2/4 mx-auto ">{ allinfo.map((info,index) => <SingleSemester  key={index} SemesterInfo={info}></SingleSemester>)}</div>}
        </div>
        <div className=" text-center mb-10">
        {
            cntSemester<8 &&  <button className=" rounded-lg px-5 py-3 bg-[#13274d] text-[#FFF]"> Add Next Semester</button>
        }
        </div>
        
        </>
    );
};

export default Details;