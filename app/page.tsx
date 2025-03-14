"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-6 text-center flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Smart Insurance Application Portal
      </h1>
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 p-4 w-full max-w-2xl">
        {/* Box 1: List of Insurance Applications */}
        <Link href="/submissions" passHref>
          <div className="flex-1 p-6 bg-blue-100 rounded-lg shadow-md hover:bg-blue-200 transition duration-300 cursor-pointer">
            <h2 className="text-xl font-semibold text-blue-800">
              List of Insurance Applications
            </h2>
            <p className="mt-2 text-blue-600">
              View all submitted insurance applications.
            </p>
          </div>
        </Link>

        <Link href="/submit-application" passHref>
          <div className="flex-1 p-6 bg-green-100 rounded-lg shadow-md hover:bg-green-200 transition duration-300 cursor-pointer">
            <h2 className="text-xl font-semibold text-green-800">
              New Insurance Application
            </h2>
            <p className="mt-2 text-green-600">
              Submit a new insurance application.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
