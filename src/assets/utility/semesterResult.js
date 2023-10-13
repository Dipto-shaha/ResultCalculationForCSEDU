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
function getSemesterCount(){
    if(localStorage.getItem('semesterCount')) return JSON.parse(localStorage.getItem('semesterCount'));
    return 1;
}
function setSemsterCount(cnt){
    localStorage.removeItem('semesterCount');
    localStorage.setItem('semesterCount',JSON.stringify(cnt))
}
export {setDetailsresult,getDetailsresult,setSemsterCount,getSemesterCount};