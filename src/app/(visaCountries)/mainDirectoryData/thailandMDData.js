import { ThailandHomePage } from '../mainDirectoryHomePages';
import {
  CompleteThailandVisaGuideForUkCitizens,
  HowToApplyForThailandVisaFromUk,
  OneYearMultiEntryNonImmigrantVisaUkToThailand,
  TravelToThailandFromUk,
} from '../mainDirectoryHomePagesBlog/Thailand';
import {
  completeThailandVisaGuideForUkCitizensImg,
  howToApplyForThailandVisaFromUkImg,
  oneYearMultiEntryNonImmigrantVisaUkToThailandImg,
  travelToThailandFromUkImg,
} from '../mainDirectoryHomePagesBlog/images/blogImages';
import { thailandMDHomePageFaq } from '../mainDirectoryHomePagesFaq/thailandMDHomePageFaq';

// MD => mainDirectory
const thailandMDBlogBase = '/th/blog';
export const thailandMDData = {
  breadcrumb: 'TH',
  code: 'th',
  pageTitle:
    'Thailand Visa Entry requirements and travel information for Thailand',
  pageDescription: null,
  pageContent: <ThailandHomePage />,
  applyNow: '/th/application',
  faq: thailandMDHomePageFaq,
  blogs: [
    {
      metadata: {
        title: `1 Year Multi Entry Non Immigrant Visa`,
        description: `Explore the benefits and requirements of a 1-year multi-entry non-immigrant visa, offering flexibility and convenience for frequent travelers .`,
        metadataBase: new URL('https://visacollect.com'),

        alternates: {
          canonical: `${thailandMDBlogBase}/1-year-multi-entry-non-immigrant-visa`,
        },

        openGraph: {
          url: `${thailandMDBlogBase}/1-year-multi-entry-non-immigrant-visa`,
        },
      },
      pageTitle: 'Thai 1-Year Non-Immigrant Visa for UK Citizens',
      imgUrl:
        '/assets/images/blog/thailandVisa/1-year-multi-entry-non-immigrant-visa.webp.webp',
      slug: '1-year-multi-entry-non-immigrant-visa',
      content: <OneYearMultiEntryNonImmigrantVisaUkToThailand />,
      img: oneYearMultiEntryNonImmigrantVisaUkToThailandImg,
      linkText: 'Read more',
      href: `${thailandMDBlogBase}/1-year-multi-entry-non-immigrant-visa`,
    },
    {
      metadata: {
        title: `Complete Thailand Visa Guide For UK Citizens`,
        description: `Find everything UK citizens need to know about obtaining a visa for Thailand with our comprehensive guide. From application processes to requirements .`,
        metadataBase: new URL('https://visacollect.com'),

        alternates: {
          canonical: `${thailandMDBlogBase}/complete-thailand-visa-guide-for-uk-citizens`,
        },

        openGraph: {
          url: `${thailandMDBlogBase}/complete-thailand-visa-guide-for-uk-citizens`,
        },
      },
      pageTitle: 'Complete Quick Thailand Visa Guide for UK Citizens',
      imgUrl:
        '/assets/images/blog/thailandVisa/complete-thailand-visa-guide-for-uk-citizens.webp',
      slug: 'complete-thailand-visa-guide-for-uk-citizens',
      content: <CompleteThailandVisaGuideForUkCitizens />,
      img: completeThailandVisaGuideForUkCitizensImg,
      linkText: 'Read more',
      href: `${thailandMDBlogBase}/complete-thailand-visa-guide-for-uk-citizens`,
    },
    {
      metadata: {
        title: `How To Apply For Thailand Visa From UK`,
        description: `Learn how to apply for a Thailand visa from the UK ! Discover step-by-step instructions, requirements, and essential tips to make your application process smooth and successful.`,
        metadataBase: new URL('https://visacollect.com'),

        alternates: {
          canonical: `${thailandMDBlogBase}/how-to-apply-for-thailand-visa-from-uk`,
        },

        openGraph: {
          url: `${thailandMDBlogBase}/how-to-apply-for-thailand-visa-from-uk`,
        },
      },
      pageTitle: `How to Apply for Thailand's E-Visa Stickerless`,
      imgUrl:
        '/assets/images/blog/thailandVisa/how-to-apply-for-thailand-visa-from-uk.webp',
      slug: 'how-to-apply-for-thailand-visa-from-uk',
      content: <HowToApplyForThailandVisaFromUk />,
      img: howToApplyForThailandVisaFromUkImg,
      linkText: 'Read more',
      href: `${thailandMDBlogBase}/how-to-apply-for-thailand-visa-from-uk`,
    },
    {
      metadata: {
        title: `Travel To Thailand From UK`,
        description: `Embark on an exotic adventure from the UK to Thailand! Uncover every visa details, top attractions, and insider tips for an unforgettable Thai experience`,
        metadataBase: new URL('https://visacollect.com'),

        alternates: {
          canonical: `${thailandMDBlogBase}/travel-to-thailand-from-uk`,
        },

        openGraph: {
          url: `${thailandMDBlogBase}/travel-to-thailand-from-uk`,
        },
      },
      pageTitle: `Travel to Thailand from the UK with VisaCollect's Easy Steps`,
      imgUrl:
        '/assets/images/blog/thailandVisa/travel-to-thailand-from-uk.webp',
      slug: 'travel-to-thailand-from-uk',
      content: <TravelToThailandFromUk />,
      img: travelToThailandFromUkImg,
      linkText: 'Read more',
      href: `${thailandMDBlogBase}/travel-to-thailand-from-uk`,
    },
  ],
};
