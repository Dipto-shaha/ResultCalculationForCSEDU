function setDetailsresult(data,id){
    localStorage.removeItem(`detailsResult${id}`);
    localStorage.setItem(`detailsResult${id}`,JSON.stringify(data))
}
function getDetailsresult(id){
    if(localStorage.getItem(`detailsResult${id}`)) return JSON.parse(localStorage.getItem(`detailsResult${id}`));
    else
    {
        return {
           result: ["","","","","","","","","",""],
           scgpa: 0.00
        };
    }

}
function detailsAll(){
    if(localStorage.getItem(`detailsall`)) return JSON.parse(localStorage.getItem(`detailsall`));
    return [
        { id: 1, semesterNumber: '1-1', credit: '18.50', scgpa: '' },
        { id: 2, semesterNumber: '1-2', credit: '19.50', scgpa: '' },
        { id: 3, semesterNumber: '2-1', credit: '17.75', scgpa: ''},
        { id: 4, semesterNumber: '2-2', credit: '19.25', scgpa: '' },
        { id: 5, semesterNumber: '3-1', credit: '19.50', scgpa: '' },
        { id: 6, semesterNumber: '3-2', credit: '19.50', scgpa: '' },
        { id: 7, semesterNumber: '4-1', credit: '18.50', scgpa: '' },
        { id: 8, semesterNumber: '4-2', credit: '15.50', scgpa: '' }
    ];
}
function savedetalsAll(data){
    localStorage.removeItem("detailsall");
    localStorage.setItem("detailsall",JSON.stringify(data))
}
function getSemesterCount(){
    if(localStorage.getItem('semesterCount')) return JSON.parse(localStorage.getItem('semesterCount'));
    return 1;
}
function setSemsterCount(cnt){
    localStorage.removeItem('semesterCount');
    localStorage.setItem('semesterCount',JSON.stringify(cnt))
}
export {setDetailsresult,getDetailsresult,setSemsterCount,getSemesterCount,detailsAll,savedetalsAll};