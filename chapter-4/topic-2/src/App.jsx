import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
// import SearchMovies from "./page/SearchMovies";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/search" element={<SearchMovies />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

