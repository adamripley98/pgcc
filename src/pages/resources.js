import React from 'react';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import MailList from '../components/MailList';
import Banner from '../components/Banner';
import FadeInSection from '../components/layout/FadeInSection';

import resources from '../data/resources';

const caseBooks = resources.filter(resource => {
  return resource.type === 'case book';
});

const otherReading = resources.filter(resource => {
  return resource.type === 'other reading';
});

const podcasts = resources.filter(resource => {
  return resource.type === 'podcast';
});

const practiceCases = resources.filter(resource => {
  return resource.type === 'practice case';
});

const upennResources = resources.filter(resource => {
  return resource.type === 'upenn resource';
});

const otherResources = resources.filter(resource => {
  return resource.type === 'other resource';
});

export default () => (
  <Layout>
    <Banner
      title="Helpful Resources"
      subtitle="This is the subtitle of the resources page. We can put whatever text you so desire here."
    />
    <FadeInSection>
      <section id="case-books" className="pt-16 pb-24 bg-gray-200">
        <div className="container mx-auto">
          <LabelText className="mb-12">Consulting Case Books</LabelText>
          <div className="flex flex-wrap items-center justify-center">
            {caseBooks.map(x => (
              <div key={x.link} className="px-5 py-2 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4">
                <a href={x.link} target="_blank" rel="noreferrer">
                  <img src={x.image} className="h-book resource-img" alt="logo" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>

    <FadeInSection>
      <section id="other-books">
        <div className="container pt-16 pb-24 mx-auto">
          <LabelText className="mb-12">Other Reading</LabelText>
          <div className="flex flex-wrap items-center justify-center">
            {otherReading.map(x => (
              <div key={x.link} className="px-5 py-2 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4">
                <a href={x.link} target="_blank" rel="noreferrer">
                  <img src={x.image} className="h-book resource-img" alt="logo" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>

    <FadeInSection>
      <section id="podcasts" className="pt-16 pb-24 bg-gray-200">
        <div className="container mx-auto">
          <LabelText className="mb-12">Podcasts</LabelText>
          <div className="flex flex-wrap items-center justify-center">
            {podcasts.map(x => (
              <div key={x.link} className="px-5 py-2 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4">
                <a href={x.link} target="_blank" rel="noreferrer">
                  <img src={x.image} className="h-64 resource-img" alt="logo" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>

    <FadeInSection>
      <section id="sample-cases" className="pt-16 pb-24">
        <div className="container mx-auto">
          <LabelText className="mb-12">Sample Cases</LabelText>
          <div className="flex flex-wrap justify-center">
            {practiceCases.map(x => (
              <div key={x.name} className="px-5 w-1/2 md:w-1/3 xl:w-1/3 mb-4">
                <a href={x.link} target="_blank" rel="noreferrer">
                  {x.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>

    <FadeInSection>
      <section id="upenn-resources" className="pt-16 pb-24 bg-gray-200">
        <div className="container mx-auto">
          <LabelText className="mb-12">UPenn Resources</LabelText>
          <div className="flex flex-wrap justify-center">
            {upennResources.map(x => (
              <div key={x.name} className="px-5 w-1/2 md:w-1/3 xl:w-1/3 mb-4">
                <a href={x.link} target="_blank" rel="noreferrer">
                  {x.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>

    <FadeInSection>
      <section id="other-resources" className="pt-16 pb-24">
        <div className="container mx-auto">
          <LabelText className="mb-12">Other Resources</LabelText>
          <div className="flex flex-wrap justify-center">
            {otherResources.map(x => (
              <div key={x.name} className="px-5 w-1/2 md:w-1/3 xl:w-1/3 mb-4">
                <a href={x.link} target="_blank" rel="noreferrer">
                  {x.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>

    <FadeInSection>
      <MailList />
    </FadeInSection>
  </Layout>
);
