import profile from '../../assets/images/user.png'

const Banner = () => {
    return (
        <div>
            <h1 className="text-5xl text-center">This is Banner section</h1>
            <p className="text-center">____________________________________________________________</p>
            <img src={profile} alt="" />
            <p className="text-center">____________________________________________________________</p>
            <p className="text-center">____________________________________________________________</p>
        </div>
    );
};

export default Banner;