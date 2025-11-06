import { useState, useEffect } from "react";
import sowpods from "./sowpods";

export default function WordList({ regex }) {
  const [limit, setLimit] = useState(1000);

  let matching = [];
  let matches = 0;
  let error = null;

  try {
    const re = new RegExp(regex);
    matching = sowpods.filter((word) => re.test(word));
    matches = matching.length;

    matching = matching.slice(0, limit);
  } catch (err) {
    console.log(err);
    error = err;
  }

  return (
    <div>
      <div className="columns-2 md:columns-3 lg:columns-4">
        {matching.map((word) => (
          <div className="w-full text-lg" key={word}>
            {word}
          </div>
        ))}
      </div>
      {error && <span className="text-red-600 font-mono">{error.message}</span>}
      {matches > limit && (
        <div className="mt-6">
          {limit.toLocaleString()} of {matches.toLocaleString()} matches{" "}
          <button
            onClick={() => setLimit(matches)}
            className="bg-blue-500 text-white rounded px-2 py-1 hover:bg-blue-600"
          >
            show all
          </button>
        </div>
      )}
    </div>
  );
}
