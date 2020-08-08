import React from 'react';
import LinkedIn from '../images/icons/linkedin.png';
import Mail from '../images/icons/email.png';

const Modal = ({ showModal, changeModalState, person }) => (
  <div className={showModal ? 'show-modal' : 'hide-modal'}>
    <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75" />
      </div>

      <div
        className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <div>
              <p className="font-bold text-xl">{person.name}</p>
              <p className="text-sm italic text-gray-600">{person.title}</p>
            </div>
            <div className="my-6">
              <p className="text-md text-gray-800">{person.content}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 px-4 py-3 sm:px-6 flex items-center justify-between">
          <div className="flex">
            <a href={person.linkedin}>
              <img src={LinkedIn} className="w-8 h-8 mr-2 social-icon" alt="linkedin" />
            </a>
            <a href={`mailto:${person.email}`}>
              <img src={Mail} className="w-8 h-8 social-icon" alt="mail" />
            </a>
          </div>
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            onClick={() => changeModalState(person)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
