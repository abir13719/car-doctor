import { useState } from "react";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";

const OurService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <p className="text-orange-600 font-bold text-xl">Service</p>
        <h1 className="text-5xl font-bold ">Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected humour, or randomised
          words which don&apos;t look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 my-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex items-center justify-center my-10">
        <button className="btn btn-outline border-orange-600 text-orange-600 w-fit">
          More Services
        </button>
      </div>
    </div>
  );
};

export default OurService;
