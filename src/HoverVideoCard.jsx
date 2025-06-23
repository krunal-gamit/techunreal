import { useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Architecture',
    video: '/videos/architecture.mp4',
    thumbnail: '/images/architecture.png',
  },
  {
    title: 'Real Estate',
    video: '/videos/realestate.mp4',
    thumbnail: '/images/realestate.png',
  },
  {
    title: 'Product & Brand',
    video: '/videos/product.mp4',
    thumbnail: '/images/product.png',
  },
  {
    title: 'Media & Entertainment',
    video: '/videos/media.mp4',
    thumbnail: '/images/media.png',
  },
];

function HoverVideoCard({ video, thumbnail, title }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-xs w-full">
      <div
        className="relative w-full aspect-[4/6] overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image with zoom transition */}
        <img
          src={thumbnail}
          alt={title}
          className={`w-full h-full object-cover transform transition-transform duration-700 ease-out absolute inset-0 z-0 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />

        {/* Blending video overlay */}
        <video
          src={video}
          className={`w-full h-full object-cover absolute inset-0 z-10 transition-opacity duration-700 ease-out ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          muted
          loop
        />

        {/* Hover Text */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <p className="text-white text-sm font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
            See more →
          </p>
        </div>
      </div>

      {/* Title below the card */}
      <p className="mt-3 text-white font-semibold">{title}</p>
    </div>
  );
}


export default function HoverVideoCardGrid() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between mb-12">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">Who we are</h2>
          <p className="max-w-2xl text-xl">
            Brick is an international creative production studio that translates great ideas into high-end visual solutions.<br /><br />
            Driven by a team of highly skilled artists and powered by cutting-edge technology, we deliver innovative and refined visual narratives, with the capacity and competence required for large-scale, prestige projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service) => (
            <HoverVideoCard key={service.title} {...service} />
          ))}
        </div>

        {/* Left aligned button */}
        <div className="mt-10 text-left">
          <Link
            to="/#"
            className="text-white opacity-50 hover:opacity-100 flex items-center gap-2 group"
          >
            See all services
            <span className="transition-transform duration-500 ease-in-out group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>


      </div>
    </section>
  );
}
