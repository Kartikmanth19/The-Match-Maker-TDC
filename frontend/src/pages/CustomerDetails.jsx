import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import NotesSection from "../components/NotesSection";
import MatchCard from "../components/MatchCard";
import api from "../services/api";

function CustomerDetails() {
  const { id } = useParams();

  const [customer, setCustomer] = useState(null);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCustomer();
    fetchMatches();
  }, [id]);

  const fetchCustomer = async () => {
    try {
      const res = await api.get(`/customers/${id}`);
      setCustomer(res.data);
    } catch (error) {
      console.log("Customer Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMatches = async () => {
    try {
      const res = await api.get(`/matches/${id}`);

      console.log("MATCHES API:", res.data);

      setMatches(
        Array.isArray(res.data)
          ? res.data
          : []
      );
    } catch (error) {
      console.log("Matches Error:", error);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="p-8">
          <h1>Loading...</h1>
        </div>
      </>
    );
  }

  if (!customer) {
    return (
      <>
        <Navbar />
        <div className="p-8">
          <h1>Customer Not Found</h1>
        </div>
      </>
    );
  }

  return (
  <>
    <Navbar />

    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 p-6 md:p-10">
      <div className="max-w-8xl mx-10px bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white">
        <div className="h-40 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600"></div>

        <div className="px-4 md:px-6 pb-6">
          <div className="-mt-16 flex flex-col md:flex-row gap-6 items-center md:items-end">

            <img
              src={
                customer.photo ||
                "https://via.placeholder.com/150"
              }
              alt={customer.firstName}
              className="w-36 h-36 rounded-full object-cover border-[6px] border-white shadow-xl"
            />

            <div className="text-center md:text-left flex-1">

              <h1 className="text-4xl font-bold text-gray-800">
                {customer.firstName} {customer.lastName}
              </h1>

              <p className="text-gray-500 text-lg mt-1">
                {customer.designation}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  ✓ Verified Profile
                </span>

                <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">
                  Active Customer
                </span>

              </div>

            </div>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

            {[
              ["Gender", customer.gender],
              ["DOB", customer.dob],
              ["Age", customer.age],
              ["Email", customer.email],
              ["Phone", customer.phone],
              ["Country", customer.country],
              ["City", customer.city],
              ["Height", `${customer.height} cm`],
              ["College", customer.college],
              ["Degree", customer.degree],
              ["Income", `₹${customer.income?.toLocaleString()}`],
              ["Company", customer.company],
              ["Designation", customer.designation],
              ["Marital Status", customer.maritalStatus],
              ["Religion", customer.religion],
              ["Caste", customer.caste],
              ["Languages", customer.languages?.join(", ")],
              ["Siblings", customer.siblings],
              ["Mother Tongue", customer.motherTongue],
              ["Diet", customer.diet],
              ["Smoking", customer.smoking],
              ["Drinking", customer.drinking],
              ["Family Type", customer.familyType],
              ["Family Values", customer.familyValues],
              ["Manglik", customer.manglik],
              ["Want Kids", customer.wantKids],
              ["Open To Relocate", customer.openToRelocate],
              ["Open To Pets", customer.openToPets],
            ].map(([label, value]) => (
              <div
                key={label}
                className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <p className="text-sm text-gray-400 mb-1">
                  {label}
                </p>

                <p className="font-semibold text-gray-800">
                  {value || "-"}
                </p>
              </div>
            ))}

          </div>

          <div className="mt-10 bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-6 border border-pink-100">

            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Partner Expectations
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {customer.partnerExpectations}
            </p>

          </div>

          <div className="mt-10">

            <h3 className="text-xl font-bold mb-5 text-gray-800">
              Journey Timeline
            </h3>

            <div className="space-y-4">

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-xl shadow-sm">
                ✅ Profile Verified
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-xl shadow-sm">
                ✅ Consultation Completed
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-xl shadow-sm">
                ✅ Matching Started
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-xl shadow-sm">
                ⏳ Meeting Scheduling In Progress
              </div>

            </div>

          </div>
          <div className="mt-10">
            <NotesSection customerId={customer.id} />
          </div>

        </div>

      </div>

      <div id="matches" className="mt-12">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">

          <h2 className="text-3xl font-bold text-gray-800">
            Suggested Matches
          </h2>

          <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium w-fit">
            {matches.length} Matches Found
          </span>

        </div>

        {!matches || matches.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-lg p-10 text-center">

            <h3 className="text-xl font-semibold text-gray-800">
              No Matches Found
            </h3>

            <p className="text-gray-500 mt-2">
              Check backend matching logic.
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {matches.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
              />
            ))}

          </div>

        )}

      </div>

    </div>
  </>
);
}

export default CustomerDetails;