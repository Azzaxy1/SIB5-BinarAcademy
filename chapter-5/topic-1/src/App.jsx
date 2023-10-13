import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import SearchMovies from "./page/SearchMovies";
import DetailMovies from "./page/DetailMovies";
import NavbarComponent from "./components/Navbar";
import Login from "./page/Login";
import Protected from "./components/Protected";
import NoAccessToken from "./components/NoAccessToken";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route
            path="/"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
          <Route
            path="/search"
            element={
              <Protected>
                <SearchMovies />
              </Protected>
            }
          />
          <Route
            path="/details/:movieId"
            element={
              <Protected>
                <DetailMovies />
              </Protected>
            }
          />

          {/* Authentication */}
          <Route
            path="/login"
            element={
              <NoAccessToken>
                <Login />
              </NoAccessToken>
            }
          />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;

