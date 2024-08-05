import React from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import Login from "./components/pages/Login";
import Header from "./components/header/Header";
import Reg from "./components/pages/Reg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Error from "./components/pages/Error"
import Logout from "./components/pages/Logout";
import Admin from "./components/layouts/Admin";
import Contacts from "./components/pages/Contacts";
import Users from "./components/pages/Users";
import Edit from "./components/pages/Edit";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Reg />} />
        <Route path="/logout" element={< Logout/>} />
        <Route path="*" element={<Error />} />
        {/* //Nested Route */}
        <Route path="/admin" element={<Admin/>}>
         <Route path="users" element={<Users/>}   />
         <Route path="contacts" element={<Contacts/>} />
         <Route path="users/:id/edit" element={<Edit/>}/>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
