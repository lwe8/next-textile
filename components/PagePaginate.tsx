"use client";
import React from "react";

interface PaginateProps {
  fn: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  pages: number;
  size?: number;
}
const NoPage = React.memo(function NoPage() {
  return (
    <button type="button" className="nopage-icon">
      <span>No</span>
      <span>Page</span>
    </button>
  );
});
const PagePagination = React.memo(function PagePagination({
  fn,
  index,
  pages,
  size,
}: PaginateProps) {
  const _size = size ?? 45;
  const NextBtn = () => {
    return (
      <button
        type="button"
        onClick={() => fn((index + pages - 1) % pages)}
        className="arrow-icon"
      >
        <svg
          fill="currentcolor"
          width={_size}
          height={_size}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="24"
            height="24"
            transform="rotate(90 12 12)"
            opacity="0"
          />

          <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z" />
        </svg>
      </button>
    );
  };
  const PrevBtn = () => {
    return (
      <button
        type="button"
        onClick={() => fn((index + pages + 1) % pages)}
        className="arrow-icon"
      >
        <svg
          fill="currentcolor"
          width={_size}
          height={_size}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="24"
            height="24"
            transform="rotate(-90 12 12)"
            opacity="0"
          />

          <path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z" />
        </svg>
      </button>
    );
  };
  return (
    <div className="page-pagination">
      {index < pages - 1 ? <NextBtn /> : <NoPage />}

      {index > 0 ? <PrevBtn /> : <NoPage />}
    </div>
  );
});
export default PagePagination;
