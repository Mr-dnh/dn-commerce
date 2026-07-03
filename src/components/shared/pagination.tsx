"use client";

import { useRouter } from "next/navigation";

export default function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const router = useRouter();

  if (totalPages <= 1) return null;

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    // با window.location مجبور به رفرش کامل میشه
    window.location.href = `/products?page=${page}`;
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-12">
      <button
        onClick={() => goToPage(currentPage - 1)}
        className={`px-4 py-2 cursor-pointer rounded-lg bg-white/10 text-white hover:bg-white/20 transition dark:bg-white/5 dark:hover:bg-white/10 ${
          currentPage === 1 ? "opacity-50 pointer-events-none" : ""
        }`}>
        Previous
      </button>

      <span className="text-white dark:text-slate-300">
        {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => goToPage(currentPage + 1)}
        className={`px-4 cursor-pointer py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition dark:bg-white/5 dark:hover:bg-white/10 ${
          currentPage === totalPages ? "opacity-50 pointer-events-none" : ""
        }`}>
        Next
      </button>
    </div>
  );
}
