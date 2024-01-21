import React from "react";

export default function Bloglayout({ children }) {
  return (
    <main className="w-full dark:bg-gray-950">
      <section className="max-w-screen-lg mx-auto min-h-screen px-4">
        {children}
      </section>
    </main>
  );
}
