import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NoAccessToken = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const getMe = async () => {
      try {
        const token = localStorage.getItem("token");
        // If the token is not found, it means that we can access the page
        if (!token) {
          return;
        }
        await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // If the token is not found, it means that we can access the page
        navigate("/");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // if token is not valid, it means that we can access the page
          if (error.response.status === 401) {
            localStorage.removeItem("token");
            return;
          }
          alert(error?.response?.data?.message);
          return;
        }
        alert(error?.message);
      }
    };
    getMe();
  }, []);
  return children;
};

export default NoAccessToken;
