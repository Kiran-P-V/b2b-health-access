import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReactPaginate from "react-paginate";
const PatientList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const reportsPerPage = 2;
  const [reports, setReports] = useState([
    {
      orderNo: "A19023",
      date: "01/05/2023",
      patientName: "Sankaranarayanan",
      hospitalId: "DH2023/0001245",
      testName: "Anti Leukemia 1 Serum",
      doctorName: "Dr. Arun K Thambi",
      eta: "03/05/2023",
      status: "Ready",
    },
    {
      orderNo: "A19024",
      date: "01/05/2023",
      patientName: "Baby. Alan",
      hospitalId: "DH2023/0001242",
      testName: "Anti Leukemia 1 Serum",
      doctorName: "Dr. Abdul Siddique",
      eta: "03/05/2023",
      status: "Partial Report",
    },
    {
      orderNo: "A19025",
      date: "01/05/2023",
      patientName: "Baby. Anirudh",
      hospitalId: "DH2023/0001212",
      testName: "Anti Leukemia 1 Serum",
      doctorName: "Dr. Raveendran",
      eta: "03/05/2023",
      status: "Lab dropped",
    },
    {
      orderNo: "A19026",
      date: "01/05/2023",
      patientName: "Sankaranarayanan Warrier",
      hospitalId: "DH2023/0001247",
      testName: "Comprehensive leukemia - Basic Lineage Panel",
      doctorName: "Dr. Vignesh Muraleedharan",
      eta: "03/05/2023",
      status: "Ready",
    },
  ]);

  const formik = useFormik({
    initialValues: {
      fromDate: "",
      toDate: "",
      patientName: "",
      hospitalId: "",
      billNo: "",
      referBy: "",
      status: "",
    },
    validationSchema: Yup.object({
      // Add your validations here if needed
    }),
    onSubmit: (values) => {
      console.log("Form data", values);
      // Add filtering logic here
    },
  });

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * reportsPerPage;
  const currentReports = reports.slice(offset, offset + reportsPerPage);
  const pageCount = Math.ceil(reports.length / reportsPerPage);
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center">
        <div className="bg-white w-[90%] rounded-3xl flex flex-col p-6 mt-6">
          <p className="text-blue-700 font-bold mb-2 self-center">
            Patient Reports
          </p>
          <form onSubmit={formik.handleSubmit} className="w-full mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="fromDate" className="block text-gray-700">
                  From Date
                </label>
                <input
                  id="fromDate"
                  name="fromDate"
                  type="date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fromDate}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="toDate" className="block text-gray-700">
                  To Date
                </label>
                <input
                  id="toDate"
                  name="toDate"
                  type="date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.toDate}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="patientName" className="block text-gray-700">
                  Patient Name
                </label>
                <input
                  id="patientName"
                  name="patientName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.patientName}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="hospitalId" className="block text-gray-700">
                  Hospital ID
                </label>
                <input
                  id="hospitalId"
                  name="hospitalId"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.hospitalId}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="billNo" className="block text-gray-700">
                  Bill No
                </label>
                <input
                  id="billNo"
                  name="billNo"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.billNo}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="referBy" className="block text-gray-700">
                  Refer by
                </label>
                <select
                  id="referBy"
                  name="referBy"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.referBy}
                  className="w-full px-3 py-2 border rounded"
                >
                  <option value="" label="Select doctor" />
                  <option value="Doctor Name" label="Doctor Name" />
                  {/* Add more options as needed */}
                </select>
              </div>
              <div>
                <label htmlFor="status" className="block text-gray-700">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.status}
                  className="w-full px-3 py-2 border rounded"
                >
                  <option value="" label="None" />
                  <option value="Ready" label="Ready" />
                  <option value="Partial Report" label="Partial Report" />
                  <option value="Lab dropped" label="Lab dropped" />
                </select>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                className="bg-orange-500 text-white py-2 px-4 rounded mr-2"
                onClick={() => formik.resetForm()}
              >
                Clear
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Search
              </button>
            </div>
          </form>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Order No</th>
                  <th className="py-2 px-4 border-b">Date</th>
                  <th className="py-2 px-4 border-b">Patient Name</th>
                  <th className="py-2 px-4 border-b">Hospital ID</th>
                  <th className="py-2 px-4 border-b">Test Name</th>
                  <th className="py-2 px-4 border-b">Doctor Name</th>
                  <th className="py-2 px-4 border-b">ETA</th>
                  <th className="py-2 px-4 border-b">Status</th>
                  <th className="py-2 px-4 border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentReports.map((report, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{report.orderNo}</td>
                    <td className="py-2 px-4 border-b">{report.date}</td>
                    <td className="py-2 px-4 border-b">{report.patientName}</td>
                    <td className="py-2 px-4 border-b">{report.hospitalId}</td>
                    <td className="py-2 px-4 border-b">{report.testName}</td>
                    <td className="py-2 px-4 border-b">{report.doctorName}</td>
                    <td className="py-2 px-4 border-b">{report.eta}</td>
                    <td className="py-2 px-4 border-b">
                      <span
                        className={`px-2 py-1 rounded ${
                          report.status === "Ready"
                            ? "bg-green-200"
                            : report.status === "Partial Report"
                            ? "bg-yellow-200"
                            : "bg-red-200"
                        }`}
                      >
                        {report.status}
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b flex space-x-2">
                      <button className="bg-blue-500 text-white px-2 py-1 rounded">
                        {/* Download icon */}
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4"
                          ></path>
                        </svg>
                      </button>
                      <button className="bg-gray-500 text-white px-2 py-1 rounded">
                        {/* Comment icon */}
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8h2a2 2 0 012 2v7a2 2 0 01-2 2h-5l-4 4v-4H7a2 2 0 01-2-2V8a2 2 0 012-2h2m5-4h2a2 2 0 012 2v7a2 2 0 01-2 2h-5l-4 4v-4H7a2 2 0 01-2-2V8a2 2 0 012-2h2m5-4h2a2 2 0 012 2v7a2 2 0 01-2 2h-5l-4 4v-4H7a2 2 0 01-2-2V8a2 2 0 012-2h2m5-4h2a2 2 0 012 2v7a2 2 0 01-2 2h-5l-4 4v-4H7a2 2 0 01-2-2V8a2 2 0 012-2h2"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={
              "flex justify-center items-center space-x-2 mt-4"
            }
            pageClassName={"bg-gray-200 px-2 py-1 rounded"}
            previousClassName={"bg-blue-500 text-white px-2 py-1 rounded"}
            nextClassName={"bg-blue-500 text-white px-2 py-1 rounded"}
            activeClassName={"bg-blue-500 text-white px-2 py-1 rounded"}
          />
        </div>
      </div>
    </>
  );
};

export default PatientList;
