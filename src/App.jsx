import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {}
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover z-0"
      >
        <source src="/bg.mp4" type="video/mp4" />
        <p className="text-white">Video not supported</p>
      </video>


      {}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {}
      <Navbar />

      {}
      <div className="absolute bottom-30 left-30 z-10 text-white text-5xl font-bold">
        Elevating great ideas
      </div>
    </div>
  );
}

export default App;
