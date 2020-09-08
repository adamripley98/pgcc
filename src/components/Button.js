import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  sm: 'py-2 px-6 text-sm',
  md: 'py-4 px-4 sm:px-12',
  lg: `py-4 px-8 sm:px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size, handleSubmit }) => {
  return (
    <button
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-blue-900
        hover:bg-blue-800
        rounded
        text-white
        tracking-wider
    `}
      onClick={handleSubmit}
    >
      {children}
    </button>
  );
};

export default Button;
