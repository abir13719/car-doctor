import person from "../assets/images/about_us/person.jpg";
import parts from "../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div className="hero h-[80vh] my-10 rounded-2xl overflow-hidden">
      <div className="hero-content grid grid-cols-2 gap-14 w-full min-h-full p-0">
        <div className="col-span-2 md:col-span-1 h-full relative">
          <div className="absolute top-0 bottom-14 left-0 right-14">
            <img src={person} className="w-full h-full object-cover object-center rounded-md " />
          </div>
          <div className="absolute top-1/2 bottom-0 left-1/2 right-0 border-white border-8 rounded-xl">
            <img src={parts} className="w-full h-full object-cover object-center rounded-md" />
          </div>
        </div>

        <div className="col-span-2 md:col-span-1 h-full grid">
          <p className="text-orange-600 font-bold text-xl">About Us</p>
          <h1 className="text-5xl font-bold max-w-sm">
            We are qualified & of experience in this field
          </h1>
          <p className="max-w-lg">
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour, or randomised words which
            don&apos;t look even slightly believable.
          </p>
          <p className="max-w-lg">
            the majority have suffered alteration in some form, by injected humour, or randomised
            words which don&apos;t look even slightly believable.{" "}
          </p>
          <button className="w-fit btn bg-orange-600 border-none text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
