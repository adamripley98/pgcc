import React from 'react';
import Card from './Card';
import Button from './Button';

const ContactForm = () => (
  <div className="container mx-auto">
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mb-8">
        Inquire about our club through this form and we will respond within 48 hours.
      </h1>

      <Card className="mx-4 lg:w-2/3">
        <form>
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
          <div className="flex justify-center">
            <Button size="md" className="mt-8">
              Send Message
            </Button>
          </div>
        </form>
      </Card>
    </div>
  </div>
);

export default ContactForm;
