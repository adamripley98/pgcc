import React from 'react';
import Layout from '../components/layout/Layout';
import SectionSpacer from '../components/layout/SectionSpacer';
import PastEventCard from '../components/PastEventCard';
import UpcomingEventCard from '../components/UpcomingEventCard';
import LabelText from '../components/LabelText';
import MailList from '../components/MailList';
import pastEvents from '../data/past-events';
import upcomingEvents from '../data/upcoming-events';
import FacebookEvents from '../components/FacebookEvents';
import Banner from '../components/Banner';

export default () => (
  <Layout>
    <Banner
      title="Events"
      subtitle="This is the subtitle of the events page. We can put whatever text you so desire here."
    />
    <section className="pt-20">
      <div className="container mx-auto px-8">
        <p className="mt-8 text-2xl font-light text-left">
          PGCC hosts guided case practice sessions each week to help members practice and improve
          their interview performance. PGCC will also host speakers from consulting firms throughout
          the semester. Stay tuned and subscribe to our newsletter for more information.{' '}
          <bold className="font-bold">
            Note: all events will be held remotely for the time being due to COVID-19.
          </bold>
        </p>
      </div>
    </section>
    <FacebookEvents />
    <section id="upcoming" className="pt-20">
      <LabelText className="mb-8 font-bold text-center">Upcoming Events</LabelText>
      <div>
        {upcomingEvents.map(event => (
          <div key={event.title} className="flex justify-center px-3 mb-6">
            <UpcomingEventCard className="" event={event} />
          </div>
        ))}
      </div>
    </section>
    <section id="past" className="pt-20">
      <LabelText className="mb-8 font-bold text-center">Past Events</LabelText>

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
