


// Contact.js

import axios from "axios";
import { useState } from "react";
import { firestore } from "../firebase"; // Adjust the path as needed
import { collection, addDoc } from "firebase/firestore";

export default function Contact() {
  const [flag, setFlag] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.post("https://formspree.io/f/mwkdkywy",formData);
      alert("Emial sent Successfully");
      setFormData({ name: "", email: "", tel: "", details: "" });
    }catch(err){
      alert("Faild to send mail");
      setFormData({ name: "", email: "", tel: "", details: "" });
    }

  };

  return (
      <>
      {flag ? <h1 className="w-4/3 p-2 m-4 text-center mt-4 text-2xl bg-green-100 rounded-lg font-semibold">Your Details is Submited , I Contact You Later....</h1> : ""}
      <div className="relative flex items-top justify-center  bg-white sm:items-center sm:pt-0 mb-4">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                  Get in touch:
                </h1>
                <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                  Fill in the form to start a conversation
                </p>

                <div className="flex items-center mt-8 text-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    Allahabad ,UP.
                  </div>
                </div>
              </div>

              <form
                className="p-6 flex flex-col justify-center"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col">
                  <label htmlFor="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="tel" className="hidden">
                    Number
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Telephone Number"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    value={formData.tel}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="flex flex-col mt-2">
                  <label htmlFor="details" className="hidden">
                    Details
                  </label>
                  <input
                    type="text"
                    name="details"
                    id="details"
                    placeholder="Enter Shop details"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    value={formData.details}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
