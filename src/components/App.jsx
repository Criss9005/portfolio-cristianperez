import { Routes, Route  } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import { lazy, Suspense } from "react";
import Projects from "pages/Projects/Projects";
import Footer from "./Footer/Footer";
const Home = lazy(() => import("../pages/Home/Home"));



export const App = () => {
 
  return (
   
    <Suspense fallback={ <div>Loading...</div>}>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    <Footer/>
    </Suspense>
  
     
  );
};
