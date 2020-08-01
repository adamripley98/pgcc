import React from 'react';

const Card = ({ event }) => (
  <div
    className="py-6 px-12 sm:w-2/3 rounded-lg border border-solid border-gray-200"
    style={{
      boxShadow: '0 10px 28px rgba(0,0,0,.08)'
    }}
  >
    <p className="font-bold text-2xl mb-4">{event.title}</p>
    <p className="text-lg italic text-gray-600">{event.description}</p>
  </div>
);

export default Card;
