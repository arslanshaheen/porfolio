import React from "react";
import { project } from "../data/dummydata";
import CountUp from "react-countup";

//yarn or npm add react-countup

export const Counter = () => {
  return (
    <>
      <div className="hero counter">
        <div className="container grid3 grid4">
          {project.map((item) => (
            <div className="box" data-aos="zoom-in">
              <i>{item.icon}</i>
              <h1 className="heading">
                <CountUp enableScrollSpy duration={2} end={item.num} />
              </h1>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// import React from "react";
// import { project } from "../data/dummydata";
// import CountUp from "react-countup";
// import { Grid } from "@mui/material";

// export const Counter = () => {
//   return (
//     <>
//       <div className="hero counter">
//         <div className="container">
//           <Grid container spacing={3}>
//             {project.map((item, index) => (
//               <Grid item xs={12} sm={6} md={3} key={index}>
//                 <div className="box" data-aos="zoom-in">
//                   <i>{item.icon}</i>
//                   <h1 className="heading">
//                     <CountUp enableScrollSpy duration={2} end={item.num} />
//                   </h1>
//                   <h3>{item.title}</h3>
//                 </div>
//               </Grid>
//             ))}
//           </Grid>
//         </div>
//       </div>
//     </>
//   );
// };
