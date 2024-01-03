
import ProcessingStep from '@/components/australia/home/ProcessingStep';
import { Banner } from '@/components/commonWebsiteComponents/Banner';
import Faq from '@/components/commonWebsiteComponents/Faq';
import { FromTo } from '@/components/commonWebsiteComponents/FromTo';
import LearnMore from '@/components/commonWebsiteComponents/LearnMore';
import React from 'react';

const Page = () => {
  return (
    <div>
      <Banner />
      <FromTo />
      <ProcessingStep />
      <LearnMore />
      <Faq />
    </div>
  );
};

export default Page;
