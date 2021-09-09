import React from 'react';
import LabelText from './LabelText';

const StatsBox = () => (
  <div className="mx-8">
    <LabelText className="mb-12 font-bold text-center">Case Competition FAQ</LabelText>
    <p className="text-xl font-bold">What is the structure of the case competition?</p>
    <p className="text-xl font-light faq-answer">
      You will form a team of 4-6 members (2 MBA students max/team). If admitted
      into the <b>First Round</b>, your team will have ~1 week to solve the healthcare-related
      case prompt. Following, your team will present your proposed solution(s) in a
      10-15 minute video presentation. More detailed information will be included
      in our manuals for competitors. If admitted into the <b>Final Round</b>, your team
      will present your solution in front of a live panel of judges on November
      13th, 2021.
    </p>
    <p className="text-xl font-bold">What if we don’t have MBA students in our team? Can we still participate in the competition? </p>
    <p className="text-xl font-light faq-answer">
      Yes. You can participate as long as there are 4-6 members in your team.
    </p>
    <p className="text-xl font-bold">How many teams will be admitted into the First and Final Rounds?? </p>
    <p className="text-xl font-light faq-answer">
    <b>First Round:</b> After the submission of the cover letter and resume, 15-18 teams will be admitted to the First Round.
    <b>Final Round:</b> After the submission of your team’s video presentation, 4-6 teams will be admitted to the Final Round.
    </p>
    <p className="text-xl font-bold">
      I don’t have any consulting experience or business background. Can I still compete in the case competition?
    </p>
    <p className="text-xl font-light faq-answer">
      Yes, absolutely! We encourage everyone who is interested in consulting to
      apply, regardless of whether you do or do not have prior consulting experience.
      It will be a great learning experience!
    </p>
    <p className="text-xl font-bold">
      How can I find teammates?
    </p>
    <p className="text-xl font-light faq-answer">
      We encourage teams to be formed through individuals you may know from your program,
      extra-curricular activities, lab, etc. Additionally, we will host two virtual
      coffee chats that will enable you to meet other interested applicants and
      form teams of 4-6.
    </p>
  </div>
);

export default StatsBox;
