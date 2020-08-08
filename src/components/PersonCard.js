import React from 'react';
import LinkedIn from '../images/icons/linkedin.png';
import Mail from '../images/icons/email.png';

const PersonCard = ({ changeModalState, person }) => (
  // <Card className="mb-8">
  //   <img className="h-32 mr-4 object-cover" src={person.customerImage} alt={person.customerName} />
  //   <div>
  //     <p>{person.customerName}</p>
  //     <p className="text-sm text-gray-600">{person.customerTitle}</p>
  //   </div>
  //   <p className="mt-6">{person.content}</p>
  // </Card>
  <div className="bg-white border rounded-lg overflow-hidden my-2">
    <img className="w-full object-cover" src={person.image} alt={person.name} />
    <div className="p-5">
      <div>
        <p className="font-bold text-xl">{person.name}</p>
        <p className="text-sm italic text-gray-600">{person.title}</p>
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex">
          <a href={person.linkedin}>
            <img src={LinkedIn} className="w-8 mr-2 social-icon" alt="linkedin" />
          </a>
          <a href={`mailto:${person.email}`}>
            <img src={Mail} className="w-8 social-icon" alt="mail" />
          </a>
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
