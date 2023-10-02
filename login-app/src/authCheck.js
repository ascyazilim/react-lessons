import { createContext, useState } from "react";

const ValidUserContext = createContext({
  isLoggedIn: false,
  apiAuthCheck: (enteredEmail, enteredPassword) => {},
  localAuthCheck: () => {},
});

export const ValidUserContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function apiAuthCheckHandler(enteredEmail, enteredPassword) {
    const url = "http://localhost:8080/users/login";
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: enteredEmail,
          password: enteredPassword
        })
      });

      if (response.ok) {
        const authUser = await response.json();
        localStorage.setItem("login-data", JSON.stringify(authUser));
        setIsLoggedIn(true);
        alert("Logged in!");
        console.log("başarılı");
      } else {
        alert("Authentication failed!");
        console.log("hata");
      }
    } catch (e) {
      alert("Server error");
    }
  }

  const localAuthCheckHandler = () => {
    const localData = JSON.parse(localStorage.getItem("login-data"));
    if (localData !== null) {
      setIsLoggedIn(true);
    }
  };

  const context = {
    isLoggedIn: isLoggedIn,
    apiAuthCheck: apiAuthCheckHandler,
    localAuthCheck: localAuthCheckHandler,
  };

  return (
    <ValidUserContext.Provider value={context}>
      {props.children}
    </ValidUserContext.Provider>
  );
};

export default ValidUserContext;
