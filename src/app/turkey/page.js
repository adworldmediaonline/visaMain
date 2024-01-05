import { Banner } from '@/components/commonWebsiteComponents/Banner'
import Faq from '@/components/commonWebsiteComponents/Faq'
import LearnMore from '@/components/commonWebsiteComponents/LearnMore'
import ProcessingStep from '@/components/commonWebsiteComponents/ProcessingStep'
import { faqData1, learnMoreSectionData, processingData1 } from '@/constant/data'
import React from 'react'
function Page() {
  return (
    <div>

      <Banner
        name="Turkey"
        type="visatype"
        validity=" Valid for 1 year"
        entries="Single Entries"
        price="$126.67"
        link="/turkey/application"
      />
      <ProcessingStep processingData={processingData1} />
      <LearnMore learnMoreSectionData={learnMoreSectionData} />

      <Faq faqData={faqData1} />

    </div>
  )
}

export default Page