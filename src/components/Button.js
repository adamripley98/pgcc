import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  sm: 'py-2 px-6 text-sm',
  lg: `py-4 px-8 sm:px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size }) => {
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
    >
      {children}
    </button>
  );
};

export default Button;
