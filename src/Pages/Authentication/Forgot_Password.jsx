import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

const Forgot_Password = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div
        className="rounded"
        style={{
          width: "450px",
          height: "430px",
          boxShadow: "0 0 8px 5px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="flex justify-end relative right-4 top-2 text-red-600 font-extrabold text-xl">
          <ClearRoundedIcon />
        </div>
        <div className="flex justify-center">
          <img className="h-24" src="/logo.png" alt="" srcset="" />
        </div>
        <div className="mt-5">
          <div className="ml-7">Forgot Password ?</div>
          <form className="flex flex-col items-center">
            <input
              type="email"
              style={{ width: "390px", outline: "none" }}
              className=" px-4 py-2 mt-4 border border-gray-300 rounded"
              placeholder="Email"
              required
            />

            <button
              type="submit"
              style={{ width: "390px" }}
              className="text-sm px-4 py-2 mt-8 text-white bg-green-500 rounded hover:bg-green-600 transition-all duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>

          <div className="flex mt-5 items-center">
            <div
              className="1px solid bg-gray-200 h-0.5 ml-8"
              style={{ width: "150px" }}
            ></div>
            <div className="px-8 text-sm">OR</div>
            <div
              className="1px solid bg-gray-200 h-0.5"
              style={{ width: "150px" }}
            ></div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              style={{ width: "390px", backgroundColor: "#3A589B" }}
              className="flex items-center justify-center px-4 py-2 mt-8 text-white  rounded text-sm"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot_Password;
