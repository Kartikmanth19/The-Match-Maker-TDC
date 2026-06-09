import { useEffect, useState } from "react";

function NotesSection({ customerId }) {
  const key = `notes-${customerId}`;

  const [notes, setNotes] = useState("");

  useEffect(() => {
    const saved =
      localStorage.getItem(key);

    if (saved) {
      setNotes(saved);
    }
  }, [key]);

  const saveNotes = () => {
    localStorage.setItem(key, notes);

    alert("Notes Saved");
  };

  return (
    <div className="mt-8">

      <h2 className="text-xl font-bold mb-3">
        Internal Notes
      </h2>

      <textarea
        rows="5"
        className="border w-full p-4 rounded-lg"
        value={notes}
        onChange={(e) =>
          setNotes(e.target.value)
        }
      />

      <button
        onClick={saveNotes}
        className="mt-3 bg-pink-600 text-white px-4 py-2 rounded-lg"
      >
        Save Notes
      </button>

    </div>
  );
}

export default NotesSection;