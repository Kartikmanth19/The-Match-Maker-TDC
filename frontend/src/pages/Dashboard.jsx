import { useEffect, useMemo, useState } from "react";

import Navbar from "../components/Navbar";
import CustomerCard from "../components/CustomerCard";
import StatCard from "../components/StatCard";
import api from "../services/api";

function Dashboard() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

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

  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) => {

      const fullName =
        `${customer.firstName} ${customer.lastName}`.toLowerCase();

      const matchName =
        fullName.includes(
          search.toLowerCase()
        );

      const matchCity =
        cityFilter === ""
          ? true
          : customer.city === cityFilter;

      const matchStatus =
        statusFilter === ""
          ? true
          : customer.status === statusFilter;

      return (
        matchName &&
        matchCity &&
        matchStatus
      );
    });
  }, [
    customers,
    search,
    cityFilter,
    statusFilter
  ]);

  const uniqueCities = [
    ...new Set(
      customers.map(
        (customer) => customer.city
      )
    )
  ];

  return (
    <>
      <Navbar />

      <div className="p-8">

        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between">

  <div>
    <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
      Matchmaker Dashboard
    </h1>

    <p className="text-gray-500 mt-9 ml-7 text-align-centre" >
      Welcome back! Here's an overview of your matchmaking activities.
    </p>
  </div>

  <div className="mt-4 md:mt-10">
    <span className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 font-medium shadow-sm">
      ✨ Premium CRM
    </span>
  </div>

</div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">

          <StatCard
            title="Total Clients"
            value={customers.length}
          />

          <StatCard
            title="Verified Profiles"
            value={customers.length}
          />

          <StatCard
            title="Pending Matches"
            value={
              customers.filter(
                (c) =>
                  c.status ===
                  "Profile Review"
              ).length
            }
          />

          <StatCard
            title="Meetings Scheduled"
            value={
              customers.filter(
                (c) =>
                  c.status ===
                  "Meeting Scheduled"
              ).length
            }
          />

        </div>

        <div className="bg-white rounded-xl shadow p-4 mb-6">

          <div className="flex gap-4 flex-wrap">

            <input
              type="text"
              placeholder="Search Customer"
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="border p-3 rounded-lg flex-1"
            />

            <select
              value={cityFilter}
              onChange={(e) =>
                setCityFilter(
                  e.target.value
                )
              }
              className="border p-3 rounded-lg"
            >
              <option value="">
                All Cities
              </option>

              {uniqueCities.map(
                (city) => (
                  <option
                    key={city}
                    value={city}
                  >
                    {city}
                  </option>
                )
              )}
            </select>

            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(
                  e.target.value
                )
              }
              className="border p-3 rounded-lg"
            >
              <option value="">
                All Status
              </option>

              <option value="Profile Review">
                Profile Review
              </option>

              <option value="Actively Matching">
                Actively Matching
              </option>

              <option value="Meeting Scheduled">
                Meeting Scheduled
              </option>

              <option value="Matched">
                Matched
              </option>

            </select>

          </div>

        </div>
              <div id="customers"></div>
        <div className="grid md:grid-cols-3 gap-5">

          {filteredCustomers.map(
            (customer) => (
              
              <CustomerCard
                key={customer.id}
                customer={customer}
              />
            )
          )}

        </div>

      </div>
    </>
  );
}

export default Dashboard;