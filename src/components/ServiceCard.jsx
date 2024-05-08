import { FaArrowRight } from "react-icons/fa";
const ServiceCard = ({ service }) => {
  console.log(service);
  const { img, title, price } = service;
  return (
    <div className="card bg-base-100 col-span-1: md:col-span-4 border p-5 space-y-3">
      <figure className="rounded-lg overflow-hidden">
        <img src={img} className="w-full h-64 object-cover object-center" />
      </figure>
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex items-center justify-between">
          <p className="text-orange-600 text-xl font-medium">Price: ${price}</p>
          <button className="text-orange-600">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
