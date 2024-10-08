import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store"; // Adjust the import path according to your project structure
import { LogOut, reset } from "../redux/authSlice";

// Define types for the user and auth state
interface User {
  role: string;
}

interface AuthState {
  user: User | null;
}

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Use the RootState type to access the auth state
  const { user } = useSelector((state: RootState) => state.auth);

  const logout = () => {
    dispatch(LogOut()); 
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>
              <IoHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>
              <IoPricetag /> Products
            </NavLink>
          </li>
        </ul>
        {user && user.role === "Admin" && (
          <div>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/users"}>
                  <IoPerson /> Users   
                </NavLink>
              </li>
            </ul>
          </div>
        )}

        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white">
              <IoLogOut /> Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
