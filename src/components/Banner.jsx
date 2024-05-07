import banner1 from "../assets/images/banner/1.jpg";
import banner2 from "../assets/images/banner/2.jpg";
import banner3 from "../assets/images/banner/3.jpg";
import banner4 from "../assets/images/banner/4.jpg";
import banner5 from "../assets/images/banner/5.jpg";
import banner6 from "../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[80vh]">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full rounded-xl overflow-hidden">
        <img src={banner1} className="w-full object-top object-cover" />
        <div className="text-white absolute flex flex-col justify-center space-y-7 top-0 bottom-0 left-0 right-0 p-8 lg:p-14 bg-gradient-to-r from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0.1)]">
          <h1 className="text-3xl  md:text-5xl font-bold w-10/12 md:w-1/2 lg:w-1/3">
            Affordable Price For Car Servicing
          </h1>
          <p className="w-10/12 md:w-1/2 lg:w-1/3">
            There are many variations of passages of available, but the majority have suffered
            alteration in some form
          </p>
          <div className="flex gap-3 ">
            <button className="btn bg-orange-600 border-none text-white">Discover More</button>
            <button className="btn btn-outline border-orange-600 text-white">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex gap-2 transform -translate-y-1/2 right-5 bottom-0">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full rounded-xl overflow-hidden">
        <img src={banner2} className="w-full object-top object-cover" />
        <div className="text-white absolute flex flex-col justify-center space-y-7 top-0 bottom-0 left-0 right-0 p-8 lg:p-14 bg-gradient-to-r from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0.1)]">
          <h1 className="text-3xl  md:text-5xl font-bold w-10/12 md:w-1/2 lg:w-1/3">
            Affordable Price For Car Servicing
          </h1>
          <p className="w-10/12 md:w-1/2 lg:w-1/3">
            There are many variations of passages of available, but the majority have suffered
            alteration in some form
          </p>
          <div className="flex gap-3 ">
            <button className="btn bg-orange-600 border-none text-white">Discover More</button>
            <button className="btn btn-outline border-orange-600 text-white">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex gap-2 transform -translate-y-1/2 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full rounded-xl overflow-hidden">
        <img src={banner3} className="w-full object-top object-cover" />
        <div className="text-white absolute flex flex-col justify-center space-y-7 top-0 bottom-0 left-0 right-0 p-8 lg:p-14 bg-gradient-to-r from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0.1)]">
          <h1 className="text-3xl  md:text-5xl font-bold w-10/12 md:w-1/2 lg:w-1/3">
            Affordable Price For Car Servicing
          </h1>
          <p className="w-10/12 md:w-1/2 lg:w-1/3">
            There are many variations of passages of available, but the majority have suffered
            alteration in some form
          </p>
          <div className="flex gap-3 ">
            <button className="btn bg-orange-600 border-none text-white">Discover More</button>
            <button className="btn btn-outline border-orange-600 text-white">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex gap-2 transform -translate-y-1/2 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full rounded-xl overflow-hidden">
        <img src={banner4} className="w-full object-top object-cover" />
        <div className="text-white absolute flex flex-col justify-center space-y-7 top-0 bottom-0 left-0 right-0 p-8 lg:p-14 bg-gradient-to-r from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0.1)]">
          <h1 className="text-3xl  md:text-5xl font-bold w-10/12 md:w-1/2 lg:w-1/3">
            Affordable Price For Car Servicing
          </h1>
          <p className="w-10/12 md:w-1/2 lg:w-1/3">
            There are many variations of passages of available, but the majority have suffered
            alteration in some form
          </p>
          <div className="flex gap-3 ">
            <button className="btn bg-orange-600 border-none text-white">Discover More</button>
            <button className="btn btn-outline border-orange-600 text-white">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex gap-2 transform -translate-y-1/2 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 5 */}
      <div id="slide5" className="carousel-item relative w-full rounded-xl overflow-hidden">
        <img src={banner5} className="w-full object-top object-cover" />
        <div className="text-white absolute flex flex-col justify-center space-y-7 top-0 bottom-0 left-0 right-0 p-8 lg:p-14 bg-gradient-to-r from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0.1)]">
          <h1 className="text-3xl  md:text-5xl font-bold w-10/12 md:w-1/2 lg:w-1/3">
            Affordable Price For Car Servicing
          </h1>
          <p className="w-10/12 md:w-1/2 lg:w-1/3">
            There are many variations of passages of available, but the majority have suffered
            alteration in some form
          </p>
          <div className="flex gap-3 ">
            <button className="btn bg-orange-600 border-none text-white">Discover More</button>
            <button className="btn btn-outline border-orange-600 text-white">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex gap-2 transform -translate-y-1/2 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 6 */}
      <div id="slide6" className="carousel-item relative w-full rounded-xl overflow-hidden">
        <img src={banner6} className="w-full object-top object-cover" />
        <div className="text-white absolute flex flex-col justify-center space-y-7 top-0 bottom-0 left-0 right-0 p-8 lg:p-14 bg-gradient-to-r from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0.1)]">
          <h1 className="text-3xl  md:text-5xl font-bold w-10/12 md:w-1/2 lg:w-1/3">
            Affordable Price For Car Servicing
          </h1>
          <p className="w-10/12 md:w-1/2 lg:w-1/3">
            There are many variations of passages of available, but the majority have suffered
            alteration in some form
          </p>
          <div className="flex gap-3 ">
            <button className="btn bg-orange-600 border-none text-white">Discover More</button>
            <button className="btn btn-outline border-orange-600 text-white">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex gap-2 transform -translate-y-1/2 right-5 bottom-0">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
