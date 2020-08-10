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
import FadeInSection from '../components/layout/FadeInSection';

export default () => (
  <Layout>
    <Banner
      title="Get in touch"
      subtitle="This is the subtitle of the contact page. We can put whatever text you so desire here."
    />
    <FadeInSection>
      <section className="pt-20">
        <div className="container mx-auto px-8">Contact us</div>
      </section>
    </FadeInSection>
    <FadeInSection>
      <div id="get-involved">
        <SectionSpacer />
        <MailList />
      </div>
    </FadeInSection>
  </Layout>
);
