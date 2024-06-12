import React from "react";

function MainButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`bg-slate-900 text-white px-5 py-2 rounded-full ${className}`}
      data-aos="fade-right"
    >
      {children}
    </button>
  );
}

export default MainButton;
