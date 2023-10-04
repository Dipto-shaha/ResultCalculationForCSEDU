import { NavLink, Outlet } from 'react-router-dom';
import pic from '/CSEDULogo.png';
import dulogo from '/DULogo.png';

const Navber = () => {
    return (
        <>
            <div className='flex justify-center items-center my-5 '>
                <img className=" h-28 w-24 mx-5  rounded-lg" src={dulogo}></img>
                <div>
                <div>
                    <p className=" text-5xl font-bold text-center">University of Dhaka</p>
                    <p className=" text-3xl font-bold text-center">Department of Computer Science and Engineering</p>
                 </div>
                <div className='flex my-5 text-center'>
                    <div className='ml-72 text-xl font-bold'>CGPA</div>
                    <div className='ml-64 p-2'>
                        <NavLink to={'/'}  className={( {isActive} ) =>  isActive ? "text-[#ecb31d] font-bold underline underline-offset-4 ": " "}><button>Short</button></NavLink>
                    </div>
                    <div className='mx-5 p-2'>
                        <NavLink to={'/details'}  className={( {isActive} ) =>  isActive ? "text-[#ecb31d] font-bold underline underline-offset-4 " :" "}><button>Details</button></NavLink>
                    </div>
                </div>
                </div>
                <img className=" h-28 w-32 mx-5 rounded-lg" src={pic}></img>
            </div>
            <Outlet>
            </Outlet>
        </>
    );
};

export default Navber;