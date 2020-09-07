import React from 'react';
import Card from './Card';

const ContactForm = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center flex-col">
        <Card className="mx-4 lg:w-2/3">
          <form action="https://formcarry.com/s/nkNt2jippDBi" method="POST" acceptCharset="UTF-8">
            <div className="lg:flex">
              <input
                type="text"
                className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-4 px-4 mr-2 my-2 w-full lg:w-1/2"
                placeholder="Name"
                name="name"
              />
              <input
                type="email"
                className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-4 px-4 my-2 w-full lg:w-1/2"
                placeholder="Email"
                name="email"
              />
            </div>
            <textarea
              rows="4"
              className="focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-4 px-4 mr-2 my-2 w-full"
              placeholder="Write your message..."
              name="message"
            />
            <input type="hidden" name="_gotcha" />
            <div className="flex justify-center mt-4">
              <input
                type="submit"
                name="submit"
                value="Send Message"
                className="bg-blue-900 hover:bg-blue-800 rounded text-white tracking-wider py-4 px-8 sm:px-3"
              />
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;
