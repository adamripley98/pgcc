import React from 'react';
import Button from './Button';

const Input = ({ inputText, buttonText, className = '' }) => (
  <div>
    <input type="email" className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg w-1/4 py-4 px-4 mr-2" placeholder={inputText} name="email" />
    <Button size="lg">{buttonText}</Button>
  </div>
);

export default Input;
