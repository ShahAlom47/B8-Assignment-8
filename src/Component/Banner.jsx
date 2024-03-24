import { useState } from "react";
import PropTypes from 'prop-types';

const Banner = ({formHandel}) => {
    const [searchData,setSearchData]=useState('');

    

    const formInputHandl =(e)=>{
        const searchValue= e.target.value
        setSearchData(searchValue.toLowerCase());
    }
   

    return (
        <div className='flex flex-col gap-7 justify-center items-center  flex-1 '>
            
            <h1 className='font-bold text-2xl mx-7 lg:text-4xl text-center'>I Grow By Helping People In Need</h1>
         
                <form onSubmit={(e)=>formHandel(e,searchData)}  className=' flex '>

                <input  onChange={formInputHandl} type="text" placeholder="Search Here" className=" rounded-l-full input border-2 w-full max-w-xs"  />
               
                <input className='btn btn-error rounded-r-full' type="submit" value="Search" />
                </form>
            
          
            
        </div>
    );
};

export default Banner;


Banner.propTypes = {
    data: PropTypes.object.isRequired
  };