import React from 'react';
import LinkedIn from '../images/icons/linkedin.png';
import Mail from '../images/icons/email.png';

const AdvisorCard = ({ changeModalState, person }) => (
  <div className="bg-white border rounded-lg overflow-hidden my-2">
    <img className="w-full object-cover" src={person.image} alt={person.name} />
    <div className="p-5">
      <div>
        <p className="font-bold text-xl">{person.name}</p>
        <p className="text-sm italic text-gray-600">{person.title}</p>
      </div>
      <div className="flex flex-wrap justify-between mt-5">
        <div className="flex">
          <a href={person.linkedin}>
            <img src={LinkedIn} className="w-8 h-8 mr-2" alt="linked-in" />
          </a>
          {person.email ? (
            <a href={`mailto:${person.email}`}>
              <img src={Mail} className="w-8 h-8" alt="mail" />
            </a>
          ) : null}
        </div>
        <button
          type="button"
          className="link-btn self-end"
          onClick={() => changeModalState(person)}
        >
          Read bio →
        </button>
      </div>
    </div>
  </div>
);

export default AdvisorCard;
