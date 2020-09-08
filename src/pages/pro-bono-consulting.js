import React from 'react';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SectionSpacer from '../components/layout/SectionSpacer';
import MailList from '../components/MailList';
import Meeting from '../images/icons/meeting.png';
import Banner from '../components/Banner';
import FadeInSection from '../components/layout/FadeInSection';

export default () => (
  <Layout>
    <Banner
      title="Pro Bono Consulting"
      subtitle="PGCC members can solve business problems for companies across a variety of industries"
    />
    <FadeInSection>
      <section id="top" className="py-20">
        <div className="container mx-auto px-8">
          <p className="mt-8 text-xl md:text-2xl font-light text-left">
            PGCC offers pro bono consulting to interested organizations. We staff projects with
            enthusiastic and bright advanced degree candidates and post-doctoral researchers who use
            their analytical skillset and creativity to generate solutions for our clients. Projects
            are staffed with a project director and a project manager, both of whom work closely
            with the client to scope the project, and 4-6 team members who work together to produce
            key insights. The end products are a well-crafted deliverable for the client and an
            inside look into the world of management consulting for the team.
          </p>
        </div>
      </section>
    </FadeInSection>

    <FadeInSection>
      <section id="client" className="">
        <div className="container mx-auto px-8 flex flex-col lg:flex-row justify-center items-center">
          <img src={Meeting} alt="meeting" />
          <div className="text-left lg:pl-16">
            <LabelText>Become a client</LabelText>
            <p className="mt-8 text-xl font-light">
              At PGCC, we offer Pro Bono consulting services for clients ranging from local small
              businesses, to growing start-ups and international firms. We bring together top Penn
              graduate students of diverse backgrounds and expertise to solve business problems
              spanning marketing, strategy, and implementation for firms in education, biotech, and
              beyond.
            </p>
            <p className="mt-8 text-xl font-light">
              If you’re a potential client, reach out to us at{' '}
              <a href="mailto:pgcc.comm@gmail.com">pgcc.comm@gmail.com.</a> to learn more about
              working with us.
            </p>
          </div>
        </div>
      </section>
    </FadeInSection>

    <FadeInSection>
      <section id="join-team" className="pt-20 container mx-auto px-8">
        <LabelText>Join Our Consulting Team</LabelText>
        <p className="mt-8 text-xl font-light text-left md:text-center">
          If you’re a student,{' '}
          <a target="_" rel="noreferrer" href="https://forms.gle/V9UUAp8yHkGws8mf6">
            apply here
          </a>{' '}
          to be considered for future Pro Bono consulting projects.
        </p>
      </section>
    </FadeInSection>

    <SectionSpacer />
    <FadeInSection>
      <MailList />
    </FadeInSection>
  </Layout>
);
