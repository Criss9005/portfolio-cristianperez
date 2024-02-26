import { Routes, Route  } from "react-router-dom";
import Movies from "pages/Movies/Movies";
import NotFound from "pages/NotFound/NotFound";
import NavBar from "./NavBar/NavBar";
import MoviesDetails from "pages/MoviesDetails/MoviesDetails";
import { lazy, Suspense } from "react";



const Home = lazy(() => import("../pages/Home/Home"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));


export const App = () => {
  
  if (window.location.pathname === '/goit-react-hw-05-movies/') {
    window.location.assign('/');
  }
 
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
