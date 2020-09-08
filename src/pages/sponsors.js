import React from 'react';
import Button from '../components/Button';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SectionSpacer from '../components/layout/SectionSpacer';
import Agreement from '../images/icons/agreement.png';
import Benefits from '../images/sponsors/sponsor-benefits.pdf';
import MailList from '../components/MailList';
import SponsorFAQ from '../components/SponsorFAQ';
import Banner from '../components/Banner';
import FadeInSection from '../components/layout/FadeInSection';

import sponsorsGold from '../data/sponsors-gold';
import sponsorsSilver from '../data/sponsors-silver';

export default () => (
  <Layout>
    <Banner title="Sponsors" subtitle="Connect with top talent while supporting our members." />
    <FadeInSection>
      <section id="top" className="pt-20">
        <div className="container mx-auto px-8 lg:flex lg:justify-between">
          <div className="text-left lg:w-1/2">
            <p className="my-8 text-2xl font-light text-left">
              PGCC offers firms the chance to{' '}
              <span className="font-bold">network with a future talent pool</span> consisting of
              over 500 graduate students and postdocs from the University of Pennsylvania. Our
              sponsors <span className="font-bold">create opportunities</span> for our members by
              funding case competitions, speaker events, and scholarships. Reach out to us to learn
              how you can become a sponsor.
            </p>
            <p className="mt-8 md:mt-8">
              <Button size="md" className="mx-4 md:-ml-1 my-1">
                <a className="btn-link" href="mailto:pgcc.comm@gmail.com">
                  Reach out
                </a>
              </Button>
              <Button className="my-1" size="md">
                <a href={Benefits} className="btn-link" rel="noreferrer" target="_blank">
                  View benefits
                </a>
              </Button>
            </p>
          </div>
          <img src={Agreement} alt="agreement" className="hidden lg:inline-flex lg:w-1/3" />
        </div>
      </section>
    </FadeInSection>

    <SectionSpacer />
    <FadeInSection>
      <section id="gold-sponsors">
        <div className="container mx-auto">
          <LabelText className="mb-12">Gold Sponsors</LabelText>
          <div className="flex flex-wrap items-center justify-center">
            {sponsorsGold.map(sponsor => (
              <div key={sponsor.link} className="px-5 py-2 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4">
                <a href={sponsor.link} target="_blank" rel="noreferrer">
                  <img src={sponsor.logo} alt="logo" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>

    <SectionSpacer />
    <FadeInSection>
      <section id="silver-sponsors">
        <div className="container mx-auto">
          <LabelText className="mb-12 font-bold text-center">Silver Sponsors</LabelText>
          <div className="flex flex-wrap items-center justify-center">
            {sponsorsSilver.map(sponsor => (
              <div key={sponsor.link} className="px-5 py-2 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4">
                <a href={sponsor.link} target="_blank" rel="noreferrer">
                  <img src={sponsor.logo} alt="logo" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>

    <SectionSpacer />
    <FadeInSection>
      <SponsorFAQ />
    </FadeInSection>
    <SectionSpacer />
    <FadeInSection>
      <MailList />
    </FadeInSection>
  </Layout>
);
