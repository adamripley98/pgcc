import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  sm: 'py-2 px-6 text-sm',
  lg: `py-4 px-8 sm:px-12`,
  xl: `py-5 px-16 text-lg`
};

const TransparentButton = ({ children, className = '', size }) => {
  return (
    <button
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-transparent
        border
        border-blue-900
        text-blue-900
        hover:bg-blue-800
        hover:text-white
        rounded
        text-white
        tracking-wider
    `}
    >
      {children}
    </button>
  );
};

export default TransparentButton;
