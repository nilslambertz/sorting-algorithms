import React from "react";

interface FooterProps {
  toggleTheme: () => void;
}

export default function Footer({ toggleTheme }: FooterProps) {
  return (
    <div className="absolute bottom-2 select-none text-gray-400 w-full text-xl flex flex-row justify-center items-center gap-2">
      by
      <a
        href="http://www.nilslambertz.de"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-white"
      >
        nils lambertz
      </a>
      -
      <span
        className="transition-colors hover:text-white cursor-pointer"
        onClick={toggleTheme}
      >
        toggle theme
      </span>
      -
      <a
        href="https://github.com/nilslambertz/sorting-algorithms"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-white"
      >
        source code
      </a>
    </div>
  );
}
