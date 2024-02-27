import { Routes, Route  } from "react-router-dom";
import NotFound from "pages/NotFound/NotFound";
import NavBar from "./NavBar/NavBar";
import { lazy, Suspense } from "react";



const Home = lazy(() => import("../pages/Home/Home"));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const MoviesDetails = lazy(() => import("../pages/MoviesDetails/MoviesDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));


export const App = () => {
 
  return (
   
    <Suspense fallback={ <div>Loading...</div>}>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={ <Cast/>} />
          <Route path="reviews" element={<Reviews /> } />
        </Route>
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </Suspense>
  
     
  );
};
