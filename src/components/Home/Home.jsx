import { Link } from "react-router-dom";
import { Tabs } from 'flowbite-react';

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Grow Up Your Bussiness
              <span className="hidden sm:block text-2xl">With Us</span>
            </h2>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
              to="/service"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Explore Template
            </Link>
          </div>
        </div>
        
        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img
            className="w-96"
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt="image1"
          />
        </div>
      </aside>

    <Tabs className="m-5 bg-white">
      <Tabs.Item active title="Hindi" className="">   
        हम आपके बिजनेस के लिए software, website और mobile apps बनाते हैं 
        ताकि आपका व्यापार automate और grow हो सके। हम आपके बिजनेस की 
        आवश्यकताओं को सरल तरीके से समझ के उन्हें पूरा करने के
         लिए सॉफ़्टवेयर डिज़ाइन करते हैं। हमारे द्वारा उपयोग किए जाने वाले best 
         तकनीकी और अनुभव के साथ, हम आपके बिजनेस को grow करने
          और उसे नई ऊँचाइयों तक पहुँचाने में सहायक होते हैं। आइए हमारे साथ आपके
           व्यवसाय को नई ऊर्जा और नया दिशा दें!
      </Tabs.Item>
      <Tabs.Item title="English" className="">
        We create software, websites, and mobile applications for 
        your business so that your business can automate and grow.
         We understand the needs of your business in a simple manner
          and design software to fulfill them. With the best technology
           and experience used by us, we assist your business in growing 
           and reaching new heights. Let's work together to give your 
           business new energy and direction!
      </Tabs.Item>
    </Tabs>


      <div className="grid  place-items-center sm:mt-20">
        <img
          className="sm:w-96 w-48"
          src="https://i.ibb.co/2M7rtLk/Remote1.png"
          alt="image2"
        />
      </div>

      <section className="bg-gray-50 rounded-md py-10 my-5">
        <h1 className="text-center text-xl sm:text-5xl py-7 font-medium">
          Reviews
        </h1>
        <div className="mx-auto max-w-7xl overflow-x-auto">
          <div className="flex justify-start items-center space-x-6">
            <div className="flex-shrink-0 w-64 h-30 bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg font-semibold mb-4">Nadge Sachin</h3>
              <p className="text-gray-600">
                Complete Project within a Deadline !
              </p>
            </div>
            <div className="flex-shrink-0 w-64 bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg font-semibold mb-4">Arya Shanish</h3>
              <p className="text-gray-600">
                Nice UI Design of Web Application !
              </p>
            </div>
            <div className="flex-shrink-0 w-64 bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg font-semibold mb-4">Anoymous</h3>
              <p className="text-gray-600">
                Everything is Good , Experience Developer Guideline
              </p>
            </div>
            <div className="flex-shrink-0 w-64 h-30 bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg font-semibold mb-4">Aditya Yadav</h3>
              <p className="text-gray-600">
                Complete Project within a Deadline !
              </p>
            </div>
            <div className="flex-shrink-0 w-64 bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg font-semibold mb-4">Aman Mishra</h3>
              <p className="text-gray-600">
                Nice UI Design of Web Application !
              </p>
            </div>
          </div>
        </div>
      </section>

 </div>

 );
}
