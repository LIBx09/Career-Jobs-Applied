import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getSavedJobAppliedData } from "../../utility/localStorage";
import { useState } from "react";

const AppliedJobs = () => {
    
    const applied = useLoaderData();
    
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleFilter = filter => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs)
        }
        else if (filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const savedJobIds = getSavedJobAppliedData();
        if(applied.length > 0){

            // const jobsApplied = applied.filter(job => savedJobIds.includes(job.id))

            const jobsApplied = [];
            for(const id of savedJobIds){
                const job = applied.find(job => job.id === id);
                if(job){
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);

            console.log(applied, savedJobIds, jobsApplied)
        }
    }, [applied])

    return (
        <div>
            <h1 className="text-2xl">JobsApplied:{appliedJobs.length}</h1>
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleFilter('all')}><a>All</a></li>
                    <li onClick={() => handleFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <ul>
                {
                    displayJobs.map(job => <li key={job.id}><span className="text-3xl font-medium">{job.job_title}</span><span className="text-2xl font-black">{job.company_name} : {job.remote_or_onsite}</span></li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;