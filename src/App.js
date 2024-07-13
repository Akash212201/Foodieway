import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer } from "./components";
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";
import Login from "./pages/LoginSignUp/Login.jsx";
import SignUp from "./pages/LoginSignUp/SignUp.jsx";
import ForgetPassword from "./pages/LoginSignUp/ForgetPassword.jsx";
import UpdatePassword from "./pages/LoginSignUp/UpdatePassword.jsx";
import Dashboard from "./Admin/pages/Dashboard.js";
import HomePage from "./pages/HomePage.jsx";
import Menu from "./pages/Menu.jsx";

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    // await getAllFoodItems().then((data) => {
    //   dispatch({
    //     type: actionType.SET_FOOD_ITEMS,
    //     foodItems: data,
    //   });
    // });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/updatepassword" element={<UpdatePassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
      </Router>
  );
};

export default App;
