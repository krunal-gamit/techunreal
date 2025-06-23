import React from "react";
import Footer from "./Footer";

const Workwithus = () => {
  return (
    <div className="bg-black pt-25">
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[90vh]">
        {/* Video stays untouched */}
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover z-0"
        >
          <source src="/videos/file_3.mp4" type="video/mp4" />
          <p className="text-white">Video not supported</p>
        </video>

        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>


        {/* Content Container */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center px-10">

          {/* Only this box has a background for readability */}
          <div className="bg-opacity-60 text-white w-fit p-8 rounded-lg mb-10">
            <h1 className="text-3xl font-bold mb-4">
              Ready to discuss <br /> your next project?
            </h1>
            <p className="text-gray-300 mb-2">
              Send us an email to get the conversation started.
            </p>
            <p className="font-bold hover:underline mb-4">sales@brickvisual.com</p>
            <p className="text-gray-300 mb-4">
              If you need guidance on what information should be provided, simply fill out our request a proposal form below.
            </p>
            <button className="bg-white text-black px-4 py-2 font-bold hover:bg-gray-300 rounded">
              Fill out form →
            </button>
          </div>

          {/* 3 Columns Grid */}
          <div className="grid md:grid-cols-3 gap-4 text-white text-sm  bg-opacity-50 p-6 rounded-lg w-fit">
            <div className="max-w-[200px]">
              <hr className="border-gray-400 w-8 mb-2" />
              <h3 className="mb-2 font-bold">General questions</h3>
              <p className="text-gray-300 mb-1">If you have a question or comment:</p>
              <p className="font-semibold hover:underline">info@brickvisual.com</p>
            </div>
            <div className="max-w-[200px]">
              <hr className="border-gray-400 w-8 mb-2" />
              <h3 className="mb-2 font-bold">Press inquiries</h3>
              <p className="text-gray-300 mb-1">Interview/media contact:</p>
              <p className="font-semibold hover:underline">press@brickvisual.com</p>
            </div>
            <div className="max-w-[200px]">
              <hr className="border-gray-400 w-8 mb-2" />
              <h3 className="mb-2 font-bold">Join the team</h3>
              <p className="text-gray-300 mb-1">We welcome talents globally.</p>
              <p className="font-semibold hover:underline">Go to job form</p>
            </div>
          </div>
        </div>
      </div>

      {/* 👇 Footer now sits immediately below the image */}
      <Footer />
    </div>
    </div>
  );
};

export default Workwithus;