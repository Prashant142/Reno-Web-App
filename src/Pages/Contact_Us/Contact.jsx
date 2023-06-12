import React from "react";

const Contact = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('/about.png')",
          backgroundPosition: "center",
          height: "8rem",
        }}
        className=" flex justify-center items-center"
      >
        <div className="text-white text-center">
          <div className="font-extrabold text-5xl">Contact Us</div>
        </div>
      </div>

      <div className="flex">
        <img
          style={{ height: "400px", marginTop: "30px", marginLeft: "140px" }}
          src="/map.png"
          alt=""
          srcset=""
        />
        <img
          style={{ height: "350px", marginTop: "55px", marginLeft: "80px" }}
          src="/details.png"
          alt=""
        />
      </div>

      <div
        className=" relative mt-10"
        style={{ height: "454px", backgroundColor: "#F8FDFD" }}
      >
        <div style={{ marginLeft: "140px", position: "relative", top: "30px" }}>
          <div className="text-2xl font-extrabold">Get in Touch</div>
          <div className="">
            <form action="">
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <div className="flex flex-col mt-5">
                    <label>Your Name</label>
                    <input
                      placeholder="Enter Your Name"
                      required
                      className="px-4 py-2 mt-4 rounded border 2px"
                      style={{
                        width: "490px",
                        borderColor: "#8FC743",
                        outline: "none",
                      }}
                    />
                  </div>
                  <div className="flex flex-col mt-5">
                    <label>Your Email Address</label>
                    <input
                      placeholder="Enter Email Address"
                      required
                      className="px-4 py-2 mt-4 rounded border 2px"
                      style={{
                        width: "490px",
                        borderColor: "#8FC743",
                        outline: "none",
                      }}
                    />
                  </div>
                  <div className="flex flex-col mt-5">
                    <label>Phone No.</label>
                    <input
                      placeholder="Enter Phone No."
                      required
                      className="px-4 py-2 mt-4 rounded border 2px"
                      style={{
                        width: "490px",
                        borderColor: "#8FC743",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col absolute"
                style={{ position: "absolute", top: "50px", left: "650px" }}
              >
                <label>Description</label>
                <input
                  // placeholder="Enter Description"
                  required
                  className="px-4 mt-4 rounded border 2px"
                  style={{
                    width: "490px",
                    borderColor: "#8FC743",
                    outline: "none",
                    height: "250px",
                  }}
                />
              </div>
              <div>
                <button
                  className="mt-4 rounded text-white"
                  style={{
                    width: "200px",
                    height: "45px",
                    backgroundColor: "#8FC743",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="">
        <div
          style={{
            backgroundImage: "url('/bgc.png')",
            backgroundPosition: "center",
            height: "13rem",
          }}
          className="  flex flex-col justify-center items-center"
        >
          <div className="font-bold text-white text-4xl">
            Get All The Latest Offer!
          </div>
          <div className="ml-12 text-white ">
            There are many variations of passengers of Lorem Ipsum
          </div>
          <form className="mt-5" action="">
            <input
              className="rounded ml-24"
              placeholder="Enter your Email"
              type="email"
              style={{
                width: "400px",
                height: "50px",
                paddingLeft: "10px",
                outline: "none",
              }}
            />
            <button
              className="rounded text-white font-semibold"
              style={{
                width: "100px",
                height: "50px",
                backgroundColor: "#8FC743",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
