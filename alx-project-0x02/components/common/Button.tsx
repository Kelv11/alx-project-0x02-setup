import React from "react";
import { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({ title, size, shape, onClick }) => {
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "px-3 py-1 text-sm";
      case "medium":
        return "px-4 py-2 text-base";
      case "large":
        return "px-6 py-3 text-lg";
      default:
        return "px-4 py-2 text-base";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`
        bg-blue-600 text-white font-medium hover:bg-blue-700 
        transition-colors duration-200 focus:outline-none 
        focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
        ${getSizeClasses()} ${shape}
      `}
    >
      {title}
    </button>
  );
};

export default Button;
