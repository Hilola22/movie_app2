import { memo } from "react";

export const NotFoundPage = memo(() => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-gray-200 p-6">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-400 mb-6 text-center max-w-md">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="px-5 py-2 rounded-lg bg-red-700 text-white hover:bg-red-800 transition"
      >
        Go Back Home
      </a>
    </div>
  );
})
