import React from 'react';
import Button from './Button';

const Input = ({ inputText, buttonText, className = '', handleSubmit, handleChange }) => (
  <>
    <input
      type="email"
      className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg sm:w-2/3 md:w-1/2 lg:w-1/3 py-4 px-4 mr-2"
      placeholder={inputText}
      name="email"
      onChange={handleChange}
    />
    <Button size="lg" handleSubmit={handleSubmit}>
      {buttonText}
    </Button>
  </>
);

export default Input;
