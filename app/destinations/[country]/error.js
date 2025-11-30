"use client";

export default function Error({ error, reset }) {
  return (
    <div className="p-8 text-red-100">
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
