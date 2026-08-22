import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

const data = [
  { button: "Brands", link: "/brands" },
  { button: "Brands Add", link: "/create-brand" },
  { button: "Models", link: "/model" },
  { button: "Brands Add", link: "/create-model" },
];

const Home = () => {
  const [brands, setBrands] = useState([]);
  const [models, setmodels] = useState([]);
  useEffect(() => {
    async function data() {
      const bdata = await axios.get(
        "https://6a79ba5f674f43f4db11a88d.mockapi.io/category",
      );
      const brandsId = bdata.data.map((d) => d.id);
      setBrands(brandsId);

      let modelId = [];
      for (let i of brandsId) {
        const mdata = await axios.get(
          `https://6a79ba5f674f43f4db11a88d.mockapi.io/category/${i}/product`,
        );

        modelId = [...modelId, ...mdata.data];
      }
      setmodels(modelId);
    }
    data();
  }, []);

  return (
    <>
      <div className="w-full h-fit flex justify-center ">
        <div className="w-[60%] h-fit overflow-hidden">
          <img src={logo} alt="logo" className="w-full  object-contain " />

          <div className="  mt-5 flex justify-evenly ">
            {data.map((a) => (
              <Link className="px-4 py-2 bg-[#0F3460] text-sm text-white font-medium  mr-2 rounded-full hover:bg-gray-400 " to={a.link}>
                
                  {a.button}
                
              </Link>
            ))}
          </div>
          <div className=" flex  justify-around mt-8 ">
        <h3 className="text-[#E94560]  font-bold "> Total Brands {"  :"} <span className="text-white ml-1"> {brands.length}</span></h3>
        <h3 className="text-[#E94560]  font-bold ">  Total Cars{"  :"}  <span className="text-white ml-1  ">{models.length}</span></h3>
      </div>
        </div>
        
      </div>
      
      
    </>
  );
};

export default Home;
