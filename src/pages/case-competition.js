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
      subtitle="Participate in the Penn Healthcare Case Competition on November 13th."
    />
    <FadeInSection>
      <section className="pt-20">
        <div className="container mx-auto px-8">
          <p className="mt-8 text-2xl font-light text-left">
            Are you a life scientist interested in business or entrepreneurship? Do you wonder how
            game-changing decisions are made about our innovative discoveries once they leave the
            lab? Penn Biotech Group (PBG) and Penn Graduate Consulting Club (PGCC) will be hosting a nation-wide Penn Healthcare Case
            Competition on <b>November 13th, 2021</b>. This event is meant to give graduate students
            (PhDs, JDs, MDs, master’s, MBAs, etc) and postdocs an opportunity to solve a real healthcare
            problem in <b>teams of 4-6 members</b>. You will also be able to meet and engage with corporate
            leaders from top healthcare and biotechnology firms who will be serving as judges.
          </p>
          <p className="mt-8 text-2xl font-light text-left">
            All are welcome to apply to participate. No business experience is necessary. Cash
            prizes will be given! More information can be found by clicking the buttons below.
          </p>
          <p className="mt-8 text-2xl font-light text-left">
            <b>Timeline</b>
            <br><b>September 26:</b> Virtual Coffee Chat #1 (Time TBD)
            <br><b>October 6:</b> Application Opens
            <br><b>October 8:</b> Virtual Coffee Chat #2 (Time TBD)
            <br><b>October 16:</b> Application Deadline (11:59PM EST)
            <br><b>October 23:</b> Skills Building Course - Day 1
            <br><b>October 24:</b> Skills Building Course - Day 2
            <br><b>November 2:</b> First Round Deadline (11:59 PM EST)
            <br><b>November 9:</b> Finalists announced (with feedback from judges returned)
            <br><b>November 13:</b> Final Round (Live via Zoom)
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
                2021 PHCC Flyer
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
                FAQ
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
