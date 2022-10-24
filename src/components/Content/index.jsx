import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Hotel from "./Hotel";
import Landmark from "./Landmark";
import Restaurant from "./Restaurant";
import Cafe from "./Cafe";
import "./index.css";

export default function Content() {
  return (
    <div style={{}}>
      {/* 导航区 */}
      <div className="navigation">
        <NavLink className="navlink" to="/landmarks">
          Landmarks
        </NavLink>
        <NavLink className="navlink" to="/restaurants">
          Restaurants
        </NavLink>
        <NavLink className="navlink" to="/cafes">
          Cafes
        </NavLink>
        <NavLink className="navlink" to="/hotels">
          Hotels
        </NavLink>
      </div>

      {/* 地图展示区 */}
      <Routes>
        <Route path="/landmarks" element={<Landmark />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/cafes" element={<Cafe />} />
        <Route path="/hotels" element={<Hotel />} />
      </Routes>
    </div>
  );
}
