import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const cardData = [
    {
      id: "1",
      photo: "/d1.png",
      department: "Department Name Here",
      link: "https://example.com/department1",
    },
    {
      id: "2",
      photo: "/d2.png",
      department: "Department Name Here",
      link: "https://example.com/department2",
    },
    {
      id: "3",
      photo: "/d3.png",
      department: "Department Name Here",
      link: "https://example.com/department2",
    },
    // Add more card data as needed
  ];

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
          <div className="font-extrabold text-5xl">About Us</div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <img style={{ height: "550px" }} src="\about1.png" alt="" srcset="" />
      </div>

      <div className="mt-10 ml-36 mr-40">
        <div className="font-extrabold text-3xl">Who We Are</div>
        <p className="mt-4" style={{ color: "#9B9B9B" }}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet.
        </p>
      </div>

      <div className="mt-10 ml-36 mr-40">
        <div className="font-extrabold text-3xl">Our Approach</div>
        <p className="mt-4" style={{ color: "#9B9B9B" }}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </p>
      </div>

      <div className="mt-10 ml-36 mr-40">
        <div className="flex">
          <img src="/mission.png" alt="" srcset="" />
          <div className="flex flex-col ml-6">
            <div className="font-extrabold text-3xl">Our Mission</div>
            <p className="mt-4" style={{ color: "#9B9B9B" }}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <p className="mt-4" style={{ color: "#9B9B9B" }}>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.It is a long
              established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 ml-36 mr-40">
        <div className="flex">
          <div className="flex flex-col">
            <div className="font-extrabold text-3xl">Our Vision</div>
            <p className="mt-4" style={{ color: "#9B9B9B" }}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
          <img src="/vision.png" alt="" srcset="" />
        </div>
      </div>

      <div
        className="mt-8 flex flex-col justify-center items-center"
        style={{ backgroundColor: "#F8FDFD", height: "450px" }}
      >
        <div className="text-2xl font-extrabold">Our Departments</div>
        <Slider {...settings}>
          {cardData.map((card) => (
            <div
              key={card.id}
              style={{
                width: "409.76px",
                height: "373.21px",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
              }}
            >
              <img
                src={card.photo}
                alt={card.department}
                style={{
                  width: "100%",
                  height: "70%",
                  objectFit: "cover",
                }}
              />
              <h3
                style={{
                  marginTop: "10px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {card.department}
              </h3>
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", marginTop: "10px", color: "blue" }}
              >
                View
              </a>
            </div>
          ))}
        </Slider>
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

export default About;
