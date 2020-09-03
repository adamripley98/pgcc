import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Input from './Input';

class MailList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      result: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    console.log('enters submit');
    e.preventDefault();
    const result = await addToMailchimp('aripley@wharton.upenn.edu');
    // I recommend setting `result` to React state
    // but you can do whatever you want
    this.setState({ result: result.msg });
    console.log('what is result', result);
  }

  render() {
    return (
      <section className="lg:mx-12 mx-auto py-16 bg-gray-200 rounded-lg text-center">
        <h3 className="text-3xl font-bold leading-tight">Subscribe to our Mailing List</h3>
        <p className="mt-8 mx-8 text-xl font-light">
          Sign up for our mailing list to become a PGCC member, get updates about upcoming events,
          and gain valuable resources.
        </p>
        <p className="mt-8">
          <Input
            inputText="benfranklin@upenn.edu"
            handleSubmit={this.handleSubmit}
            buttonText="Submit"
          />
        </p>
      </section>
    );
  }
}

export default MailList;
