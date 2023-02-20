import React from 'react';
import Layout from '../components/layout/Layout';
import SectionSpacer from '../components/layout/SectionSpacer';
import LabelText from '../components/LabelText';
import MailList from '../components/MailList';
import FacebookEvents from '../components/FacebookEvents';
import Banner from '../components/Banner';
import FadeInSection from '../components/layout/FadeInSection';

export default () => (
  <Layout>
    <Banner
      title="Events"
      subtitle="Get involved with PGCC by attending or hosting events with us."
    />
    <FadeInSection>
      <section className="pt-20">
        <div className="container mx-auto px-8">
          <p className="mt-8 text-2xl font-light text-left">
            PGCC hosts panels with speakers from top consulting and business firms as well as guided
            case workshops, helping members network and prepare for interviews. Follow our Facebook
            and Instagram to stay up to date about our events and subscribe to our newsletter for
            more information.
          </p>
<<<<<<< HEAD

=======
          
>>>>>>> 081feb6e601787401048ece54b75acbc755b5742
        </div>
      </section>
    </FadeInSection>
    <FadeInSection>
      <section id="upcoming" className="pt-20">
        <LabelText className="mb-8 font-bold text-center">Upcoming Events</LabelText>
        <p className="mt-8 text-2xl font-light text-left">
          test test
        </p>
        <FacebookEvents />
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
