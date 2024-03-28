import { Link } from "react-router-dom";

const Error = () => {

    return (
        <div className="flex flex-col justify-center items-center mt-[250px]" id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <Link to="/" className="bg-slate-200 p-5 rounded-full">Go back to Home</Link>            
        </div>
    );
};

export default Error;