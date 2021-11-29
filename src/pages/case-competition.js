import React from 'react';
import Layout from '../components/layout/Layout';
import SectionSpacer from '../components/layout/SectionSpacer';
import MailList from '../components/MailList';
import Banner from '../components/Banner';
import FadeInSection from '../components/layout/FadeInSection';
import Button from '../components/Button';
import CaseCompFAQ from '../components/CaseCompFAQ';
import Three from '../images/resources/2021PHCC.png';

const str = 'here';
const result = str.link(
  'https://upenn.zoom.us/meeting/register/tJwpcOqoqj8tH90kiR8szYz4U4cOHfK4HC3v'
);
export default () => (
  <Layout>
    <Banner
      title="Penn Virtual Healthcare Case Competition"
      subtitle="Participate in the Penn Healthcare Case Competition on November 13th."
    />
    <FadeInSection>
      <section className="pt-20">
        <div className="container mx-auto px-8">
          <p className="mt-8 text-2xl font-light text-justify">
            Are you a life scientist interested in business or entrepreneurship? Do you wonder how
            game-changing decisions are made about our innovative discoveries once they leave the
            lab? Penn Biotech Group (PBG) and Penn Graduate Consulting Club (PGCC) will be hosting a
            nation-wide Penn Healthcare Case Competition on <b>November 13th, 2021</b>. This event is
            meant to give graduate students(PhDs, JDs, MDs, master’s, MBAs, etc) and postdocs an opportunity
            to solve a real healthcare problem in <b>teams of 4-6 members</b>. You will also be able to meet
            and engage with corporate leaders from top healthcare and biotechnology firms who will be serving
            as judges.
          </p>
          <p className="mt-8 text-2xl font-light text-left">
            All are welcome to apply to participate. No business experience is necessary. Cash
            prizes will be given! More information can be found by clicking the buttons below.
          </p>
          <img className="max-w-screen-lg mx-auto pb-20" src={Three} alt="three" />
          <p className="mt-8 text-2xl font-light text-left">
            <b>The competition has ended on November 13, 2021. Here are the winning teams:</b>
          </p>
          <p className="mt-8 text-2xl font-light text-left">
            <b>1st Place:</b> Astralis Consulting (Ishtiaq Mawla, Fabienne Birkle, M. Sydney Smith, Shree P. Metur, Wayne Hawkins )
          </p>
          <p className="mt-8 text-2xl font-light text-left">
            <b>2nd place:</b> MBS Dream Team (Jonathan Ventura, Alexandra Anaele, Christian Torres, Alice Wen)
          </p>
          <p className="mt-8 text-2xl font-light text-left">
            <b>3rd place: </b> Physicianeers (Priya Arunachalam, Sandra Zhi, Brendan D'Souza, Robby Loving)
          </p>
          <div className="flex justify-center mt-20">
            <iframe
              className="w-full md:w-2/3 lg:w-1/2 h-80"
              title="case-comp-video"
              src="https://www.youtube.com/embed/7W4_2d8_3nw"
              frameBorder="0"
              allow="accelerometer;
          autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="my-20 flex flex-wrap justify-center">
            <Button className="mt-4 mx-3" size="lg">
              <a
                href="https://forms.gle/xsUdtRVijkHvP9yV9"
                target="_blank"
                rel="noreferrer"
                className="btn-link"
              >
                Coffee Chat Registration
              </a>
            </Button>
            <Button className="mt-4 mx-3" size="lg">
              <a
                href="https://forms.gle/sbjvJ4BzFvAQLv6p7"
                target="_blank"
                rel="noreferrer"
                className="btn-link"
              >
                Application Form
              </a>
            </Button>
            <Button className="mt-4 mx-3" size="lg">
              <a
                href="https://docs.google.com/document/d/18fTSMhitA97YbPwlslekLW_tgOd4Zf2wTULm1_evlz0/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn-link"
              >
                Competition Logistics
              </a>
            </Button>
          </div>
        </div>
      </section>
    </FadeInSection>
    <FadeInSection>
      <CaseCompFAQ />
    </FadeInSection>
    <FadeInSection>
      <div id="get-involved">
        <SectionSpacer />
        <MailList />
      </div>
    </FadeInSection>
  </Layout>
);
