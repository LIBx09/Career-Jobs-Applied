const getSavedJobAppliedData = () =>{
    const savedJobAppliedData = localStorage.getItem('job-applications');
    if(savedJobAppliedData){
        return JSON.parse(savedJobAppliedData)
    } 
    return [];
}


const saveJobAppliedData = id =>{
    const savedJobAppliedDatas = getSavedJobAppliedData();
    const exists = savedJobAppliedDatas.find(jobId => jobId === id);
    if(!exists){
        savedJobAppliedDatas.push(id);
        localStorage.setItem('job-applications', JSON.stringify(savedJobAppliedDatas))
    }
}

export { getSavedJobAppliedData, saveJobAppliedData }