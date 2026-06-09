import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    ArrowLeft,
    Heart,
  LayoutDashboard,
  Users,
  Bell,
  Search,
  LogOut,
  BarChart3,
  ChevronDown
} from "lucide-react";

function Navbar() {

  const navigate = useNavigate();

  const [showMenu, setShowMenu] =
    useState(false);

  const [notifications] =
    useState(3);

  const handleLogout = () => {
    localStorage.removeItem(
      "loggedIn"
    );

    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50">

      <div className="backdrop-blur-xl bg-white/70 border-b border-pink-100 shadow-sm">

        <div className="max-w-[1600px] mx-auto px-8 h-20 flex items-center justify-between">

          <div className="flex items-center gap-4">
          </div>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 hover:bg-pink-100 hover:text-pink-600 transition"
          >
            <ArrowLeft size={20} />
          </button>

          

          <div
            onClick={() =>
              navigate("/dashboard")
            }
            className="flex items-center gap-4 cursor-pointer"
          >

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 flex items-center justify-center shadow-lg">

              <Heart
                size={24}
                className="text-white"
              />

            </div>

            <div>

              <h1 className="font-bold text-xl">
                The Date Crew
              </h1>

              <p className="text-xs text-gray-500">
                Matchmaker Platform
              </p>

            </div>

          </div>

          <div className="hidden lg:flex items-center gap-3">

            <button
              onClick={() =>
                navigate("/dashboard")
              }
              className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-pink-50 text-gray-700 hover:text-pink-600 transition"
            >
              <LayoutDashboard
                size={18}
              />
              Dashboard
            </button>

            <button
              onClick={() => {
                const section =
                  document.getElementById(
                    "customers"
                  );

                section?.scrollIntoView({
                  behavior:
                    "smooth"
                });
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-pink-50 text-gray-700 hover:text-pink-600 transition"
            >
              <Users size={18} />
              Customers
            </button>

            <button
              onClick={() => {
                const section =
                  document.getElementById(
                    "matches"
                  );

                section?.scrollIntoView({
                  behavior:
                    "smooth"
                });
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-pink-50 text-gray-700 hover:text-pink-600 transition"
            >
              ❤️ Matches
            </button>

            <button
              onClick={() =>
                navigate(
                  "/analytics"
                )
              }
              className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-pink-50 text-gray-700 hover:text-pink-600 transition"
            >
              <BarChart3
                size={18}
              />
              Analytics
            </button>

          </div>


          <div className="flex items-center gap-4">


            <div className="hidden md:flex items-center gap-2 bg-white border border-gray-200 rounded-2xl px-4 py-2 shadow-sm">

              <Search
                size={18}
                className="text-gray-400"
              />

              <input
                placeholder="Search profiles..."
                className="outline-none text-sm bg-transparent w-40"
              />

            </div>


            <button className="relative w-11 h-11 rounded-2xl bg-white shadow border border-gray-100 flex items-center justify-center hover:bg-pink-50 transition">

              <Bell
                size={18}
              />

              <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">
                {notifications}
              </span>

            </button>


            <div className="relative">

              <button
                onClick={() =>
                  setShowMenu(
                    !showMenu
                  )
                }
                className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-3 py-2 shadow-sm"
              >

                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />

                <div className="hidden md:block text-left">

                  <p className="font-medium text-sm">
                    Matchmaker
                  </p>

                  <p className="text-xs text-green-600">
                    Online
                  </p>

                </div>

                <ChevronDown
                  size={16}
                />

              </button>

              {showMenu && (

                <div className="absolute right-0 mt-3 bg-white rounded-2xl shadow-xl border border-gray-100 w-52 overflow-hidden">

                  <button
                    className="w-full text-left px-5 py-3 hover:bg-pink-50"
                  >
                    My Profile
                  </button>

                  <button
                    className="w-full text-left px-5 py-3 hover:bg-pink-50"
                  >
                    Settings
                  </button>

                  <button
                    onClick={
                      handleLogout
                    }
                    className="w-full text-left px-5 py-3 text-red-500 hover:bg-red-50"
                  >
                    Logout
                  </button>

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;