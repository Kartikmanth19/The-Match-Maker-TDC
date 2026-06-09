import { useEffect, useState } from "react";

import {
  Users,
  User,
  UserCheck,
  Heart,
  Calendar,
  FileSearch,
} from "lucide-react";

import Navbar from "../components/Navbar";
import api from "../services/api";

function Analytics() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const res = await api.get("/customers");
      setCustomers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const totalProfiles = customers.length;

  const maleProfiles = customers.filter(
    (c) => c.gender === "Male"
  ).length;

  const femaleProfiles = customers.filter(
    (c) => c.gender === "Female"
  ).length;

  const activeMatching = customers.filter(
    (c) => c.status === "Actively Matching"
  ).length;

  const meetingsScheduled = customers.filter(
    (c) => c.status === "Meeting Scheduled"
  ).length;

  const profileReview = customers.filter(
    (c) => c.status === "Profile Review"
  ).length;

  const activePercentage =
    totalProfiles > 0
      ? (activeMatching / totalProfiles) * 100
      : 0;

  const meetingPercentage =
    totalProfiles > 0
      ? (meetingsScheduled / totalProfiles) * 100
      : 0;

  const reviewPercentage =
    totalProfiles > 0
      ? (profileReview / totalProfiles) * 100
      : 0;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 p-6 md:p-10">
        <div className="mb-10">

          <h1 className="text-5xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Analytics Dashboard
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Matchmaking Insights & Customer Statistics
          </p>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">
                  Total Profiles
                </p>

                <h2 className="text-4xl font-bold text-pink-600 mt-2">
                  {totalProfiles}
                </h2>
              </div>

              <Users
                size={42}
                className="text-pink-500"
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">
                  Male Profiles
                </p>

                <h2 className="text-4xl font-bold text-blue-600 mt-2">
                  {maleProfiles}
                </h2>
              </div>

              <User
                size={42}
                className="text-blue-500"
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-purple-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">
                  Female Profiles
                </p>

                <h2 className="text-4xl font-bold text-purple-600 mt-2">
                  {femaleProfiles}
                </h2>
              </div>

              <UserCheck
                size={42}
                className="text-purple-500"
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-green-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">
                  Active Matching
                </p>

                <h2 className="text-4xl font-bold text-green-600 mt-2">
                  {activeMatching}
                </h2>
              </div>

              <Heart
                size={42}
                className="text-green-500"
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-orange-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">
                  Meetings Scheduled
                </p>

                <h2 className="text-4xl font-bold text-orange-500 mt-2">
                  {meetingsScheduled}
                </h2>
              </div>

              <Calendar
                size={42}
                className="text-orange-500"
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-yellow-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">
                  Profile Reviews
                </p>

                <h2 className="text-4xl font-bold text-yellow-500 mt-2">
                  {profileReview}
                </h2>
              </div>

              <FileSearch
                size={42}
                className="text-yellow-500"
              />
            </div>
          </div>

        </div>

        <div className="mt-8 bg-white rounded-3xl shadow-lg p-8 border border-gray-100">

          <h2 className="text-2xl font-bold mb-4">
            Platform Summary
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            Currently managing{" "}
            <span className="font-bold text-pink-600">
              {totalProfiles}
            </span>{" "}
            customer profiles with{" "}
            <span className="font-bold text-green-600">
              {activeMatching}
            </span>{" "}
            active matches and{" "}
            <span className="font-bold text-orange-600">
              {meetingsScheduled}
            </span>{" "}
            scheduled meetings.
          </p>

        </div>

        <div className="mt-8 bg-white rounded-3xl shadow-lg p-8 border border-gray-100">

          <h2 className="text-2xl font-bold mb-8">
            Matchmaking Progress
          </h2>

          <div className="space-y-8">

            <div>

              <div className="flex justify-between mb-2 font-medium">
                <span>Active Matching</span>
                <span>{activeMatching}</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-4">

                <div
                  className="bg-green-500 h-4 rounded-full transition-all duration-1000"
                  style={{
                    width: `${activePercentage}%`,
                  }}
                />

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2 font-medium">
                <span>Meetings Scheduled</span>
                <span>{meetingsScheduled}</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-4">

                <div
                  className="bg-orange-500 h-4 rounded-full transition-all duration-1000"
                  style={{
                    width: `${meetingPercentage}%`,
                  }}
                />

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2 font-medium">
                <span>Profile Review</span>
                <span>{profileReview}</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-4">

                <div
                  className="bg-yellow-500 h-4 rounded-full transition-all duration-1000"
                  style={{
                    width: `${reviewPercentage}%`,
                  }}
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Analytics;