"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div className="p-8 text-red-500">
      {/* Back navigation link */}
      <Link
        href="/destinations"
        className="inline-flex items-center text-travel-blue-600 hover:text-travel-blue-700 mb-6 transition-colors"
      >
        ← Back to Destinations
      </Link>

      <h1>Error Occured!!</h1>
      <p>{error.message}</p>

      <button
        onClick={() => reset}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}
