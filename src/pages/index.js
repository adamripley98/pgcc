import React from 'react';
import Button from '../components/Button';
import TransparentButton from '../components/TransparentButton';
import Card from '../components/Card';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import HeroImage from '../images/benfrank.jpeg';
import Carousel from '../components/Carousel';
import Folder from '../images/icons/folder.png';
import Money from '../images/icons/money.png';
import User from '../images/icons/user.png';
import MailList from '../components/MailList';
import SectionSpacer from '../components/layout/SectionSpacer';
import FadeInSection from '../components/layout/FadeInSection';
import IGFeed from '../components/IGFeed';
import Flyer from '../images/resources/Flyer.jpg';

export default () => (
  <Layout>
    <FadeInSection>
      <section id="top" className="pt-16 xl:pt-20 bg-gray-200 top-background">
        <div className="container mx-auto px-8 lg:flex lg:items-center">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              Penn Graduate Consulting Club
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              Premiere student-run consulting club at the University of Pennsylvania, 500+ members
              strong.
            </p>
            <p className="mt-8 md:mt-8">
              <Button size="lg" className="mx-4 md:-ml-1 my-1">
                <a className="btn-link" href="/about">
                  Learn More
                </a>
              </Button>
              <TransparentButton className="transparent-btn my-1" size="lg">
                <a className="blue-link" href="#get-involved">
                  Get Involved
                </a>
              </TransparentButton>
            </p>
          </div>
          <div className="lg:w-1/2">
            <img src={HeroImage} className="hide-on-mobile" alt="hero" />
          </div>
        </div>
      </section>
    </FadeInSection>
    <SectionSpacer />
    <FadeInSection>
      <SplitSection
        id="mission"
        primarySlot={<Carousel />}
        secondarySlot={
          <div className="xl:mx-16 lg:ml-20 mx-10">
            <h5 className="text-3xl font-bold leading-tight">Our Mission</h5>
            <p className="mt-8 text-xl font-light">
              Penn Graduate Consulting Club (PGCC) is one of the largest student–run consulting
              clubs for non-MBA graduate students (PhDs, MDs, JDs, master's, etc.) and post-docs at
              the University of Pennsylvania. The mission of PGCC is to educate the community about
              the consulting industry and to help advanced degree candidates prepare for a career in
              consulting. ​{' '}
            </p>
            <p className="mt-8 text-xl font-light">
              PGCC currently has 500+ members and a strong impact on the broader Penn Community.
              More than 80% of our members show great passion for a consulting career, and more than
              200 members will be applying for full-time jobs or internships in the next recruiting
              cycle.
            </p>
          </div>
        }
      />
    </FadeInSection>
    <SectionSpacer />
    <FadeInSection>
      <section id="features" className="pt-16 pb-24 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight">Get Involved</h2>
          <div className="flex flex-col lg:flex-row sm:-mx-3 mt-12">
            <div className="same-height my-6 lg:my-0 px-3">
              <Card className="bg-white">
                <div className="flex justify-center whitespace-no-wrap">
                  <img className="w-8 h-8 mr-4" src={User} alt="user" />
                  <p className="font-bold text-xl">Join Our Executive Board</p>
                </div>
                <p className="mt-4 text-lg">
                  Are you a graduate candidate or post-doc interested in consulting looking to be
                  part of our organization? Applications now open for co-chair of case competition, VP for communication and VP
for consulting.&nbsp;
                </p>
                <br />
                <Button>
                  <a className="btn-link" href="https://docs.google.com/forms/d/e/1FAIpQLSeIYxbpz2DC1kMVLQKFb9M92bb27OBZuu-wi9wEa6w_Pn2xQg/viewform?usp=sf_link">
                    Learn more and apply
                  </a>
                </Button>
              </Card>
            </div>
            <div className="same-height my-6 lg:my-0 px-3">
              <Card className="bg-white">
                <div className="flex justify-center whitespace-no-wrap">
                  <img className="w-8 h-8 mr-4" src={Money} alt="money" />
                  <p className="font-bold text-xl">Become a Sponsor</p>
                </div>
                <p className="mt-4 text-lg">
                  Sponsoring our annual PGCC Case Competition offers a great branding opportunity
                  for your organization.
                </p>
                <br />
                <Button>
                  <a className="btn-link" href="/sponsors">
                    Find out more
                  </a>
                </Button>
              </Card>
            </div>
            <div className="same-height my-6 lg:my-0 px-3">
              <Card className="bg-white">
                <div className="flex justify-center whitespace-no-wrap">
                  <img className="w-8 h-8 mr-4" src={Folder} alt="folder" />
                  <p className="font-bold text-xl">Work With Us</p>
                </div>
                <p className="mt-4 text-lg">
                  PGCC offers pro bono consulting to organizations, providing consultants with
                  analytical skillsets and creativity.&nbsp;
                </p>
                <br />
                <Button>
                  <a className="btn-link" href="/pro-bono-consulting">
                    Learn more
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>

    </FadeInSection>
      </div>
        <img className="max-w-screen-lg mx-auto pb-20" src={Flyer} alt="three" />
        <p className="mt-8 text-2xl font-light text-left">
      </div>
    </FadeInSection>

    <SectionSpacer />
    <FadeInSection>
      <section id="stats">
        <div className="container mx-auto text-center">
          <LabelText className="text-gray-600">Our club in numbers</LabelText>
          <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
            <div className="my-3 sm:w-1/3">
              <StatsBox primaryText="500+" secondaryText="Passionate Members" />
            </div>
            <div className="my-3 sm:w-1/3">
              <StatsBox primaryText="12" secondaryText="Penn Schools Represented" />
            </div>
            <div className="my-3 sm:w-1/3">
              <StatsBox primaryText="100+" secondaryText="Case Comp Participants" />
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>

    <SectionSpacer />
    <FadeInSection>
      <IGFeed />
    </FadeInSection>
    <FadeInSection>
      <div id="get-involved">
        <SectionSpacer />
        <MailList />
      </div>
    </FadeInSection>
  </Layout>
);
