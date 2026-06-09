import { toast } from "react-hot-toast";

function MatchCard({ match }) {

  const sendMatch = () => {
    toast.success(
      `${match.firstName} ${match.lastName} match sent successfully`
    );
  };

  const getMatchLabel = (score) => {

    if (score >= 95) {
      return "Excellent Match";
    }

    if (score >= 85) {
      return "Strong Match";
    }

    if (score >= 70) {
      return "Good Match";
    }

    return "Potential Match";
  };

  const badgeColor =
    match.compatibility >= 95
      ? "bg-green-100 text-green-700"
      : match.compatibility >= 85
      ? "bg-emerald-100 text-emerald-700"
      : match.compatibility >= 70
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 p-6">


      <div className="flex items-center gap-4">

        <img
          src={
            match.photo ||
            "https://via.placeholder.com/150"
          }
          alt={match.firstName}
          className="w-16 h-16 rounded-full object-cover border-2 border-pink-200"
        />

        <div>

          <h3 className="font-bold text-lg text-gray-900">
            {match.firstName} {match.lastName}
          </h3>

          <p className="text-gray-500 text-sm">
            📍 {match.city}
          </p>

        </div>

      </div>


      <div className="mt-5 flex justify-between items-center">

        <div
          className={`px-4 py-2 rounded-full text-sm font-semibold ${badgeColor}`}
        >
          {match.compatibility}% • {getMatchLabel(match.compatibility)}
        </div>

        <span className="bg-pink-100 text-pink-700 px-3 py-2 rounded-full text-xs font-semibold">
          🤖 AI Insight
        </span>

      </div>


      <div className="mt-5 space-y-2 text-sm">

        <p>
          <strong>Age:</strong> {match.age}
        </p>

        <p>
          <strong>Company:</strong> {match.company}
        </p>

        <p>
          <strong>Designation:</strong> {match.designation}
        </p>

        <p>
          <strong>Religion:</strong> {match.religion}
        </p>

        <p>
          <strong>Marital Status:</strong> {match.maritalStatus}
        </p>

      </div>


      <div className="mt-5 p-4 bg-pink-50 rounded-2xl border border-pink-100">

        <h4 className="font-semibold text-pink-700 mb-2">
          🤖 AI Match Insight
        </h4>

        <p className="text-sm text-gray-700 leading-relaxed">

          {match.aiReason ||
            "High Potential Match. Both profiles show strong compatibility in family goals, lifestyle preferences, relocation choices and long-term relationship expectations."}

        </p>

      </div>


      <div className="mt-5">

        <h4 className="font-semibold text-gray-800 mb-3">
          Compatibility Highlights
        </h4>

        <ul className="text-sm text-gray-600 space-y-2">

          <li>✅ Family Goals Compatible</li>

          <li>✅ Similar Lifestyle Preferences</li>

          <li>✅ Strong Long-Term Potential</li>

          <li>✅ Relocation Preferences Aligned</li>

        </ul>

      </div>


      <button
        onClick={sendMatch}
        className="mt-6 w-full bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
      >
        💌 Send Match
      </button>

    </div>
  );
}

export default MatchCard;