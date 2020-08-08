import React from 'react';
import Button from '../components/Button';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SectionSpacer from '../components/layout/SectionSpacer';
import Agreement from '../images/icons/agreement.png';
import MailList from '../components/MailList';
import SponsorFAQ from '../components/SponsorFAQ';
import Banner from '../components/Banner';

import sponsorsGold from '../data/sponsors-gold';
import sponsorsSilver from '../data/sponsors-silver';

export default () => (
  <Layout>
    <Banner
      title="Sponsors"
      subtitle="This is the subtitle of the sponsors page. We can put whatever text you so desire here."
    />
    <section id="top" className="pt-20">
      <div className="container mx-auto px-8 lg:flex lg:justify-between">
        <div className="text-left lg:w-1/2">
          <p className="my-8 text-2xl font-light text-left">
            TODO: Write something about how we are grateful for our sponsors. Say what a sponsor
            does and what their money is used for. Perhaps talk about the difference between gold
            and silver tier sponsors. If you are interested in learning more about sponsorship,
            don't hesitate to reach out!
          </p>
          <Button>
            <a className="btn-link" href="mailto:TODO">
              Reach out
            </a>
          </Button>
        </div>
        <img src={Agreement} alt="agreement" className="hidden lg:inline-flex lg:w-1/3" />
      </div>
    </section>
    <SectionSpacer />
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
    <SectionSpacer />
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
    <SectionSpacer />
    <SponsorFAQ />
    <SectionSpacer />
    <MailList />
  </Layout>
);
