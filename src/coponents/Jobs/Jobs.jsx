import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Jobs = ({job}) => {

    // eslint-disable-next-line react/prop-types
    const {id, logo, job_title, remote_or_onsite, location, job_type, salary, company_name} = job;

    return (
        <div>
            
            <div className="card card-compact bg-base-100 shadow-xl">
                <div className="ml-5 mt-5">
                    <h1 className="text-4xl text-center font-bold">{logo}</h1>
                </div>
                <div className="pl-5 pt-5">
                    <h2 className="text-2xl font-semibold">{job_title}</h2>
                    <h2 className="text-xl font-black">{company_name}</h2>
                    <div className="mt-2">
                        <button className="px-5 py-2 rounded-xl font-extrabold border border-[#7E90FE] mr-3">{remote_or_onsite}</button>
                        <button className="px-5 py-2 rounded-xl font-extrabold border border-[#7E90FE]">{job_type}</button>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex gap-2 items-center">
                            <FaLocationDot></FaLocationDot>
                            <p>{location}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <AiOutlineDollar></AiOutlineDollar>
                            <p>Salary: {salary}</p>
                        </div>
                    </div>
                    <Link to={`/job/${id}`}>
                        <div className="card-actions mb-5 mt-3">
                            <button className="btn btn-primary">View details</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Jobs;