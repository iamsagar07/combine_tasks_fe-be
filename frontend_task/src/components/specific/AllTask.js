import React, { useState } from 'react'
import Cards from '../common/Cards'
import { IoMdAddCircle } from "react-icons/io";
import InputData from '../common/InputData';


const AllTask = () => {
  const [inputDiv, setInputDiv] = useState(false);
  return (
    <div>
      <div className='w-full flex justify-end px-4 py-4'>
      <button onClick={() => setInputDiv(true)}>
        <IoMdAddCircle size={35} className='text-gray-400 hover:text-gray-100 transition-all duration-300'/>
      </button>
      
      </div>
      <Cards home={'true'} setInputDiv={setInputDiv}/>
      {
        inputDiv && <InputData inputDiv={inputDiv} setInputDiv={setInputDiv}/>
      }
    </div>

   
  )
}

export default AllTask
