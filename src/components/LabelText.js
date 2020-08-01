import React from 'react';

const LabelText = ({ children, className = '' }) => (
  <p
    className={`uppercase tracking-wider text-2xl font-bold text-center text-gray-600  ${className}`}
  >
    {children}
  </p>
);

export default LabelText;
