import "./home.css"
import vid1 from "../assets/vid1.mp4"
import vid2 from "../assets/vid2.mp4"
export const Homepage = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
      Transform Your Data Into Stunning Charts
      <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">{" "} with ChartMind! </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Bring your data to life with our powerful chart generation tool. Upload your CSV files and watch as we transform your raw data into stunning, interactive charts. Simplify insights and make data visualization effortless!
      </p>
      <div className="flex justify-center my-10">
        <a href="" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
          Start for free
        </a>
        <a href="" className="py-3 px-4 mx-3 rounded-md border">
          Buy me a Coffee
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
        <source src={vid1} type="video/mp4" />
        Your browser does not support this video!
        </video>

        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
        <source src={vid2} type="video/mp4" />
        Your browser does not support this video!
        </video>
      </div>
    </div>
  );
};
