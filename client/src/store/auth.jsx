import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [getToken, setgetToken] = useState(localStorage.getItem("token"));
  const [User, setUser] = useState("");
  const [loading, setloading] = useState(true);
  const authorization = `Bearer ${getToken}`;
  const serverToken = (tokens) => {
    setgetToken(tokens);
    localStorage.setItem("token", tokens);
  };

  const LogoutUser = () => {
    setgetToken("");
    localStorage.removeItem("token");
  };

  let loginStatus = !!getToken;

  const UserData = async () => {
    try {
      setloading(true);
      const response = await fetch("http://localhost:8000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorization,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        setUser(data.data);
        setloading(false);
      }else{
        console.error("Fetching error");
          setloading(false)
      }
    } catch (error) {
      console.error("Error in getting Auth Data");
    }
  };

  useEffect(() => {
    UserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ serverToken, loginStatus, LogoutUser, User, authorization,setloading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const AuthContextValue = useContext(AuthContext);
  if (!AuthContextValue) {
    console.error("AuthContext must be used within an AuthProvider");
    throw new Error("AuthContext must be used within an AuthProvider");
  }
  return AuthContextValue;
};
