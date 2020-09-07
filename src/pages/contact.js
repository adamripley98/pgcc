import React from 'react';
import Layout from '../components/layout/Layout';
import SectionSpacer from '../components/layout/SectionSpacer';
import MailList from '../components/MailList';
import Banner from '../components/Banner';
import ContactForm from '../components/ContactForm';
import FadeInSection from '../components/layout/FadeInSection';

export default () => (
  <Layout>
    <Banner
      title="Get in touch"
      subtitle="Inquire about our club through the form and we will respond within 48 hours."
    />
    <FadeInSection>
      <section className="pt-20">
        <ContactForm />
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
