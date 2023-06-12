import { React, useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MyLocationRoundedIcon from "@mui/icons-material/MyLocationRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import Slider from "react-slick";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DiscountIcon from "@mui/icons-material/Discount";

const Home_Page = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(true);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay:true,
    // autoplaySpeed: 4000
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: "url('/home.png')",
          backgroundPosition: "center",
          height: "36rem",
        }}
        className=" flex items-center"
      >
        <div className="text-black" style={{ marginLeft: "260px" }}>
          <div
            style={{ marginRight: "760px" }}
            className="font-extrabold text-5xl"
          >
            Modular kitchens
            <br /> desgined with science
            <br /> and sensibility
          </div>
          <button
            style={{
              marginRight: "680px",
              width: "179px",
              height: "50px",
              backgroundColor: "#8FC743",
              marginTop: "30px",
            }}
            className="rounded font-extrabold text-white"
          >
            Explore More
          </button>
        </div>

        <div
          className="rounded flex justify-center items-center"
          style={{
            backgroundColor: "white",
            position: "absolute",
            width: "1052px",
            height: "113px",
            left: "260px",
            top: "516px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div style={{ width: "530px", height: "56px", marginLeft: "30px" }}>
            <input
              type="text"
              placeholder="Search for anything and everything"
              style={{
                width: "90%",
                height: "100%",
                padding: "10px 40px",
                borderRadius: "5px",
                border: "1px solid #f5f5f5",
                boxSizing: "border-box",
                outline: "none",
                backgroundColor: "#F5F5F5",
              }}
            />
            <span
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "10px",
                color: "#999",
                marginLeft: "30px",
              }}
            >
              <SearchRoundedIcon />
            </span>
          </div>

          <div
            style={{
              width: "481px",
              height: "56px",
              position: "relative",
              marginRight: "10px",
            }}
          >
            <input
              type="text"
              placeholder="Location"
              style={{
                width: "90%",
                height: "100%",
                padding: "10px 40px",
                borderRadius: "5px",
                border: "1px solid #f5f5f5",
                boxSizing: "border-box",
                outline: "none",
                backgroundColor: "#F5F5F5",
              }}
            />
            <span
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "10px",
                color: "#999",
              }}
            >
              <MyLocationRoundedIcon />
            </span>
          </div>

          <button
            style={{
              width: "139px",
              height: "50px",
              backgroundColor: "#8FC743",
              marginRight: "25px",
            }}
            className="rounded font-extrabold text-white"
          >
            Search
          </button>
        </div>
      </div>

      <div>
        <div className="mt-28 ml-28 mr-28 flex justify-between">
          <div>
            <div className="font-extrabold text-3xl">Marketplace</div>
            <div className="">
              Take a tour of the homes we've designed for our customers
            </div>
          </div>
          <div className="">
            <a className="font-bold" style={{ color: "#8FC743" }} href="">
              View More <ArrowForwardRoundedIcon />
            </a>
          </div>
        </div>

        <div className="ml-28 mr-28 mt-7">
          {/* <div className="grid grid-cols-4 gap-6"> */}
          <Slider {...settings}>
            <div
              style={{
                border: "4px solid #f2f2f2",
                width: "301.06px",
                height: "315px",
                marginTop: "5px",
                // zIndex: -1,
              }}
            >
              <div
                className="relative"
                style={{ width: "301.06px", height: "180px" }}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                  src="data:image/jpeg;base64,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"
                />
                <FavoriteRoundedIcon
                  className="rounded-full"
                  style={{
                    position: "absolute",
                    top: 6,
                    right: 6,
                    border: "1px solid gray",
                    backgroundColor: "gray",
                    color: "white",
                    width: "30px",
                    height: "30px",
                  }}
                />
                <div
                  className="rounded-full flex"
                  style={{
                    position: "absolute",
                    top: 6,
                    left: 6,
                    border: "1px solid orange",
                    backgroundColor: "orange",
                    color: "white",
                    width: "63px",
                    height: "30px",
                    fontWeight: "bold",
                    paddingLeft: "8px",
                    paddingTop: "1px",
                  }}
                >
                  4.0 <StarBorderRoundedIcon />
                </div>
              </div>

              <div
                style={{
                  marginLeft: "5px",
                  marginTop: "10px",
                  fontSize: "14px",
                  width: "305px",
                }}
              >
                Dummy Text that will be fetch from backend Lorem opiujdi boefbc
                i3eoif pwejfp
              </div>
              <div className="flex items-center">
                <div
                  className="text-red-500"
                  style={{
                    fontWeight: "bold",
                    marginTop: "30px",
                    marginLeft: "5px",
                  }}
                >
                  $130
                </div>
                <div
                  style={{
                    marginTop: "30px",
                    fontSize: "12px",
                    marginLeft: "180px",
                  }}
                  className="text-gray-500"
                >
                  12 days ago
                </div>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #f2f2f2",
                width: "301.06px",
                height: "315px",
                marginTop: "5px",
                // zIndex: -1,
              }}
            >
              <div
                className="relative"
                style={{ width: "301.06px", height: "180px" }}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                  src="data:image/jpeg;base64,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"
                />
                <FavoriteRoundedIcon
                  className="rounded-full"
                  style={{
                    position: "absolute",
                    top: 6,
                    right: 6,
                    border: "1px solid gray",
                    backgroundColor: "gray",
                    color: "white",
                    width: "30px",
                    height: "30px",
                  }}
                />
                <div
                  className="rounded-full flex"
                  style={{
                    position: "absolute",
                    top: 6,
                    left: 6,
                    border: "1px solid orange",
                    backgroundColor: "orange",
                    color: "white",
                    width: "63px",
                    height: "30px",
                    fontWeight: "bold",
                    paddingLeft: "8px",
                    paddingTop: "1px",
                  }}
                >
                  4.0 <StarBorderRoundedIcon />
                </div>
              </div>

              <div
                style={{
                  marginLeft: "5px",
                  marginTop: "10px",
                  fontSize: "14px",
                  width: "305px",
                }}
              >
                Dummy Text that will be fetch from backend Lorem opiujdi boefbc
                i3eoif pwejfp
              </div>
              <div className="flex items-center">
                <div
                  className="text-red-500"
                  style={{
                    fontWeight: "bold",
                    marginTop: "30px",
                    marginLeft: "5px",
                  }}
                >
                  $130
                </div>
                <div
                  style={{
                    marginTop: "30px",
                    fontSize: "12px",
                    marginLeft: "180px",
                  }}
                  className="text-gray-500"
                >
                  12 days ago
                </div>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #f2f2f2",
                width: "301.06px",
                height: "315px",
                marginTop: "5px",
                // zIndex: -1,
              }}
            >
              <div
                className="relative"
                style={{ width: "301.06px", height: "180px" }}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                  src="data:image/jpeg;base64,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"
                />
                <FavoriteRoundedIcon
                  className="rounded-full"
                  style={{
                    position: "absolute",
                    top: 6,
                    right: 6,
                    border: "1px solid gray",
                    backgroundColor: "gray",
                    color: "white",
                    width: "30px",
                    height: "30px",
                  }}
                />
                <div
                  className="rounded-full flex"
                  style={{
                    position: "absolute",
                    top: 6,
                    left: 6,
                    border: "1px solid orange",
                    backgroundColor: "orange",
                    color: "white",
                    width: "63px",
                    height: "30px",
                    fontWeight: "bold",
                    paddingLeft: "8px",
                    paddingTop: "1px",
                  }}
                >
                  4.0 <StarBorderRoundedIcon />
                </div>
              </div>

              <div
                style={{
                  marginLeft: "5px",
                  marginTop: "10px",
                  fontSize: "14px",
                  width: "305px",
                }}
              >
                Dummy Text that will be fetch from backend Lorem opiujdi boefbc
                i3eoif pwejfp
              </div>
              <div className="flex items-center">
                <div
                  className="text-red-500"
                  style={{
                    fontWeight: "bold",
                    marginTop: "30px",
                    marginLeft: "5px",
                  }}
                >
                  $130
                </div>
                <div
                  style={{
                    marginTop: "30px",
                    fontSize: "12px",
                    marginLeft: "180px",
                  }}
                  className="text-gray-500"
                >
                  12 days ago
                </div>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #f2f2f2",
                width: "301.06px",
                height: "315px",
                marginTop: "5px",
                // zIndex: -1,
              }}
            >
              <div
                className="relative"
                style={{ width: "301.06px", height: "180px" }}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                  src="data:image/jpeg;base64,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"
                />
                <FavoriteRoundedIcon
                  className="rounded-full"
                  style={{
                    position: "absolute",
                    top: 6,
                    right: 6,
                    border: "1px solid gray",
                    backgroundColor: "gray",
                    color: "white",
                    width: "30px",
                    height: "30px",
                  }}
                />
                <div
                  className="rounded-full flex"
                  style={{
                    position: "absolute",
                    top: 6,
                    left: 6,
                    border: "1px solid orange",
                    backgroundColor: "orange",
                    color: "white",
                    width: "63px",
                    height: "30px",
                    fontWeight: "bold",
                    paddingLeft: "8px",
                    paddingTop: "1px",
                  }}
                >
                  4.0 <StarBorderRoundedIcon />
                </div>
              </div>

              <div
                style={{
                  marginLeft: "5px",
                  marginTop: "10px",
                  fontSize: "14px",
                  width: "305px",
                }}
              >
                Dummy Text that will be fetch from backend Lorem opiujdi boefbc
                i3eoif pwejfp
              </div>
              <div className="flex items-center">
                <div
                  className="text-red-500"
                  style={{
                    fontWeight: "bold",
                    marginTop: "30px",
                    marginLeft: "5px",
                  }}
                >
                  $130
                </div>
                <div
                  style={{
                    marginTop: "30px",
                    fontSize: "12px",
                    marginLeft: "180px",
                  }}
                  className="text-gray-500"
                >
                  12 days ago
                </div>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #f2f2f2",
                width: "301.06px",
                height: "315px",
                marginTop: "5px",
                zIndex: -1,
              }}
            >
              <div
                className="relative"
                style={{ width: "301.06px", height: "180px" }}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                  src="data:image/jpeg;base64,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"
                />
                <FavoriteRoundedIcon
                  className="rounded-full"
                  style={{
                    position: "absolute",
                    top: 6,
                    right: 6,
                    border: "1px solid gray",
                    backgroundColor: "gray",
                    color: "white",
                    width: "30px",
                    height: "30px",
                  }}
                />
                <div
                  className="rounded-full flex"
                  style={{
                    position: "absolute",
                    top: 6,
                    left: 6,
                    border: "1px solid orange",
                    backgroundColor: "orange",
                    color: "white",
                    width: "63px",
                    height: "30px",
                    fontWeight: "bold",
                    paddingLeft: "8px",
                    paddingTop: "1px",
                  }}
                >
                  4.0 <StarBorderRoundedIcon />
                </div>
              </div>

              <div
                style={{
                  marginLeft: "5px",
                  marginTop: "10px",
                  fontSize: "14px",
                  width: "305px",
                }}
              >
                Dummy Text that will be fetch from backend Lorem opiujdi boefbc
                i3eoif pwejfp
              </div>
              <div className="flex items-center">
                <div
                  className="text-red-500"
                  style={{
                    fontWeight: "bold",
                    marginTop: "30px",
                    marginLeft: "5px",
                  }}
                >
                  $130
                </div>
                <div
                  style={{
                    marginTop: "30px",
                    fontSize: "12px",
                    marginLeft: "180px",
                  }}
                  className="text-gray-500"
                >
                  12 days ago
                </div>
              </div>
            </div>
          </Slider>
          {/* </div> */}

          <div>
            <div className="mt-28 flex justify-between">
              <div>
                <div className="font-extrabold text-3xl">Home Services</div>
                <div className="">
                  Take a tour of the homes we've designed for our customers
                </div>
              </div>
              <div className="">
                <a className="font-bold" style={{ color: "#8FC743" }} href="">
                  View More <ArrowForwardRoundedIcon />
                </a>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-4 gap-6">
              <div
                style={{
                  width: "301.25px",
                  height: "400px",
                  border: "2px solid #f2f2f2",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                <img src="/homeservice.png" alt="" srcset="" />
                <div
                  className="mt-2 ml-2 font-extrabold"
                  style={{ fontSize: "19px" }}
                >
                  Parallel Kitchen
                </div>
                <div className="flex">
                  <div
                    className="rounded-full flex mt-2 ml-2"
                    style={{
                      // position: "absolute",
                      // top: 6,
                      // left: 6,
                      border: "1px solid orange",
                      backgroundColor: "orange",
                      color: "white",
                      width: "63px",
                      height: "27px",
                      fontWeight: "bold",
                      paddingLeft: "8px",
                      paddingTop: "1px",
                    }}
                  >
                    4.0 <StarBorderRoundedIcon />
                  </div>
                  <div
                    className="ml-2 mt-3 text-sm"
                    style={{ color: "#9B9B9B" }}
                  >
                    (1236 Reviews)
                  </div>
                  <div
                    className="ml-16 mt-3 text-sm"
                    style={{ color: "#9B9B9B" }}
                  >
                    $̶1̶5̶0̶
                  </div>
                </div>
                <div
                  className="flex items-center mt-2 ml-2 text-sm justify-between"
                  style={{ color: "#26ABE6" }}
                >
                  <div>
                    <DiscountIcon
                      style={{ color: "#26ABE6", fontSize: "16px" }}
                    />{" "}
                    Save upto 50% off
                  </div>
                  <div className="mr-5 text-black" style={{ fontSize: "16px" }}>
                    $130
                  </div>
                </div>
                <div
                  className="mt-4 ml-2"
                  style={{ width: "270px", border: "0.5px solid #9B9B9B" }}
                ></div>
                <div className="flex items-center mt-3 ml-2">
                  <div>
                    <VisibilityIcon
                      style={{ fontSize: "20px", color: "#9B9B9B" }}
                    />
                  </div>
                  <div className="ml-2 text-sm" style={{ color: "#9B9B9B" }}>
                    56 people viewing this
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "301.25px",
                  height: "400px",
                  border: "2px solid #f2f2f2",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                <img src="/homeservice.png" alt="" srcset="" />
                <div
                  className="mt-2 ml-2 font-extrabold"
                  style={{ fontSize: "19px" }}
                >
                  Parallel Kitchen
                </div>
                <div className="flex">
                  <div
                    className="rounded-full flex mt-2 ml-2"
                    style={{
                      // position: "absolute",
                      // top: 6,
                      // left: 6,
                      border: "1px solid orange",
                      backgroundColor: "orange",
                      color: "white",
                      width: "63px",
                      height: "27px",
                      fontWeight: "bold",
                      paddingLeft: "8px",
                      paddingTop: "1px",
                    }}
                  >
                    4.0 <StarBorderRoundedIcon />
                  </div>
                  <div
                    className="ml-2 mt-3 text-sm"
                    style={{ color: "#9B9B9B" }}
                  >
                    (1236 Reviews)
                  </div>
                  <div
                    className="ml-16 mt-3 text-sm"
                    style={{ color: "#9B9B9B" }}
                  >
                    $̶1̶5̶0̶
                  </div>
                </div>
                <div
                  className="flex items-center mt-2 ml-2 text-sm justify-between"
                  style={{ color: "#26ABE6" }}
                >
                  <div>
                    <DiscountIcon
                      style={{ color: "#26ABE6", fontSize: "16px" }}
                    />{" "}
                    Save upto 50% off
                  </div>
                  <div className="mr-5 text-black" style={{ fontSize: "16px" }}>
                    $130
                  </div>
                </div>
                <div
                  className="mt-4 ml-2"
                  style={{ width: "270px", border: "0.5px solid #9B9B9B" }}
                ></div>
                <div className="flex items-center mt-3 ml-2">
                  <div>
                    <VisibilityIcon
                      style={{ fontSize: "20px", color: "#9B9B9B" }}
                    />
                  </div>
                  <div className="ml-2 text-sm" style={{ color: "#9B9B9B" }}>
                    56 people viewing this
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "301.25px",
                  height: "400px",
                  border: "2px solid #f2f2f2",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                <img src="/homeservice.png" alt="" srcset="" />
                <div
                  className="mt-2 ml-2 font-extrabold"
                  style={{ fontSize: "19px" }}
                >
                  Parallel Kitchen
                </div>
                <div className="flex">
                  <div
                    className="rounded-full flex mt-2 ml-2"
                    style={{
                      // position: "absolute",
                      // top: 6,
                      // left: 6,
                      border: "1px solid orange",
                      backgroundColor: "orange",
                      color: "white",
                      width: "63px",
                      height: "27px",
                      fontWeight: "bold",
                      paddingLeft: "8px",
                      paddingTop: "1px",
                    }}
                  >
                    4.0 <StarBorderRoundedIcon />
                  </div>
                  <div
                    className="ml-2 mt-3 text-sm"
                    style={{ color: "#9B9B9B" }}
                  >
                    (1236 Reviews)
                  </div>
                  <div
                    className="ml-16 mt-3 text-sm"
                    style={{ color: "#9B9B9B" }}
                  >
                    $̶1̶5̶0̶
                  </div>
                </div>
                <div
                  className="flex items-center mt-2 ml-2 text-sm justify-between"
                  style={{ color: "#26ABE6" }}
                >
                  <div>
                    <DiscountIcon
                      style={{ color: "#26ABE6", fontSize: "16px" }}
                    />{" "}
                    Save upto 50% off
                  </div>
                  <div className="mr-5 text-black" style={{ fontSize: "16px" }}>
                    $130
                  </div>
                </div>
                <div
                  className="mt-4 ml-2"
                  style={{ width: "270px", border: "0.5px solid #9B9B9B" }}
                ></div>
                <div className="flex items-center mt-3 ml-2">
                  <div>
                    <VisibilityIcon
                      style={{ fontSize: "20px", color: "#9B9B9B" }}
                    />
                  </div>
                  <div className="ml-2 text-sm" style={{ color: "#9B9B9B" }}>
                    56 people viewing this
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "301.25px",
                  height: "400px",
                  border: "2px solid #f2f2f2",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                <img src="/homeservice.png" alt="" srcset="" />
                <div
                  className="mt-2 ml-2 font-extrabold"
                  style={{ fontSize: "19px" }}
                >
                  Parallel Kitchen
                </div>
                <div className="flex">
                  <div
                    className="rounded-full flex mt-2 ml-2"
                    style={{
                      // position: "absolute",
                      // top: 6,
                      // left: 6,
                      border: "1px solid orange",
                      backgroundColor: "orange",
                      color: "white",
                      width: "63px",
                      height: "27px",
                      fontWeight: "bold",
                      paddingLeft: "8px",
                      paddingTop: "1px",
                    }}
                  >
                    4.0 <StarBorderRoundedIcon />
                  </div>
                  <div
                    className="ml-2 mt-3 text-sm"
                    style={{ color: "#9B9B9B" }}
                  >
                    (1236 Reviews)
                  </div>
                  <div
                    className="ml-16 mt-3 text-sm"
                    style={{ color: "#9B9B9B" }}
                  >
                    $̶1̶5̶0̶
                  </div>
                </div>
                <div
                  className="flex items-center mt-2 ml-2 text-sm justify-between"
                  style={{ color: "#26ABE6" }}
                >
                  <div>
                    <DiscountIcon
                      style={{ color: "#26ABE6", fontSize: "16px" }}
                    />{" "}
                    Save upto 50% off
                  </div>
                  <div className="mr-5 text-black" style={{ fontSize: "16px" }}>
                    $130
                  </div>
                </div>
                <div
                  className="mt-4 ml-2"
                  style={{ width: "270px", border: "0.5px solid #9B9B9B" }}
                ></div>
                <div className="flex items-center mt-3 ml-2">
                  <div>
                    <VisibilityIcon
                      style={{ fontSize: "20px", color: "#9B9B9B" }}
                    />
                  </div>
                  <div className="ml-2 text-sm" style={{ color: "#9B9B9B" }}>
                    56 people viewing this
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "301.25px",
                  height: "400px",
                  border: "2px solid #f2f2f2",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                <img src="/homeservice.png" alt="" srcset="" />
                <div
                  className="mt-2 ml-2 font-extrabold"
                  style={{ fontSize: "19px" }}
                >
                  Parallel Kitchen
                </div>
                <div className="flex">
                  <div
                    className="rounded-full flex mt-2 ml-2"
                    style={{
                      // position: "absolute",
                      // top: 6,
                      // left: 6,
                      border: "1px solid orange",
                      backgroundColor: "orange",
                      color: "white",
                      width: "63px",
                      height: "27px",
                      fontWeight: "bold",
                      paddingLeft: "8px",
                      paddingTop: "1px",
                    }}
                  >
                    4.0 <StarBorderRoundedIcon />
                  </div>
                  <div
                    className="ml-2 mt-3 text-sm"
                    style={{ color: "#9B9B9B" }}
                  >
                    (1236 Reviews)
                  </div>
                  <div
                    className="ml-16 mt-3 text-sm"
                    style={{ color: "#9B9B9B" }}
                  >
                    $̶1̶5̶0̶
                  </div>
                </div>
                <div
                  className="flex items-center mt-2 ml-2 text-sm justify-between"
                  style={{ color: "#26ABE6" }}
                >
                  <div>
                    <DiscountIcon
                      style={{ color: "#26ABE6", fontSize: "16px" }}
                    />{" "}
                    Save upto 50% off
                  </div>
                  <div className="mr-5 text-black" style={{ fontSize: "16px" }}>
                    $130
                  </div>
                </div>
                <div
                  className="mt-4 ml-2"
                  style={{ width: "270px", border: "0.5px solid #9B9B9B" }}
                ></div>
                <div className="flex items-center mt-3 ml-2">
                  <div>
                    <VisibilityIcon
                      style={{ fontSize: "20px", color: "#9B9B9B" }}
                    />
                  </div>
                  <div className="ml-2 text-sm" style={{ color: "#9B9B9B" }}>
                    56 people viewing this
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "301.25px",
                  height: "400px",
                  border: "2px solid #f2f2f2",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                <img src="/homeservice.png" alt="" srcset="" />
                <div
                  className="mt-2 ml-2 font-extrabold"
                  style={{ fontSize: "19px" }}
                >
                  Parallel Kitchen
                </div>
                <div className="flex">
                  <div
                    className="rounded-full flex mt-2 ml-2"
                    style={{
                      // position: "absolute",
                      // top: 6,
                      // left: 6,
                      border: "1px solid orange",
                      backgroundColor: "orange",
                      color: "white",
                      width: "63px",
                      height: "27px",
                      fontWeight: "bold",
                      paddingLeft: "8px",
                      paddingTop: "1px",
                    }}
                  >
                    4.0 <StarBorderRoundedIcon />
                  </div>
                  <div
                    className="ml-2 mt-3 text-sm"
                    style={{ color: "#9B9B9B" }}
                  >
                    (1236 Reviews)
                  </div>
                  <div
                    className="ml-16 mt-3 text-sm"
                    style={{ color: "#9B9B9B" }}
                  >
                    $̶1̶5̶0̶
                  </div>
                </div>
                <div
                  className="flex items-center mt-2 ml-2 text-sm justify-between"
                  style={{ color: "#26ABE6" }}
                >
                  <div>
                    <DiscountIcon
                      style={{ color: "#26ABE6", fontSize: "16px" }}
                    />{" "}
                    Save upto 50% off
                  </div>
                  <div className="mr-5 text-black" style={{ fontSize: "16px" }}>
                    $130
                  </div>
                </div>
                <div
                  className="mt-4 ml-2"
                  style={{ width: "270px", border: "0.5px solid #9B9B9B" }}
                ></div>
                <div className="flex items-center mt-3 ml-2">
                  <div>
                    <VisibilityIcon
                      style={{ fontSize: "20px", color: "#9B9B9B" }}
                    />
                  </div>
                  <div className="ml-2 text-sm" style={{ color: "#9B9B9B" }}>
                    56 people viewing this
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "301.25px",
                  height: "400px",
                  border: "2px solid #f2f2f2",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                <img src="/homeservice.png" alt="" srcset="" />
                <div
                  className="mt-2 ml-2 font-extrabold"
                  style={{ fontSize: "19px" }}
                >
                  Parallel Kitchen
                </div>
                <div className="flex">
                  <div
                    className="rounded-full flex mt-2 ml-2"
                    style={{
                      // position: "absolute",
                      // top: 6,
                      // left: 6,
                      border: "1px solid orange",
                      backgroundColor: "orange",
                      color: "white",
                      width: "63px",
                      height: "27px",
                      fontWeight: "bold",
                      paddingLeft: "8px",
                      paddingTop: "1px",
                    }}
                  >
                    4.0 <StarBorderRoundedIcon />
                  </div>
                  <div
                    className="ml-2 mt-3 text-sm"
                    style={{ color: "#9B9B9B" }}
                  >
                    (1236 Reviews)
                  </div>
                  <div
                    className="ml-16 mt-3 text-sm"
                    style={{ color: "#9B9B9B" }}
                  >
                    $̶1̶5̶0̶
                  </div>
                </div>
                <div
                  className="flex items-center mt-2 ml-2 text-sm justify-between"
                  style={{ color: "#26ABE6" }}
                >
                  <div>
                    <DiscountIcon
                      style={{ color: "#26ABE6", fontSize: "16px" }}
                    />{" "}
                    Save upto 50% off
                  </div>
                  <div className="mr-5 text-black" style={{ fontSize: "16px" }}>
                    $130
                  </div>
                </div>
                <div
                  className="mt-4 ml-2"
                  style={{ width: "270px", border: "0.5px solid #9B9B9B" }}
                ></div>
                <div className="flex items-center mt-3 ml-2">
                  <div>
                    <VisibilityIcon
                      style={{ fontSize: "20px", color: "#9B9B9B" }}
                    />
                  </div>
                  <div className="ml-2 text-sm" style={{ color: "#9B9B9B" }}>
                    56 people viewing this
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "301.25px",
                  height: "400px",
                  border: "2px solid #f2f2f2",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                <img src="/homeservice.png" alt="" srcset="" />
                <div
                  className="mt-2 ml-2 font-extrabold"
                  style={{ fontSize: "19px" }}
                >
                  Parallel Kitchen
                </div>
                <div className="flex">
                  <div
                    className="rounded-full flex mt-2 ml-2"
                    style={{
                      // position: "absolute",
                      // top: 6,
                      // left: 6,
                      border: "1px solid orange",
                      backgroundColor: "orange",
                      color: "white",
                      width: "63px",
                      height: "27px",
                      fontWeight: "bold",
                      paddingLeft: "8px",
                      paddingTop: "1px",
                    }}
                  >
                    4.0 <StarBorderRoundedIcon />
                  </div>
                  <div
                    className="ml-2 mt-3 text-sm"
                    style={{ color: "#9B9B9B" }}
                  >
                    (1236 Reviews)
                  </div>
                  <div
                    className="ml-16 mt-3 text-sm"
                    style={{ color: "#9B9B9B" }}
                  >
                    $̶1̶5̶0̶
                  </div>
                </div>
                <div
                  className="flex items-center mt-2 ml-2 text-sm justify-between"
                  style={{ color: "#26ABE6" }}
                >
                  <div>
                    <DiscountIcon
                      style={{ color: "#26ABE6", fontSize: "16px" }}
                    />{" "}
                    Save upto 50% off
                  </div>
                  <div className="mr-5 text-black" style={{ fontSize: "16px" }}>
                    $130
                  </div>
                </div>
                <div
                  className="mt-4 ml-2"
                  style={{ width: "270px", border: "0.5px solid #9B9B9B" }}
                ></div>
                <div className="flex items-center mt-3 ml-2">
                  <div>
                    <VisibilityIcon
                      style={{ fontSize: "20px", color: "#9B9B9B" }}
                    />
                  </div>
                  <div className="ml-2 text-sm" style={{ color: "#9B9B9B" }}>
                    56 people viewing this
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-28 flex justify-between">
              <div>
                <div className="font-extrabold text-3xl">Project Showcase</div>
                <div className="">
                  There are many variations of passages of Lorem Ipsum
                </div>
              </div>
              <div className="">
                <a className="font-bold" style={{ color: "#8FC743" }} href="">
                  View More <ArrowForwardRoundedIcon />
                </a>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-4 gap-6">
              <div
                style={{
                  width: "301.25px",
                  height: "385px",
                  border: "2px solid #f2f2f2",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                <img src="/prodhome.png" alt="" />
                <div className="font-extrabold text-xl mt-2 ml-2">
                  Livespace Select- Modular Interiors
                </div>
                <div className="text-sm ml-2 mt-2" style={{ color: "#9B9B9B" }}>
                  Choose high quality budget-friendly modular solutions like
                  kitchen, wardrobes, TV units
                </div>
                <div className="mt-2">
                  <a
                    className="font-bold ml-2 mt-5 text-sm"
                    style={{ color: "#8FC743" }}
                    href=""
                  >
                    Let's tell you more <ArrowForwardRoundedIcon />
                  </a>
                </div>
              </div>
              <div
                style={{
                  width: "301.25px",
                  height: "385px",
                  border: "2px solid #f2f2f2",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                <img src="/prodhome.png" alt="" />
                <div className="font-extrabold text-xl mt-2 ml-2">
                  Livespace Select- Modular Interiors
                </div>
                <div className="text-sm ml-2 mt-2" style={{ color: "#9B9B9B" }}>
                  Choose high quality budget-friendly modular solutions like
                  kitchen, wardrobes, TV units
                </div>
                <div className="mt-2">
                  <a
                    className="font-bold ml-2 mt-5 text-sm"
                    style={{ color: "#8FC743" }}
                    href=""
                  >
                    Let's tell you more <ArrowForwardRoundedIcon />
                  </a>
                </div>
              </div>
              <div
                style={{
                  width: "301.25px",
                  height: "385px",
                  border: "2px solid #f2f2f2",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                <img src="/prodhome.png" alt="" />
                <div className="font-extrabold text-xl mt-2 ml-2">
                  Livespace Select- Modular Interiors
                </div>
                <div className="text-sm ml-2 mt-2" style={{ color: "#9B9B9B" }}>
                  Choose high quality budget-friendly modular solutions like
                  kitchen, wardrobes, TV units
                </div>
                <div className="mt-2">
                  <a
                    className="font-bold ml-2 mt-5 text-sm"
                    style={{ color: "#8FC743" }}
                    href=""
                  >
                    Let's tell you more <ArrowForwardRoundedIcon />
                  </a>
                </div>
              </div>
              <div
                style={{
                  width: "301.25px",
                  height: "385px",
                  border: "2px solid #f2f2f2",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                <img src="/prodhome.png" alt="" />
                <div className="font-extrabold text-xl mt-2 ml-2">
                  Livespace Select- Modular Interiors
                </div>
                <div className="text-sm ml-2 mt-2" style={{ color: "#9B9B9B" }}>
                  Choose high quality budget-friendly modular solutions like
                  kitchen, wardrobes, TV units
                </div>
                <div className="mt-2">
                  <a
                    className="font-bold ml-2 mt-5 text-sm"
                    style={{ color: "#8FC743" }}
                    href=""
                  >
                    Let's tell you more <ArrowForwardRoundedIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-28"
          style={{ height: "700px", backgroundColor: "#f8fdfd" }}
        >
          <div className="mt-20 flex items-center justify-center">
            <div className="mt-14 flex flex-col items-center">
              <div className="font-extrabold text-3xl">
                Promotions Or Best Seller ?
              </div>
              <div>There are many variations of passages of Lorem Ipsum</div>

              <div className="grid grid-cols-4 gap-6 mt-10">
                <div
                  style={{
                    width: "301.25px",
                    height: "325px",
                    border: "2px solid #f2f2f2",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <img src="/homeseller.png" alt="" srcset="" />
                  <div className="mt-2 ml-2 mr-2">
                    Lorem Ipsum is simply dummy yet of the printing and
                    typesetting industry
                  </div>
                  <div className="flex items-center justify-between mr-2">
                    <div className="mt-2 ml-2 mr-2 font-extrabold">$130</div>
                    <div className="text-sm mt-2" style={{ color: "#9B9B9B" }}>
                      12 days ago
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "301.25px",
                    height: "325px",
                    border: "2px solid #f2f2f2",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <img src="/homeseller.png" alt="" srcset="" />
                  <div className="mt-2 ml-2 mr-2">
                    Lorem Ipsum is simply dummy yet of the printing and
                    typesetting industry
                  </div>
                  <div className="flex items-center justify-between mr-2">
                    <div className="mt-2 ml-2 mr-2 font-extrabold">$130</div>
                    <div className="text-sm mt-2" style={{ color: "#9B9B9B" }}>
                      12 days ago
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "301.25px",
                    height: "325px",
                    border: "2px solid #f2f2f2",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <img src="/homeseller.png" alt="" srcset="" />
                  <div className="mt-2 ml-2 mr-2">
                    Lorem Ipsum is simply dummy yet of the printing and
                    typesetting industry
                  </div>
                  <div className="flex items-center justify-between mr-2">
                    <div className="mt-2 ml-2 mr-2 font-extrabold">$130</div>
                    <div className="text-sm mt-2" style={{ color: "#9B9B9B" }}>
                      12 days ago
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "301.25px",
                    height: "325px",
                    border: "2px solid #f2f2f2",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <img src="/homeseller.png" alt="" srcset="" />
                  <div className="mt-2 ml-2 mr-2">
                    Lorem Ipsum is simply dummy yet of the printing and
                    typesetting industry
                  </div>
                  <div className="flex items-center justify-between mr-2">
                    <div className="mt-2 ml-2 mr-2 font-extrabold">$130</div>
                    <div className="text-sm mt-2" style={{ color: "#9B9B9B" }}>
                      12 days ago
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-14">
                <button
                  className="font-extrabold"
                  style={{
                    color: "#8FC743",
                    width: "155px",
                    height: "40px",
                    border: "2px solid #8FC743",
                    backgroundColor: "white",
                  }}
                >
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
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
      </div>
    </div>
  );
};

export default Home_Page;
