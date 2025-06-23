import React from 'react';

const About = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/videos/aboutus.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />

      {}
      <div className="relative z-10 flex items-center justify-start h-full px-6 md:px-20">
        <div className="max-w-xl text-white">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-6 leading-relaxed">
            We are an international tight-knit community with a passion for
            creativity and technology.
          </p>
          <a
            href="/about"
            className="inline-flex items-center text-white font-semibold hover:underline transition"
          >
            Read More
            <span className="ml-2 text-xl">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
