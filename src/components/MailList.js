import React from 'react';
import Input from './Input';

const MailList = () => (
  <section className="lg:mx-12 mx-auto py-16 bg-gray-200 rounded-lg text-center">
    <h3 className="text-3xl font-bold leading-tight">Subscribe to our Mailing List</h3>
    <p className="mt-8 mx-8 text-xl font-light">
      Sign up for our mailing list to become a PGCC member, get updates about upcoming events, and
      gain valuable resources.
    </p>
    <p className="mt-8">
      <Input inputText="benfranklin@upenn.edu" buttonText="Submit" />
    </p>
  </section>
);

export default MailList;
