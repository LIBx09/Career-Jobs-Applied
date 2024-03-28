import { useEffect } from "react";
import { useState } from "react";
import Jobs from "../Jobs/Jobs";

const Featured = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    }, [])

    return (
        <>
        <div className="mx-auto w-8/12 text-center">
            <h1 className="text-5xl">Featured Jobs: {jobs.length}</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its you Future.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
            {
                jobs.slice(0, dataLength).map(job => <Jobs key={job.id} job={job}></Jobs>)
            }
        </div>
        <div className="flex justify-center">
            {/*{dataLength === jobs.length ? 'hidden' : ''} */}
            <div className={dataLength === jobs.length && 'hidden'}>
                <button onClick={() => setDataLength(jobs.length)}
                        className="btn bg-primary mt-5 flex justify-center">Show all Data
                </button>
            </div>
        </div>
        </>
    );
};

export default Featured;