import React from 'react';
import Button from './Button';

const Input = ({ inputText, buttonText, className = '' }) => (
  <div>
    <input
      type="email"
      className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg sm:w-2/3 md:w-1/2 lg:w-1/3 py-4 px-4 mr-2"
      placeholder={inputText}
      name="email"
    />
    <Button size="lg">{buttonText}</Button>
  </div>
);

export default Input;
