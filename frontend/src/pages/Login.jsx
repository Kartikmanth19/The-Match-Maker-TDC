import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = () => {
    if (
      username === "matchmaker" &&
      password === "tdc123"
    ) {
      localStorage.setItem(
        "loggedIn",
        "true"
      );

      toast.success(
        "Login Successful"
      );

      navigate("/dashboard");
    } else {
      toast.error(
        "Invalid Username or Password"
      );
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#faf7ff] flex items-center justify-center px-6">
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-pink-300/20 rounded-full blur-[140px]" />

      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-[140px]" />

      <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-rose-200/20 rounded-full blur-[120px]" />

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="relative z-10 w-full max-w-6xl"
      >

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div className="hidden lg:block">

            <div className="flex items-center gap-4 mb-10">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center shadow-xl">

                <Heart
                  size={30}
                  className="text-white"
                />

              </div>

              <div>

                <h1 className="text-5xl font-bold text-gray-900">
                  The Date Crew
                </h1>

                <p className="text-gray-500 mt-2">
                  Intelligent Matchmaking
                </p>

              </div>

            </div>

            <h2 className="text-6xl font-bold leading-tight text-gray-900">

              Building

              <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">

                Meaningful

              </span>

              Connections.

            </h2>

            <p className="mt-8 text-xl leading-relaxed text-gray-600 max-w-xl">

              Manage customer journeys,
              discover compatible matches,
              and create successful
              relationships through
              AI-powered matchmaking.

            </p>

            <div className="mt-12 space-y-5">

              <div className="flex items-center gap-3">

                <Sparkles
                  size={20}
                  className="text-pink-600"
                />

                <span className="text-gray-700">
                  AI Match Insights
                </span>

              </div>

              <div className="flex items-center gap-3">

                <ShieldCheck
                  size={20}
                  className="text-pink-600"
                />

                <span className="text-gray-700">
                  Verified Profiles
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Heart
                  size={20}
                  className="text-pink-600"
                />

                <span className="text-gray-700">
                  Smart Compatibility
                </span>

              </div>

            </div>

          </div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-[32px] shadow-2xl p-12 md:p-14"
          >

            <div className="text-center">

              <div className="w-20 h-20 mx-auto rounded-4xl bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center shadow-xl">

                <Heart
                  size={34}
                  className="text-white"
                />

              </div>

              <h2 className="mt-8 text-4xl font-bold text-gray-900">
                Welcome Back
              </h2>

              <p className="mt-3 text-gray-500 text-lg">
                Sign in to access your
                Matchmaker Dashboard
              </p>

            </div>

            <div className="mt-12 space-y-7">

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-3 text-align-centre">

                  Username

                </label>

                <input
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) =>
                    setUsername(
                      e.target.value
                    )
                  }
                  className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-white/80 shadow-sm focus:outline-none focus:ring-4 focus:ring-pink-100 focus:border-pink-500 transition-all duration-300"
                />

              </div>

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-3">

                  Password

                </label>

                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-white/80 shadow-sm focus:outline-none focus:ring-4 focus:ring-pink-100 focus:border-pink-500 transition-all duration-300"
                />

              </div>

              <button
                onClick={handleLogin}
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.99] transition-all duration-300"
              >
                Sign In
              </button>

            </div>

            <div className="mt-10 rounded-2xl bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100 p-5">

              <p className="font-semibold text-pink-700 mb-3">
                Demo Access
              </p>

              <div className="space-y-2 text-sm text-gray-600">

                <p>
                  Username:
                  <span className="font-semibold ml-2">
                    matchmaker
                  </span>
                </p>

                <p>
                  Password:
                  <span className="font-semibold ml-2">
                    tdc123
                  </span>
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </motion.div>

    </div>
  );
}

export default Login;