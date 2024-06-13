import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import LoginBg from "../../../assets/images/LoginBg.jpg";
import CompanyLogo from "../../../assets/CompanyLogo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Form data", values);
      navigate("/dash/patient-list");
      // Handle form submission
    },
  });

  return (
    <div
      style={{
        background: `url(${LoginBg}) no-repeat center center/cover`,
      }}
      className="w-full h-screen flex justify-center items-center"
    >
      <div className="bg-white h-[80%] w-[450px] rounded-3xl flex flex-col justify-center items-center p-6">
        <img src={CompanyLogo} alt="Company Logo" className="mb-4" />
        <p className="text-blue-600 font-bold mb-2">Report Download Portal</p>
        <div className="bg-[#00D3EB] p-5 rounded-3xl w-[90%]">
          <p className="w-full text-center">Login</p>
          <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Username
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full px-3 py-2 border rounded"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="w-full px-3 py-2 border rounded"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                type="submit"
                className="w-44 bg-[#1F6CAB] text-white py-2 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
