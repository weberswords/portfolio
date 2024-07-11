import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email &
        Resend, Vercel hosting created by <a className="underline text-[#1d4ed8] dark:text-blue-300" href="https://github.com/morhaaa/mohamedrhanmi.com">Mohamed Rhanmi</a> modified by <a className="underline text-[#1d4ed8]" href="https://github.com/weberswords/portfolio">Stephanie Weber</a>.
      </p>
    </footer>
  );
}
