import React from "react";
import {Route, Routes} from "react-router-dom";

// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views
import LibrarySetup from "../views/library/LibrarySetup.js";

export default function Library() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
          <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
              <div className="px-4 md:px-10 mx-auto w-full">
                  <div>
                      <div className="flex flex-wrap">
                          <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                          </div>
                          <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                          </div>
                          <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                          </div>
                          <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Routes>
            <Route path="/library/librarysetup" element={<LibrarySetup/>} />
          </Routes>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
