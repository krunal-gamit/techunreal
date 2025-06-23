import React from "react";
import "./index.css";

const images = [
    { src: "/images/1.png", ratio: "aspect-[2/3]" },
    { src: "/images/2.png", ratio: "aspect-[3/2]" },
    { src: "/images/3.png", ratio: "aspect-[4/3]" },
    { src: "/images/4.png", ratio: "aspect-[3/2]" },
    { src: "/images/5.png", ratio: "aspect-[4/3]" },
    { src: "/images/6.png", ratio: "aspect-[4/3]" },
    { src: "/images/7.png", ratio: "aspect-[4/3]" },
    { src: "/images/8.png", ratio: "aspect-[3/2]" },
    { src: "/images/9.png", ratio: "aspect-[4/3]" },
];

export default function Grid() {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 py-10 md:px-10">
                {/* WHAT WE DO SECTION */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <h2 className="text-sm font-semibold uppercase mb-4 md:mb-0 md:w-1/4">
                        What We Do
                    </h2>
                    <p className="text-sm leading-relaxed md:w-3/4">
                        We give voice to yet unbuilt architecture. Our architectural design
                        communication services include creating stills, animations and
                        interactive content. Through these, we help our partners relay
                        their vision, and shape the built environment of the future.
                    </p>
                </div>

                {/* IMAGE GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-10">
                    {images.map((img, index) => (
                        <div key={index} className={`${img.ratio} overflow-hidden`}>
                            <img
                                src={img.src}
                                alt={`work-${index}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>

                {/* SEE MORE BUTTON */}
                <div className="text-right mt-6">
                    <button className="text-white text-sm px-4 py-2 border border-white hover:bg-white hover:text-black transition-all duration-300">
                        See more works →
                    </button>
                </div>

                {/* OUR PROPOSAL SECTION */}
                <div className="mt-24 md:flex md:items-start md:gap-10">
                    <h2 className="text-xl font-semibold md:w-1/4 mb-4 md:mb-0">
                        Our Proposal
                    </h2>
                    <div className="md:w-3/4">
                        <p className="text-3xl md:text-4xl font-light leading-tight mb-8">
                            Through our resourceful and innovative team of artists, Brick
                            offers the capacity and competence to deliver exceptional high-end
                            artistic visual solutions to our clients in large scale prestige
                            projects.
                        </p>

                        {/* BUTTONS */}
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-white text-black text-sm px-6 py-2 rounded transition duration-300 hover:bg-gray-300">
                                Contact us →
                            </button>
                            <button className="text-white text-sm border-b border-white hover:text-gray-300 transition duration-300">
                                More about us →
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* MINDFULNESS CITY SECTION */}
            <div className="relative w-full min-h-screen mt-24 overflow-hidden">
                {/* Background Video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/videos/file_4.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                ></video>

                {/* Gradient overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>

                {/* Text + Button */}
                <div className="relative z-20 flex flex-col justify-end items-start min-h-screen p-8 md:p-16">
                    <p className="text-sm mb-2 text-white opacity-80">
                        BIG – Bjarke Ingels Group
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Mindfulness City
                    </h1>
                    <button className="mt-2 text-white border border-white px-5 py-2 text-sm hover:bg-white hover:text-black transition duration-300">
                        Read this case study →
                    </button>
                </div>
            </div>
        </div>
    );
}
