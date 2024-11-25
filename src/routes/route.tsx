import { Routes, Route } from "react-router-dom";
import { VinteEOitoDeAgosto } from "../Pages/28-de-agosto";
import { Home } from "../Pages/Home";

export default function MainRoutes() {
  return (
    <Routes>
        <Route path="/28-de-agosto" element={<VinteEOitoDeAgosto/>}   />  
        <Route path="/" element={<Home/>}   />  
    </Routes>
  );
}