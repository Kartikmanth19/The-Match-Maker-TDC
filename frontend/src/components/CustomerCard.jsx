import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Briefcase,
  Heart,
  Eye,
  IndianRupee,
  BadgeCheck
} from "lucide-react";

function CustomerCard({ customer }) {

  const navigate = useNavigate();

  const statusColor = {
    "Profile Review":
      "bg-yellow-100 text-yellow-700",

    "Actively Matching":
      "bg-green-100 text-green-700",

    "Meeting Scheduled":
      "bg-blue-100 text-blue-700",

    "Matched":
      "bg-pink-100 text-pink-700"
  };

  return (
    <div className="group bg-white rounded-[32px] border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">

      <div className="h-2 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500"></div>

      <div className="p-6">

        <div className="flex justify-between items-start">

          <div className="flex items-center gap-4">

            <div className="relative">

              <img
                src={
                  customer.photo ||
                  "https://via.placeholder.com/150"
                }
                alt={customer.firstName}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-pink-100"
              />

              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>

            </div>

            <div>

              <h2 className="font-bold text-xl text-gray-900">
                {customer.firstName} {customer.lastName}
              </h2>

              <div className="flex items-center gap-2 text-gray-500 mt-1">

                <MapPin size={14} />

                <span className="text-sm">
                  {customer.city}
                </span>

              </div>

              <p className="text-xs text-gray-400 mt-1">
                Profile ID #{customer.id}
              </p>

            </div>

          </div>

          <BadgeCheck
            size={22}
            className="text-green-500"
          />

        </div>


        <div className="mt-5">

          <span
            className={`px-4 py-2 rounded-full text-xs font-semibold ${
              statusColor[
                customer.status
              ] || "bg-gray-100"
            }`}
          >
            {customer.status}
          </span>

        </div>


        <div className="mt-5 grid grid-cols-2 gap-4">

          <div className="bg-gray-50 rounded-2xl p-4">

            <p className="text-xs text-gray-500">
              Age
            </p>

            <h3 className="font-bold text-lg">
              {customer.age}
            </h3>

          </div>

          <div className="bg-gray-50 rounded-2xl p-4">

            <p className="text-xs text-gray-500">
              Marital Status
            </p>

            <h3 className="font-semibold text-sm">
              {customer.maritalStatus}
            </h3>

          </div>

        </div>


        <div className="mt-5 flex items-center gap-2 text-gray-700">

          <Briefcase size={16} />

          <span className="text-sm">
            {customer.designation}
          </span>

        </div>


        <div className="mt-3 flex items-center gap-2 text-green-700">
    
          

          
          <IndianRupee size={16} />

          <span className="text-sm font-medium">
            ₹
            {customer.income?.toLocaleString()}
          </span>

        </div>


        <div className="mt-3 flex items-center gap-2 text-pink-600">

          <Heart size={16} />

          <span className="text-sm">
            Wants Kids:
            {" "}
            {customer.wantKids}
          </span>

        </div>


        <button
          onClick={() =>
            navigate(
              `/customer/${customer.id}`
            )
          }
          className="mt-6 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 text-white py-3 rounded-2xl font-semibold hover:scale-[1.02] hover:shadow-lg transition"
        >

          <Eye size={18} />

          View Full Profile

        </button>

      </div>

    </div>
  );
}

export default CustomerCard;