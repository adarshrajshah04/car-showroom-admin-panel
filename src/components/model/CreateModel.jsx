import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  title: Yup.string()
    .trim()
    .required("Title is required")
    .min(2, "Title must be at least 2 characters")
    .max(100, "Title must not exceed 100 characters"),
  description: Yup.string()
    .trim()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must not exceed 500 characters"),
  thumbnail: Yup.string()
    .trim()
    .required("Thumbnail URL is required")
    .url("Enter a valid thumbnail URL"),
  material: Yup.string()
    .trim()
    .required("Material is required")
    .min(2, "Material must be at least 2 characters"),
  price: Yup.number()
    .typeError("Price must be a number")
    .required("Price is required")
    .positive("Price must be greater than 0"),
  discountPercentage: Yup.number()
    .typeError("Discount must be a number")
    .required("Discount percentage is required")
    .min(0, "Discount cannot be less than 0%")
    .max(50, "Discount cannot exceed 100%"),
  category: Yup.string().trim().required("Category is required"),
  quantitySold: Yup.number()
    .typeError("Quantity sold must be a number")
    .required("Quantity sold is required")
    .integer("Quantity sold must be an integer")
    .min(0, "Quantity sold cannot be negative"),
  totalRevenue: Yup.number()
    .typeError("Total revenue must be a number")
    .required("Total revenue is required")
    .min(0, "Total revenue cannot be negative"),
  tags: Yup.string().trim().required("Tags are required"),
  rating: Yup.number()
    .typeError("Rating must be a number")
    .required("Rating is required")
    .min(0, "Rating cannot be less than 0")
    .max(5, "Rating cannot be greater than 5"),
});

const CreateModel = () => {
  return (
    <div>
      <h3>Add Models</h3>
      <Formik
        initialValues={{
          title: "",
          description: "",
          thumbnail: "",
          material: "",
          price: "",
          discountPercentage: "",
          category: "",
          quantitySold: "",
          totalRevenue: "",
          tags: "",
          rating: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
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
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between ">
              <div className="w-[48%]">
                <input
                  type="text"
                  name="title"
                  placeholder="Model Name"
                  autoComplete="off"
                  className=" w-full px-6 py-3 border  border-gray-400 text-white hover:border-gray-100 rounded "
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                <p className="text-sm text-red-500 mt-1 ml-2">
                  {" "}
                  {errors.title && touched.title && errors.title}
                </p>
              </div>
              <div className="w-[48%]">
                <input
                  type="url"
                  name="thumbnail"
                  placeholder="Model Image"
                  autoComplete="off"
                  className=" w-full px-6 py-3 border  border-gray-400 text-white hover:border-gray-100 rounded "
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.thumbnail}
                />
                <p className="text-sm text-red-500 mt-1 ml-2">
                  {" "}
                  {errors.thumbnail && touched.thumbnail && errors.thumbnail}
                </p>
              </div>
            </div>
            <div className="mt-3">
              <input
                type="text"
                name="description"
                placeholder="Description"
                autoComplete="off"
                className=" w-full px-6 py-3 border  border-gray-400 text-white hover:border-gray-100 rounded "
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              <p className="text-sm text-red-500 mt-1 ml-2">
                {" "}
                {errors.description &&
                  touched.description &&
                  errors.description}
              </p>
            </div>

            <div className="flex justify-between mt-3">
              <div className="w-[30%]">
                <input
                  type="text"
                  name="material"
                  placeholder="Model material"
                  autoComplete="off"
                  className=" w-full px-6 py-3 border  border-gray-400 text-white hover:border-gray-100 rounded "
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.material}
                />
                <p className="text-sm text-red-500 mt-1 ml-2">
                  {" "}
                  {errors.material &&
                    touched.material &&
                    errors.material}
                </p>
              </div>{" "}
              <div className="w-[30%]">
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  autoComplete="off"
                  className=" w-full px-6 py-3 border  border-gray-400 text-white hover:border-gray-100 rounded "
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.price}
                />
                <p className="text-sm text-red-500 mt-1 ml-2">
                  {" "}
                  {errors.price &&
                    touched.price &&
                    errors.price}
                </p>
              </div>{" "}
              <div className="w-[30%] ">
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  autoComplete="off"
                  className=" w-full px-6 py-3 border  border-gray-400 text-white hover:border-gray-100 rounded "
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
                <p className="text-sm text-red-500 mt-1 ml-2">
                  {" "}
                  {errors.description &&
                    touched.description &&
                    errors.description}
                </p>
              </div>
            </div>
            
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CreateModel;
