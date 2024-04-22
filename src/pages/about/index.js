import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className=" h-[100dvh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-y-6">
        <h1 className="text-4xl font-bold font-mono text-center">
          This is about page
        </h1>
        <Link
          href="/"
          className="bg-white text-black px-3 py-1 hover:bg-white/80 transition-all"
        >
          Go home
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
