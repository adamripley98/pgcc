import React from 'react';
import LinkedIn from '../images/icons/linkedin.png';
import Mail from '../images/icons/email.png';

const PersonCard = ({ changeModalState, person }) => (
  <div className="flex bg-white">
    <img className="w-1/3 object-cover border rounded-l-lg" src={person.image} alt={person.name} />
    <div className="p-5 flex flex-col border rounded-r-lg justify-between">
      <div>
        <p className="font-bold text-xl">{person.name}</p>
        <p className="text-sm italic text-gray-600">{person.title}</p>
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex">
          <a href={person.linkedin}>
            <img src={LinkedIn} className="w-8 mr-2 social-icon" alt="linkedin" />
          </a>
          {person.email ? (
            <a href={`mailto:${person.email}`}>
              <img src={Mail} className="w-8 social-icon" alt="mail" />
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

export default PersonCard;
