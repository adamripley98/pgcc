import React from 'react';
import LabelText from './LabelText';

const StatsBox = () => (
  <div className="mx-8">
    <LabelText className="mb-12 font-bold text-center">Sponsor FAQ</LabelText>
    <p className="text-xl font-bold">What is the PGCC Case Competition?</p>
    <p className="text-xl font-light faq-answer">
      The PGCC Case Competition is an annual event that provides advanced degree candidates from
      Penn and other top universities with the opportunity to tackle a consulting case.
    </p>
    <p className="text-xl font-bold">When and where is the PGCC Case Competition?</p>
    <p className="text-xl font-light faq-answer">
      The 2021 PGCC Case Competition will take place on November 13, 2021 virually.
    </p>
    <p className="text-xl font-bold">What is my role as a sponsor? </p>
    <p className="text-xl font-light faq-answer">
      As a sponsor, you provide financial assistance that contributes to the success of the case
      competition. Our budget goes towards prize money, catering, printing materials, and the
      networking event. We also hope that you will be able to send consultants to the final day of
      the case competition to evaluate teams.
    </p>
    <p className="text-xl font-bold">
      What are the benefits of sponsoring the PGCC Case Competition?{' '}
    </p>
    <p className="text-xl font-light faq-answer">
      There are several sponsorship packages available. In general, sponsoring the case competition
      offers a great branding opportunity for your organization. Options include ads in our printed
      materials and placement of logos on our slides and website. Please contact us for more
      information.
    </p>
  </div>
);

export default StatsBox;
