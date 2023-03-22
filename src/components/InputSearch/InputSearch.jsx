import React from 'react';
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

 const InputSearch = () =>  (
    <div className='relative'>
        <div className="absolute left-1 top-1">
            <HiOutlineMagnifyingGlass size={22} color="#0DC4BC" />
        </div>
        <input className='rounded-[15px] outline-none pl-7 py-1 w-[45%]' type="text" />
    </div>
  );

export default InputSearch;
