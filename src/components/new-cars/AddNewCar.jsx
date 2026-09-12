import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required("Car name is required")
    .min(2, "Car name must be at least 2 characters")
    .max(50, "Car name must not exceed 50 characters"),

  image: Yup.string()
    .trim()
    .required("Image URL is required")
    .url("Please enter a valid image URL"),

  description: Yup.string()
    .trim()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters")
    .max(300, "Description must not exceed 300 characters"),

  price: Yup.number()
    .typeError("Price must be a number")
    .required("Price is required")
    .positive("Price must be greater than 0"),
});
const AddNewCar = () => {
  const [msgerror, setmsgError] = useState("");
  return (
    <div className="w-full h-[80vh] bg-black">
      <h3 className=" inline-block text-4xl font-bold text-white  mb-3 hover:text-[#E94560]">Add Brands</h3>
      <Formik
        initialValues={{ name: "", price:'',image: "",description:"" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            axios
              .post(
                "https://6a74210e15e0453fe1b4664a.mockapi.io/Car",
                values,
              )
              .then(() => {
                resetForm();
              })
              .catch(() => {
                setmsgError("Somethig is Wrong");
              });
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* name and url */}
            <div className="flex justify-between">
              <div className="w-[48%]">
                <label
                  htmlFor="name"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
                >
                  Name of brand
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <p className="text-sm text-red-600 font-bold ml-3 mt-1 ">
                    {" "}
                    {errors.name && touched.name && errors.name}
                  </p>
                </div>
              </div>

              <div className="w-[48%]">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="image"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
                  >
                    Image URL
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="image"
                    name="image"
                    type="url"
                    placeholder="URL"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.image}
                  />
                  <p className="text-sm text-red-600 font-bold">
                    {errors.image && touched.image && errors.image}
                  </p>
                </div>
              </div>
            </div>
            {/* price and description */}
            <div className="flex justify-between">
              <div className="w-[48%]">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="price"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
                  >
                    Price
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="price"
                    name="price"
                    type="text"
                    placeholder="price"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price}
                  />
                  <p className="text-sm text-red-600 font-bold">
                    {errors.price && touched.price && errors.price}
                  </p>
                </div>
              </div>
              <div className="w-[48%]">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="description"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
                  >
                    Description
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="description"
                    name="description"
                    type="text"
                    placeholder="Description"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                  />
                  <p className="text-sm text-red-600 font-bold">
                    {errors.description &&
                      touched.description &&
                      errors.description}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="block   justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-md/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
              >
                Submit
              </button>
            </div>

            {msgerror && <p className="text-center text-sm text-red-600 font-bold ">{msgerror}</p>}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddNewCar;
