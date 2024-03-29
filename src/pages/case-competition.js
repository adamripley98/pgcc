import React from 'react';
import Layout from '../components/layout/Layout';
import SectionSpacer from '../components/layout/SectionSpacer';
import MailList from '../components/MailList';
import Banner from '../components/Banner';
import FadeInSection from '../components/layout/FadeInSection';
import Button from '../components/Button';
import CaseCompFAQ from '../components/CaseCompFAQ';
import Three from '../images/resources/PYPC_flyer.jpg';

const str = 'here';
const result = str.link(
  'https://upenn.zoom.us/meeting/register/tJwpcOqoqj8tH90kiR8szYz4U4cOHfK4HC3v'
);
export default () => (
  <Layout>
    <Banner
      title="Penn, Yale, Princeton, Columbia (PYPC) Case Competition"
      subtitle="Apply to the PYPC Case Competition by March 10th."
    />
    <FadeInSection>
      <section className="pt-20">
        <div className="container mx-auto px-8">
          <p className="mt-8 text-2xl font-light text-justify">
            Are you a life scientist interested in business or entrepreneurship? Do you wonder how
            game-changing decisions are made about our innovative discoveries once they leave the
            lab? Penn, Yale, Princeton, and Columbia University will host our 2nd annual regional case
            competititon (PYPC Case Competiton) on <b>March 24th, 2023</b> (first round) virtually,
            and <b>April 7th</b> (second round) in person. It is our pleasure to invite YOU to participate
            <b> Applications are now open </b>
            <a target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSceXTV-3OTLWnaH0wWB4qNqkdCQQEH0ukUKQ6iXJFLTC-Z9bA/viewform">
               here
            </a>
          </p>

          <p className="mt-8 text-2xl font-light text-left">
            This event is open to all graduate-level students, including those in professional
             degree programs and post-doctoral fellowships. Teams of 4-6 participants will
             compete in solving a real-world business problem. We highly recommend forming
             a team with diverse educational backgrounds. No prior business experience is
             required! Participants will have the opportunity to engage with judges from
             top-tier consulting venture capital firms. Cash prizes will be given to the
             winning teams, with the first-place team receiving $4,000!
          </p>
          <p className="mt-8 text-2xl font-light text-left">
            We will be offering two <b>virtual info sessions on Feb 27th and Mar 8th 7pm EST.</b>
            The info sessions will give an overview of the case competition and facilitate
            team building among interested participants. We highly encourage you to register
            and attend at least one session if you do not yet have a full team. Please fill
            out the info session sign-up sheet if you plan to attend:
            <a target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSdiyLaPm4TxYQ6TMfQHEiUobWMbyd4q49XAl-58MgfInM5Svg/viewform">
               link!
            </a>
          </p>

          <img className="max-w-screen-lg mx-auto pb-20" src={Three} alt="three" />


          <div className="my-20 flex flex-wrap justify-center">
            <Button className="mt-4 mx-3" size="lg">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdiyLaPm4TxYQ6TMfQHEiUobWMbyd4q49XAl-58MgfInM5Svg/viewform"
                target="_blank"
                rel="noreferrer"
                className="btn-link"
              >
                Info Session Registration
              </a>
            </Button>
            <Button className="mt-4 mx-3" size="lg">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSceXTV-3OTLWnaH0wWB4qNqkdCQQEH0ukUKQ6iXJFLTC-Z9bA/viewform"
                target="_blank"
                rel="noreferrer"
                className="btn-link"
              >
                Application Form
              </a>
            </Button>
            <Button className="mt-4 mx-3" size="lg">
              <a
                href=" "
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
