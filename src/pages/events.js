import React from 'react';
import Layout from '../components/layout/Layout';
import SectionSpacer from '../components/layout/SectionSpacer';
import Calendar from '../images/calendar.png';
import PastEventCard from '../components/PastEventCard';
import UpcomingEventCard from '../components/UpcomingEventCard';
import MailList from '../components/MailList';
import pastEvents from '../data/past-events';
import upcomingEvents from '../data/upcoming-events';

export default () => (
  <Layout>
    <section className="pt-20">
      <div className="container mx-auto px-8">
        <p className="mt-8 text-2xl font-light text-left">
          PGCC hosts guided case practice sessions each week to help members practice and improve
          their interview performance. PGCC will also host speakers from consulting firms throughout
          the semester. Stay tuned and subscribe to our newsletter for more information.
        </p>
      </div>
    </section>
    <section id="upcoming" className="pt-20">
      <div className="flex justify-center mb-10">
        <img className="w-12 mr-2" src={Calendar} alt="calendar" />
        <p className="font-bold text-3xl self-center">UPCOMING EVENTS</p>
      </div>
      <div>
        {upcomingEvents.map(event => (
          <div key={event.title} className="flex justify-center px-3 mb-6">
            <UpcomingEventCard className="" event={event} />
          </div>
        ))}
      </div>
    </section>
    <section id="past" className="pt-20">
      <div className="flex justify-center mb-10">
        <img className="w-12 mr-2" src={Calendar} alt="calendar" />
        <p className="font-bold text-3xl self-center">PAST EVENTS</p>
      </div>
      <div>
        {pastEvents.map(event => (
          <div key={event.title} className="flex justify-center px-3 mb-6">
            <PastEventCard className="" event={event} />
          </div>
        ))}
      </div>
    </section>
    <div id="get-involved">
      <SectionSpacer />
      <MailList />
    </div>
  </Layout>
);
