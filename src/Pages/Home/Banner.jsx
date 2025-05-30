import React from 'react';
import { motion } from "motion/react";
import banner1Img from "../../assets/team/banner1.jpg";
import banner2Img from "../../assets/team/banner2.jpg";
import { IoIosArrowDown } from "react-icons/io";

const Banner = () => {

    const handleSubmit =(e)=>{
        e.preventDefault();
        const form = e.target;
       
        const select = form.location.value;
        console.log(select)
    }
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1'>
                        <motion.img
                            src={banner1Img}
                            animate={{y:[50,100,50]}}
                            transition={{duration:3, repeat:Infinity}}
                            className="max-w-[200px] rounded-t-[50px] rounded-r-[50px] shadow-2xl border-b-8 border-s-8 border-blue-800"
                        />
                        <motion.img
                            src={banner2Img}
                            animate={{x:[100,150,100]}}
                            transition={{duration:10, repeat:Infinity}}
                            className="max-w-[200px] rounded-t-[50px] rounded-r-[50px] shadow-2xl border-b-8 border-s-8 border-blue-800"
                        />
                        
                    </div>
                    <div className='flex-1'>
                        <motion.h1 
                        initial={{scaleX:1}}
                        animate ={{
                            // rotate:360,
                            scaleX:[1,3,1]}}
                        transition={{ duration: 3 }}
                        className="text-5xl font-bold">Latest Jobs For You!</motion.h1>
                        <h2 className='text-3xl'>Local 
                            <motion.span className='font-bold text-5xl'
                                
                                animate={
                                    {
                                            color:['#b61414 ','#67b614','#2114b6'],
                                            transition:{duration:3, repeat: Infinity}
                                    }
                                    }>
                                  Jobs  
                            </motion.span> 
                               For YOu.</h2>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <form onSubmit={handleSubmit} className='flex gap-2 p-4 bg-white'>
                                <button type='text' className='btn w-[150px] border-0 border-r-2 outline-none focus:outline-none        cursor-pointer bg-white shadow-none'>
                                        <select name='content' defaultValue={location} tabIndex={0} className="select border-0  menu bg-base-100 rounded-box z-1 w-30 p-2 focus:outline-none">
                                            <option value="Item 1" disabled={true} >Content</option>
                                            <option value="Item 2">Item 2</option>
                                            <option value="Item 3">Item 3</option>
                                            <option value="Item 4">Item 4</option>
                                            <option value="Item 5">Item 5</option>
                                        </select>
                                </button>
                                <button type='text' className='btn w-[150px] border-0 border-r-2 outline-none focus:outline-none        cursor-pointer bg-white shadow-none'>
                                   
                                        <select name='location' defaultValue="select availability" tabIndex={0} className="select menu bg-base-100 rounded-box z-1 w-30 p-2 focus:outline-none">
                                            <option value="Item 1" disabled={true} >Location</option>
                                            <option value="Item 2">Item 2</option>
                                            <option value="Item 3">Item 3</option>
                                            <option value="Item 4">Item 4</option>
                                            <option value="Item 5">Item 5</option>
                                        </select>
                                    
                                </button>

                                <input type='text' className='btn w-[150px] border-0 border-r-2 outline-none focus:outline-none cursor-pointer bg-white shadow-none'></input>
                                <button type="submit" className='btn btn-primary'>Search</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;