import React from 'react';
import PersonCard from '../components/PersonCard';
import AdvisorCard from '../components/AdvisorCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import Modal from '../components/Modal';
import One from '../images/icons/1.png';
import Two from '../images/icons/2.png';
import Three from '../images/icons/3.png';
import Four from '../images/icons/4.png';
import Five from '../images/icons/5.png';
import MailList from '../components/MailList';
import Banner from '../components/Banner';
import SectionSpacer from '../components/layout/SectionSpacer';
import FadeInSection from '../components/layout/FadeInSection';
import execBoard from '../data/exec-board';
import alumni from '../data/alumni';
import advisors from '../data/advisors';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      person: ''
    };
    this.changeModalState = this.changeModalState.bind(this);
  }

  changeModalState(person) {
    if (this.state.showModal) {
      this.setState({ showModal: false, person: '' });
    } else {
      this.setState({ showModal: true, person });
    }
  }

  render() {
    return (
      <Layout>
        <Banner title="About PGCC" subtitle="Learn what we do and meet our executive board." />
        <FadeInSection>
          <section className="py-20">
            <div className="container mx-auto px-8">
              <div className="text-left">
                <p className="mt-8 text-2xl font-light">
                  Welcome to the site of the{' '}
                  <span className="font-bold"> Penn Graduate Consulting Club (PGCC)</span>. The
                  purpose of our group is to serve the members of the Penn graduate and
                  post-doctoral community who share a common interest in learning about careers in
                  management consulting. To this end, we host multiple events, including an annual
                  case competition, panel discussions, seminars, workshops, and lively networking
                  receptions. Members can participate in pro bono consulting projects for real-world
                  clients in order to gain hands-on experience in management consulting. We also
                  create opportunities for our members to understand the perspectives of both
                  experienced and freshly minted consultants. It is our goal to provide our 500+
                  members with an in-depth exposure to the consulting industry, and with ample
                  support in preparing for case-based interviews.
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section>
            <div className="container mx-auto px-8">
              <LabelText className="mb-8 font-bold text-center">Our Focus</LabelText>
              <div className="flex justify-center">
                <div className="mb-4 flex justify-start items-start w-full lg:w-2/3">
                  <img className="w-12 h-12 mr-4" src={One} alt="one" />
                  <p className="text-xl">
                    Increasing awareness of alternative career paths by introducing the Penn
                    graduate and post-doctoral community to career opportunities in management
                    consulting
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="my-4 flex justify-start items-start w-full lg:w-2/3">
                  <img className="w-12 h-12 mr-4" src={Two} alt="two" />
                  <p className="text-xl">Assisting our members with the application process</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="my-4 flex justify-start items-start w-full lg:w-2/3">
                  <img className="w-12 h-12 mr-4" src={Three} alt="three" />
                  <p className="text-xl">
                    Equipping non-MBA students with basic business knowledge
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="my-4 flex justify-start items-start w-full lg:w-2/3">
                  <img className="w-12 h-12 mr-4" src={Four} alt="four" />
                  <p className="text-xl">Providing opportunities to practice for case interviews</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="my-4 flex justify-start items-start w-full lg:w-2/3">
                  <img className="w-12 h-12 mr-4" src={Five} alt="five" />
                  <p className="text-xl">
                    Helping consulting firms facilitate the recruitment of non-MBA graduate students
                    at Penn
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
        <Modal
          showModal={this.state.showModal}
          person={this.state.person}
          changeModalState={this.changeModalState}
        />
        <FadeInSection>
          <section id="executive-board" className="pt-20">
            <div className="container mx-auto">
              <LabelText className="mb-8 font-bold text-center">Meet the executive board</LabelText>
              <div className="flex flex-wrap">
                {execBoard.map(person => (
                  <div key={person.name} className="px-3 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4">
                    <PersonCard
                      changeModalState={() => this.changeModalState(person)}
                      person={person}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>
        <SectionSpacer />
        <FadeInSection>
          <section id="advisors">
            <div className="container mx-auto px-2">
              <LabelText className="mb-8 pb-8 font-bold text-center">Advisors</LabelText>
              <div className="flex justify-center">
                {advisors.map(person => (
                  <div key={person.name} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4">
                    <AdvisorCard
                      changeModalState={() => this.changeModalState(person)}
                      person={person}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>
        <SectionSpacer />
        <FadeInSection>
          <section id="alumni">
            <div className="container mx-auto px-2">
              <LabelText className="mb-8 pb-8 font-bold text-center">PGCC Alumni</LabelText>
              <div className="flex flex-wrap">
                {alumni.map(person => (
                  <div className="mb-4 px-12 w-full md:w-1/2">
                    <h1 className="text-xl font-bold">{person.name}</h1>
                    <p className="italic font-light">{person.title}</p>
                  </div>
                ))}
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
  }
}

export default About;
