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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(e) {
    if (this.state.email) {
      e.preventDefault();
      const result = await addToMailchimp(this.state.email);
      if (result.result === 'success') {
        this.setState({ result: 'Thank you for subscribing!' });
      } else {
        this.setState({
          result: 'Error subscribing. Email us at pgcc.comm@gmail.com to get on the maillist.'
        });
      }
    }
  }

  render() {
    return (
      <section className="lg:mx-12 mx-auto py-16 bg-gray-200 rounded-lg text-center">
        <h3 className="text-3xl font-bold leading-tight">Subscribe to our Mailing List</h3>
        {this.state.result ? (
          <p className="mt-8 mx-8 text-xl font-light">{this.state.result}</p>
        ) : (
          <>
            <p className="mt-8 mx-8 text-xl font-light">
              Sign up for our mailing list to become a PGCC member, get updates about upcoming
              events, and gain valuable resources.
            </p>
            <p className="mt-8">
              <Input
                inputText="benfranklin@upenn.edu"
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                buttonText="Submit"
              />
            </p>
          </>
        )}
      </section>
    );
  }
}

export default MailList;
