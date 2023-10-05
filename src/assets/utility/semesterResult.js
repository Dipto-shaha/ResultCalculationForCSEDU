function setDetailsresult(data){
    localStorage.removeItem('detailsResult');
    localStorage.setItem('detailsResult',JSON.stringify(data))
}
function getDetailsresult(){
    if(localStorage.getItem('detailsResult')) return JSON.parse(localStorage.getItem('detailsResult'));
    else
    {
        return {
           "1": ["A+","B-","B","C","D","A","D","B+"],
           "2": [],
           "3":[],
           "4":[],
           "5":[],
           "6":[],
           "7":[],
           "8":[]
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