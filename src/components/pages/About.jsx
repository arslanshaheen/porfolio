import React from "react";
import { Heading } from "../common/Heading";
import { about } from "../data/dummydata";

export const About = () => {
  return (
    <>
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-right">
                <img src={val.cover} alt="" width={300} height={300} />
              </div>
              <div className="right" data-aos="fade-down-left">
                <Heading title="About Me" />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <button>Download CV</button>
                <button className="primaryBtn">Download CV</button>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

//grid
// import React from "react";
// import { Heading } from "../common/Heading";
// import { about } from "../data/dummydata";
// import { Grid, Button } from "@mui/material";

// export const About = () => {
//   return (
//     <>
//       <section className="about">
//         <div className="container">
//           <Grid container spacing={3}>
//             {about.map((val) => (
//               <>
//                 <Grid item xs={12} sm={6} key={val.id}>
//                   <div className="left" data-aos="fade-down-right">
//                     <img
//                       src={val.cover}
//                       alt=""
//                       width={300}
//                       height={300}
//                       style={{ width: "100%", height: "100%" }}
//                     />
//                   </div>
//                 </Grid>
//                 <Grid item xs={12} sm={6} key={val.id}>
//                   <div className="right" data-aos="fade-down-left">
//                     <Heading title="About Me" />
//                     <p>{val.desc}</p>
//                     <p>{val.desc1}</p>
//                     <Button>Download CV</Button>
//                     <Button className="primaryBtn">Download CV</Button>
//                   </div>
//                 </Grid>
//               </>
//             ))}
//           </Grid>
//         </div>
//       </section>
//     </>
//   );
// };
