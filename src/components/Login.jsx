import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const validationSchema = Yup.object({
  username: Yup.string()
    .trim()
    .required("Please Enter a username")
    .min(3, "Must be greater than 3 characters ")
    .max(30, "Must be less than 30 characters"),
  password: Yup.string()
    .trim()
    .required("Password is required")
    .min(6, "pass word is must be greater than 6 characters")
    .max(16, "password is must be less than 16 characters"),
});


export default function Login() {
  let home=useNavigate()
  return (
    <>
      <div className=" bg-gray-700 h-screen flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting ,resetForm}) => {
              setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                axios.post('https://dummyjson.com/auth/login',values)
                .then(res=>{
                  sessionStorage.setItem('Token',res.data.accessToken)
                  alert('Login Successful')
                  resetForm()
                  
                  home('/home')
                })
                .catch(()=>{
                    console.log('something is wrong');
                    
                })
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
              <form onSubmit={handleSubmit} className="bg-gray-700  space-y-6">
                <div>
                  <label
                    htmlFor="user"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
                  >
                    User Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="user"
                      name="username"
                      type="text"
                      autoComplete="off"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                    />
                    <p className="text-sm text-red-600 ml-1 mt-1" > {errors.username && touched.username && errors.username}</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <p className="text-sm text-red-600 ml-1 mt-1" > {errors.password && touched.password && errors.password}</p>

                  </div>
                </div>
                <div>
                  <p className=" text-sm text-center text-white mb-1">
                    user name is : emilys
                  </p>
                  <p className=" text-sm text-center text-white">
                    Password is : emilyspass
                  </p>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                    disabled={isSubmitting}
                  >
                    Sign in
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
