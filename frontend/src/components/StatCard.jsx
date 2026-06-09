import {
  Users,
  Heart,
  Calendar,
  CheckCircle
} from "lucide-react";

function StatCard({
  title,
  value
}) {

  const getIcon = () => {

    switch (title) {

      case "Total Clients":
        return <Users size={24} />;

      case "Verified Profiles":
        return <CheckCircle size={24} />;

      case "Pending Matches":
        return <Heart size={24} />;

      case "Meetings Scheduled":
        return <Calendar size={24} />;

      default:
        return <Users size={24} />;
    }
  };

  return (
    <div className="group relative overflow-hidden bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500"></div>

      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-500 text-sm font-medium">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            {value}
          </h2>

        </div>

        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-center text-pink-600 group-hover:scale-110 transition">

          {getIcon()}

        </div>

      </div>

      <div className="mt-5">

        <span className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
          Active
        </span>

      </div>

    </div>
  );
}

export default StatCard;