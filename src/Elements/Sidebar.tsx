import { Home, LifeBuoy, ReceiptPoundSterling, Shell } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="w-[300px] bg-slate-700 h-screen text-white">
        <h1 className="text-center text-3xl font-bold pt-10">WUB Admin</h1>
        <div className="flex flex-col mt-[100px] gap-3">
          {/* Home Link */}
          <NavLink
            exact
            to="/"
            className="flex gap-2 text-lg p-3 mx-3 bg-slate-800 cursor-pointer"
            activeClassName="bg-blue-500"
          >
            <Home /> Home
          </NavLink>

          {/* Sellers Link */}
          <NavLink
            to="/sellers"
            className="flex gap-2 text-lg p-3 mx-3 cursor-pointer"
            activeClassName="bg-blue-500"
          >
            <Shell /> Sellers
          </NavLink>

          {/* Customers Link */}
          <NavLink
            to="/customers"
            className="flex gap-2 text-lg p-3 mx-3 cursor-pointer"
            activeClassName="bg-blue-500"
          >
            <LifeBuoy /> Customers
          </NavLink>

          {/* Product Link */}
          <NavLink
            to="/products"
            className="flex gap-2 text-lg p-3 mx-3 cursor-pointer"
            activeClassName="bg-blue-500"
          >
            <LifeBuoy /> Product
          </NavLink>

          {/* Report Link */}
          <NavLink
            to="/report"
            className="flex gap-2 text-lg p-3 mx-3 cursor-pointer"
            activeClassName="bg-blue-500"
          >
            <ReceiptPoundSterling /> Report
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
