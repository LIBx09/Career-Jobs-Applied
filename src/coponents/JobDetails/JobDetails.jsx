import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobAppliedData } from "../../utility/localStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const handleApplyJob = () => {
        saveJobAppliedData(idInt);
        toast('YOu added successfully')
    }

    return (
        <div>
            <div className="grid gap-4 md:grid-cols-3">
                <div className=" border        md:col-span-2">
                <h1 className="text-4xl">Details coming here</h1>
                <h1>Job Details of: {job.job_title}</h1>
                <p>{job.company_name}</p>
                </div>
                <div className="border">
                    <h1>Side things</h1>
                    <button onClick={handleApplyJob} className=" btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;