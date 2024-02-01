import React, { useState } from "react";
import { Heading } from "../common/Heading";
import { portfolio } from "../data/dummydata";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))];
export const Portfolio = () => {
  const [list, setLists] = useState(portfolio);
  const [category, setCategory] = useState(allCategory);
  console.log(setCategory);

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category);
    setLists(newItems);
    if (category === "all") {
      setLists(portfolio);
      return;
    }
  };

  return (
    <>
      <article>
        <div className="container">
          <Heading title="Portfolio" />
          <div className="catButton">
            {category.map((category) => (
              <button
                className="primaryBtn"
                onClick={() => filterItems(category)}
                data-aos="zoom-out-down"
              >
                {category}
              </button>
            ))}
          </div>
          <div className="content grid3">
            {list.map((item) => (
              <div className="box" data-aos="fade-up">
                <div className="img">
                  <img src={item.cover} alt="" width={100} height={100} />
                </div>
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                  <VisibilityOutlinedIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

// // gride
// import React, { useState } from "react";
// import { Heading } from "../common/Heading";
// import { portfolio } from "../data/dummydata";
// import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// import { Grid, Button } from "@mui/material";

// const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))];

// export const Portfolio = () => {
//   const [list, setLists] = useState(portfolio);
//   const [category, setCategory] = useState(allCategory);

//   const filterItems = (category) => {
//     const newItems = portfolio.filter((item) => item.category === category);
//     setLists(newItems);
//     if (category === "all") {
//       setLists(portfolio);
//       return;
//     }
//   };

//   return (
//     <>
//       <article>
//         <div className="container">
//           <Heading title="Portfolio" />
//           <div className="catButton">
//             {category.map((category) => (
//               <Button
//                 className="primaryBtn"
//                 onClick={() => filterItems(category)}
//                 data-aos="zoom-out-down"
//               >
//                 {category}
//               </Button>
//             ))}
//           </div>
//           <Grid container spacing={3}>
//             {list.map((item) => (
//               <Grid item xs={12} sm={6} md={4} key={item.id}>
//                 <div className="box" data-aos="fade-up">
//                   <div className="img">
//                     <img
//                       src={item.cover}
//                       alt=""
//                       style={{ width: "100%", height: "100%" }}
//                     />
//                   </div>
//                   <div className="overlay">
//                     <h3>{item.title}</h3>
//                     <span>{item.name}</span>
//                     <VisibilityOutlinedIcon />
//                   </div>
//                 </div>
//               </Grid>
//             ))}
//           </Grid>
//         </div>
//       </article>
//     </>
//   );
// };
