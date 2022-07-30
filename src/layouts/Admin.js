import React from "react";
import {Route, Routes} from "react-router-dom";

// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views
import Dashboard from "views/admin/Dashboard.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import LibrarySetup from "../views/library/LibrarySetup";

export default function Admin() {
    return (
        <>
            <Sidebar/>
            <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar/>
                {/* Header */}
                <HeaderStats/>
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <Routes>
                        <Route path="/admin/dashboard" element={<Dashboard/>}/>
                        <Route path="/admin/settings" element={<Settings/>}/>
                        <Route path="/admin/tables" element={<Tables/>}/>
                        <Route path="/library/librarysetup" element={<LibrarySetup/>}/>
                        {/*<Redirect from="/admin" to="/admin/dashboard" />*/}
                    </Routes>
                    <FooterAdmin/>
                </div>
            </div>
        </>
    );
}
