import React from 'react';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SectionSpacer from '../components/layout/SectionSpacer';
import MailList from '../components/MailList';
import Meeting from '../images/icons/meeting.png';

export default () => (
  <Layout>
    <section id="top" className="py-20">
      <div className="container mx-auto px-8">
        <p className="mt-8 text-2xl font-light text-left">
          PGCC offers pro bono consulting to interested organizations. We staff projects with
          enthusiastic and bright advanced degree candidates and post-doctoral researchers who use
          their analytical skillset and creativity to generate solutions for our clients. Projects
          are staffed with a project director and a project manager, both of whom work closely with
          the client to scope the project, and 4-6 team members who work together to produce key
          insights. The end products are a well-crafted deliverable for the client and an inside
          look into the world of management consulting for the team.
        </p>
      </div>
    </section>
    <section id="client" className="">
      <div className="container mx-auto px-8 flex flex-col lg:flex-row justify-center items-center">
        <img src={Meeting} alt="meeting" />
        <div className="text-left lg:pl-16">
          <LabelText>Become a client</LabelText>
          <p className="mt-8 text-xl font-light">
            As one of the largest consulting clubs at UPenn, PGCC is always looking for new projects
            for our members to get real-world consulting experience. We are now working with a few
            start-ups and companies to offer pro bono consulting services in market research, entry
            strategies, implementation assistance, etc. Our members with related backgrounds work in
            teams, devoting their knowledge and time to work on projects defined by clients.
          </p>
          <p className="mt-8 text-xl font-light">
            If you are interested in working with us, contact the VP of Consulting Huiwen Bai at
            pgcc.comm@gmail.com.
          </p>
        </div>
      </div>
    </section>
    <section id="join-team" className="pt-20 container mx-auto px-8">
      <LabelText>Join Our Consulting Team</LabelText>
      <p className="mt-8 text-xl font-light">
        We inform PGCC members about upcoming pro bono consulting projects via our mailing list. If
        you would like to get first-hand experience in consulting, sign up for our mailing list to
        stay up to date!
      </p>
    </section>
    <SectionSpacer />

    <MailList />
  </Layout>
);
