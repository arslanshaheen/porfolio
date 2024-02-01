import React from "react";
import Slider from "react-slick";
import { testimonials } from "../data/dummydata";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="testimonials hero">
        <div className="container">
          <Slider {...settings}>
            {testimonials.map((val) => (
              <div className="box">
                <i data-aos="zoom-out-up">
                  <FormatQuoteIcon />
                </i>
                <p data-aos="zoom-out-down">{val.text}</p>
                <div className="img" data-aos="zoom-out-right">
                  <img src={val.image} alt="" />
                </div>
                <h3 data-aos="zoom-out-left">{val.name}</h3>
                <label data-aos="zoom-out">{val.post}</label>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

// grid
// import React from "react";
// import Slider from "react-slick";
// import { testimonials } from "../data/dummydata";
// import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./Testimonials.css"; // Create a CSS file for styling

// export const Testimonials = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <>
//       <section className="testimonials hero">
//         <div className="container">
//           <Slider {...settings}>
//             {testimonials.map((val, index) => (
//               <div className="box" key={index}>
//                 <i data-aos="zoom-out-up">
//                   <FormatQuoteIcon />
//                 </i>
//                 <div className="testimonial-content">
//                   <p data-aos="zoom-out-down">{val.text}</p>
//                   <div className="img" data-aos="zoom-out-right">
//                     <img src={val.image} alt="" />
//                   </div>
//                   <h3 data-aos="zoom-out-left">{val.name}</h3>
//                   <label data-aos="zoom-out">{val.post}</label>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </section>
//     </>
//   );
// };

// .testimonials .box {
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 20px;
// }

// .testimonial-content {
//   grid-column: span 2;
// }
