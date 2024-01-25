import { Banner } from '@/components/commonWebsiteComponents/Banner';
import Faq from '@/components/commonWebsiteComponents/Faq';
import LearnMore from '@/components/commonWebsiteComponents/LearnMore';
import ProcessingStep from '@/components/commonWebsiteComponents/ProcessingStep';
import {
  faqData1,
  learnMoreSectionDataAustralia,
  processingData1,
} from '@/constant/data';
import React from 'react';
function Page() {
  return (
    <div>
      <Banner
        name="Singapore"
        type="visatype"
        validity=" Valid for 1 year"
        entries="Single Entries"
        price="$126.67"
        link="/singapore/step-one"
      />
      <ProcessingStep
        processingData={processingData1}
        link="/thailand/apply-form"
      />
      <LearnMore learnMoreSectionData={learnMoreSectionDataAustralia} />

      <Faq faqData={faqData1} />
    </div>
  );
}

export default Page;
