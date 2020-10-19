import React from 'react';
import Layout from '../components/layout/Layout';
import SectionSpacer from '../components/layout/SectionSpacer';
import MailList from '../components/MailList';
import Banner from '../components/Banner';
import FadeInSection from '../components/layout/FadeInSection';
import Button from '../components/Button';

const str = 'here';
const result = str.link(
  'https://upenn.zoom.us/meeting/register/tJwpcOqoqj8tH90kiR8szYz4U4cOHfK4HC3v'
);
export default () => (
  <Layout>
    <Banner
      title="Penn Healthcare Case Competition"
      subtitle="Participate in the first virtual Penn Healthcare Case Competition on November 7th."
    />
    <FadeInSection>
      <section className="pt-20">
        <div className="container mx-auto px-8">
          <p className="mt-8 text-2xl font-light text-left">
            Are you a life scientist interested in business or entrepreneurship? Do you wonder how
            game-changing decisions are made about our innovative discoveries once they leave the
            lab? Penn Biotech Group (PBG) and Penn Graduate Consulting Club (PGCC) will be hosting
            the first virtual Penn Healthcare Case Competition on <b>November 7th, 2020</b>. This
            event is meant to give graduate students (PhDs, JDs, MDs, master’s, etc) and postdocs an
            opportunity to solve a real healthcare problem in <b>teams of 3-6 members</b>. You will
            also be able to meet and engage with corporate leaders from top healthcare and
            biotechnology firms who will be serving as judges.
          </p>
          <p className="mt-8 text-2xl font-light text-left">
            All are welcome to apply to participate. No business experience is necessary. Cash
            prizes will be given with the first-place team receiving $2000! More information can be
            found by clicking the buttons below.
          </p>
          <p className="mt-8 text-2xl font-light text-left">
            <b>Applications are open now from October 7th to October 18th, 2020.</b> Additionally,
            we&apos;ll be hosting a coffee chat on <b>October 9th, 2020 from 7-8 PM EST</b>. Please{' '}
            <a href="https://forms.gle/RdeE8L4MLMuWynTaA">
              register your team for the competition here,{' '}
            </a>{' '}
            and find info and register for the coffee chat below!
          </p>
          <div className="flex justify-center mt-20">
            <iframe
              className="w-full md:w-2/3 lg:w-1/2 h-64"
              title="case-comp-video"
              src="https://www.youtube.com/embed/vkpgqlEaRUc"
              frameBorder="0"
              allow="accelerometer;
          autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="my-20 flex flex-wrap justify-center">
            <Button className="mt-4 mx-3" size="lg">
              <a
                href="https://pbgconsulting.org/PBGsite/wp-content/uploads/2020/09/2020-PHCC-Flyer.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-link"
              >
                2020 PHCC Flyer
              </a>
            </Button>
            <Button className="mt-4 mx-3" size="lg">
              <a
                href="https://pbgconsulting.org/PBGsite/wp-content/uploads/2020/09/Case-Competition-Structure-1.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-link"
              >
                Case Competition Structure
              </a>
            </Button>
            <Button className="mt-4 mx-3" size="lg">
              <a
                href="https://upenn.zoom.us/meeting/register/tJwpcOqoqj8tH90kiR8szYz4U4cOHfK4HC3v"
                target="_blank"
                rel="noreferrer"
                className="btn-link"
              >
                Coffee Chat Registration
              </a>
            </Button>
          </div>
        </div>
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
