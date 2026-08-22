import React, { useEffect, useState } from "react";
import ModelDataTable from "./ModelDataTable";
import axios from "axios";
// import { useParams } from 'react-router-dom'

const ShowModel = () => {
  //  const { categoryId } = useParams();
  //  console.log(categoryId);

  const [model, setModel] = useState([]);
  const [brand, setbrand] = useState([]);
  const [update, setUpdate] = useState(1);
  useEffect(() => {
    async function fun1() {
      try {
        const catRes = await axios.get(
          "https://6a79ba5f674f43f4db11a88d.mockapi.io/category",
        );
        const categories = catRes.data.map((d) => d.id);
        setbrand(catRes.data)
        // console.log(categories);

        let products = [];
        for (var cat of categories) {
          const response = await axios.get(
            `https://6a79ba5f674f43f4db11a88d.mockapi.io/category/${cat}/product`,
          );
          // console.log(response.data)
          products = [...products, ...response.data];
        }
        console.log(products);
        products.sort((a, b) => a.id - b.id);
        setModel(products);
      } catch (err) {
        console.error(err);
      }
    }

    fun1();

    // axios.get('https://6a79ba5f674f43f4db11a88d.mockapi.io/category/2/product')
    // .then(res=>{
    //   setModel(res.data)
    // })
    // .catch(err=>{

    //   console.log(err);

    // })
  }, [update]);

  return (
    <div>
      <h3 className="text-2xl text-white font-bold ">Models</h3>
      <p className="text-white font-medium">View , Update and Delete Models </p>

      <div>
        <ModelDataTable model={model} setUpdate={setUpdate} brand={brand} />
      </div>
    </div>
  );
};

export default ShowModel;
