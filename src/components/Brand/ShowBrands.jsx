import React, { useEffect, useState } from "react";
import axios from "axios";
import BrandDataTable from "./BrandDataTable";

export const ShowBrands = () => {
  const [brands, setbrands] = useState([]);
  const [error, seterror] = useState('')
  const [loading, setloading] = useState(true)
  const [update, setupdate] = useState(1)

  useEffect(() => {
    axios
      .get("https://6a79ba5f674f43f4db11a88d.mockapi.io/category")
      .then((res) => {
        // console.log(res.data);

        setbrands(res.data);
      })
      .catch(() => {
        seterror('Something wait wrong')
      })
      .finally(()=>{
        setloading(false)
      });
      
  }, [update]);

  return (
    <div className="w-full s-full" >
      <h3 className="text-3xl font-medium text-white">All-Brands</h3>
      <p className="text-white">View,Edit,Update Brands</p>

      <div className="w-full h-[80vh] mt-5">
        {loading ?<><p className="flex items-center justify-center text-white absolute top-[50%] left-[50%] ">Loading.....</p></>:<></>}

        {/* // data sending to BrandDataTable */}
        {brands.length>0 && <BrandDataTable brands={brands} setUpdate={setupdate} />}   
        {brands.length==0 && <p className="text-2xl text-white">No data found</p> }


        <h3 className=" text-3xl text-red-600 text-center font-bold ">{error}</h3>
      </div>
    </div>
  );
};
