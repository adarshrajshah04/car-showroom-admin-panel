import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleNewCar = () => {
  const { id } = useParams();

  const [car, setCar] = useState({});
  const [errormsg, seterrormsg] = useState("");
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    axios
      .get(`https://6a74210e15e0453fe1b4664a.mockapi.io/Car/${id}`)
      .then((res) => {
        setCar(res.data);
        setIsLoading(false)
      })
      .catch((err) => seterrormsg(err))
      .finally(()=>{
        setIsLoading(false)
      })
  }, [id]);

  return(
    <div className='h-full w-full flex flex-col items-center'>
        {/* loading */}
        {isLoading && <p className="text-white mt-5 text-start font-black text-3xl">Loading......</p>}
        {/* error */}
        {errormsg && <p className="text-red-600 mt-20ext-start font-black text-3xl">{errormsg}</p>}
       <div className='w-[40%]  h-[60vh] rounded-3xl overflow-hidden'>
        <img src={car.image} alt={car.name} 
        className='w-full h-full object-cover object-bottom' />

       </div>
       <div className=' w-[60%] flex    justify-between '>
       <div>
         <h3 className='text-3xl font-bold mt-5 text-white '>{car.name}</h3>
        <p className='mt-2 text-white font-medium '>{car.description}</p>
       </div>
       <div>
        <h3 className=" text-white font-bold ">₹ {car.price}</h3>
       </div>
       </div>
    </div>
  ) ;
};

export default SingleNewCar;
