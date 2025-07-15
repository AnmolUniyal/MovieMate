import React, { useEffect } from "react";
import AdminNavbar from "../../components/admin/AdminNavBar";
import AdminSideBar1 from "../../components/admin/AdminSideBar1";
import { Outlet } from "react-router-dom";
//import { useAppContext } from "../../context/AppContext";
import Loading from "../../components/Loading";

const Layout = () => {
  //const { isAdmin, fetchIsAdmin } = useAppContext();

  // useEffect(() => {
  //   fetchIsAdmin();
  // }, []);

  return (
    <>
      <AdminNavbar />
      <div className="flex">
        <AdminSideBar1 />
        <div className="flex-1 px-4 py-10 md:px-10 h-[calc(100vh-64px)] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
