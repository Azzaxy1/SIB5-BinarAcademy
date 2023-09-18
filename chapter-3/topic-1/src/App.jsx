import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css"; //Global style
import "bootstrap/dist/css/bootstrap.min.css"; //Global style (Bootstrap)
import PeopleComparison from "./pages/PeopleComparison";
import Header from "./components/Header";
import ModuleStyles from "./pages/ModuleStyles";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkApp" element={<PeopleComparison />} />
        <Route path="/module-styles" element={<ModuleStyles />} />

        {/* The page for not found url path */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
