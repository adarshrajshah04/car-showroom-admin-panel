import axios from "axios";
import React, { useEffect, useState } from "react";
import NewCarDataTable from "./NewCarDataTable";

const NewCarDataShow = () => {
  const [cardata, setCardata] = useState([]);
  const [errorMsg, seterrorMsg] = useState("");
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    axios
      .get("https://6a74210e15e0453fe1b4664a.mockapi.io/Car")
      .then((res) => {
        setCardata(res.data);
      })
      .catch((err) => {
        seterrorMsg(err);
      });
  }, [update]);

  return (
    <div>
      <div>
      <h3 className="text-white text-3xl italic font-black ">  New collection</h3>
      <p className="text-white">Add, delete, update collection</p>
      </div>
      <div className=" mt-10">
        <NewCarDataTable setUpdate={setUpdate} cardata={cardata} />
      </div>
    </div>
  );
};

export default NewCarDataShow;
