import React from 'react';
import Button from './Button';

const Card = ({ event }) => (
  <div
    className="sm:w-2/3 rounded-lg border border-solid border-gray-200"
    style={{
      boxShadow: '0 10px 28px rgba(0,0,0,.08)'
    }}
  >
    <div className="flex flex-col lg:flex-row">
      <img
        className="lg:w-5/12 h-auto object-cover rounded-t-lg lg:rounded-r-none lg:rounded-l-lg"
        src={event.image}
        alt="event-img"
      />
      <div className="lg:w-7/12 px-12 py-6">
        <div>
          <p className="font-bold text-3xl -mb-1">{event.title}</p>
          <p className="text-md mb-3 font-semibold uppercase text-gray-500">{event.date}</p>
        </div>
        <p className="text-xl italic">{event.description}</p>
        <div className="flex justify-end">
          <Button className="mt-4" size="default">
            <a className="btn-link" href={event.buttonLink}>
              {event.buttonText}
            </a>
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
