import { Link } from "react-router-dom";
import loginImg from "../assets/images/login/login.svg";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="hero my-10 rounded-2xl overflow-hidden">
      <div className="hero-content grid grid-cols-2 gap-14 w-full p-0">
        <div className="col-span-2 md:col-span-1 h-full">
          <div className="flex items-center justify-center h-full w-full">
            <img src={loginImg} className="w-full object-cover object-center rounded-md " />
          </div>
        </div>

        <div className="col-span-2 md:col-span-1 h-full grid">
          <form className="flex flex-col gap-4 border p-10 rounded-2xl">
            <h1 className="text-center text-4xl font-medium col-span-2">Sign Up</h1>
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="name" className="block font-medium">
                Name
              </label>
              <input
                className="w-full py-4 px-3 border outline-none font-medium"
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="email" className="block font-medium">
                Email
              </label>
              <input
                className="w-full py-4 px-3 border outline-none font-medium"
                type="text"
                name="email"
                id="email"
                placeholder="Your Email"
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label htmlFor="password" className="block font-medium">
                Confirm Password
              </label>
              <input
                className="w-full py-4 px-3 border outline-none font-medium"
                type="text"
                name="password"
                id="password"
                placeholder="Your Password"
              />
            </div>

            <div>
              <input
                className="w-full my-4 md:h-16 btn bg-orange-600 text-white"
                type="submit"
                value="Sign Up"
              />
            </div>

            <div className="flex flex-col gap-4 items-center justify-center py-2">
              <p>or Sign up with</p>
              <div className="flex items-center gap-1 cursor-pointer">
                <div className="border p-5 bg-base-100 rounded-full">
                  <FaGoogle />
                </div>
                <div className="border p-5 bg-base-100 rounded-full">
                  <FaGithub />
                </div>
                <div className="border p-5 bg-base-100 rounded-full">
                  <FaFacebookF />
                </div>
              </div>
            </div>

            <p className="text-center">
              Already have an account? Please
              <Link to="/login" className="font-medium text-orange-600">
                {" "}
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
