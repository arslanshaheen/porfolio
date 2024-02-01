import "./App.css";
import { Pages } from "./components/pages/Pages";
import { useEffect } from "react";

//npm install --save aos@next
//aos
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  //aos
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Pages />
    </>
  );
}

export default App;

// "aos" is the name of the package you want to install. In this context, "aos"
// is likely a library used for scroll animations in web development.
// @next:

// The @next part specifies that you want to install the next version or
//  pre-release version of the "aos" package. This is often used when you want to try out features or changes that are in
//  development but not yet officially released.
