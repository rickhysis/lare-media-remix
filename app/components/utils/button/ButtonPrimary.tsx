import React from "react";

interface ButtonPrimaryProps {
	children: React.ReactNode;
	addClass?: string;
}

const ButtonPrimary : React.FC<ButtonPrimaryProps> = ({ children, addClass }) => {
  return (
    <button
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-gray-700 font-semibold rounded-lg bg-white hover:shadow-orange-md transition-all outline-none " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;