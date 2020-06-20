import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../images/benfrank.jpeg';
import SvgCharts from '../svg/SvgCharts';
import Carousel from '../components/Carousel';

export default () => (
  <Layout>
    <section id="top" className="pt-20 md:pt-40 pb-20 bg-gray-200 top-background">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Penn Graduate Consulting Club
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Premiere student-run consulting club at the University of Pennsylvania 500+ members strong.
          </p>
          <p className="mt-8 md:mt-8">
            <Button size="lg" className="mr-4">Learn More</Button>
            <Button size="lg">Get Involved</Button>
          </p>
          <p className="mt-4 text-gray-600">Subscribe to our mail list below.</p>
        </div>
        <div className="lg:w-1/2">
          <img src={HeroImage} alt="hero" />
        </div>
      </div>
    </section>
    <SplitSection
      id="mission"
      primarySlot={<Carousel />}
      secondarySlot={
        <div className="ml-20 mr-0">
          <h5 className="text-4xl font-bold leading-tight">Our Mission</h5>
          <p className="mt-8 text-xl font-light">
            Penn Graduate Consulting Club (PGCC) is one of the largest student–run consulting clubs
            for non-MBA graduate students (PhDs, MDs, JDs, master's, etc.) and post-docs at the
            University of Pennsylvania. The mission of PGCC is to educate the community about the
            consulting industry and to help advanced degree candidates prepare for a career in
            consulting.
​          </p>
          <p className="mt-8 text-xl font-light">
            PGCC currently has 500+ members and a strong impact on the broader Penn Community.
            More than 80% of our members show great passion for a consulting career,
            and more than 200 members will be applying for full-time jobs or internships in the next recruiting cycle.
          </p>
        </div>
      }
    />
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Get Involved</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Join Our Community</p>
              <p className="mt-4">
                Are you a graduate degree candidate or post-doc interested in the
                field of consulting looking to be part of our organization?&nbsp;
                <a href="mailto:TODO">Reach out.</a>
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Become a Sponsor</p>
              <p className="mt-4">
                Sponsoring our annual PGCC Case Competition offers a great branding
                opportunity for your organization.&nbsp;
                <a href="mailto:TODO">Find out more.</a>
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Work With Us</p>
              <p className="mt-4">
                PGCC offers pro bono consulting to organizations. We provide
                consultants with analytical skillsets and creativity to generate solutions for
                clients.&nbsp;
                <a href="mailto:TODO">Learn more.</a>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how your company stacks
            against the closest competitors
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Design And Plan Your Business Growth Steps
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search for opportunities
            that are in reach
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our club in numbers</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="500+" secondaryText="Passionate Members" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Subscribe to our Mailing List</h3>
      <p className="mt-8 text-xl font-light">
        Sign up for our mailing list to become a PGCC member, get updates about upcoming events, and gain valuable resources.
      </p>
      <p className="mt-8">
        <Input inputText="benfranklin@upenn.edu" buttonText="Submit" />
      </p>
    </section>
  </Layout>
);
