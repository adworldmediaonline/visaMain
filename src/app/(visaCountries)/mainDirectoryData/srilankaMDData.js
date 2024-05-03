import { SrilankaHomePage } from '../mainDirectoryHomePages';
import { sriLankanVisaRequirementsForCanadianCitizens } from '../mainDirectoryHomePagesBlog/images/blogImages';
import { SriLankanVisaRequirementsForCanadianCitizens } from '../mainDirectoryHomePagesBlog/srilanka';
import { srilankaMDHomePageFaq } from '../mainDirectoryHomePagesFaq/srilankaMDHomePageFaq';

// MD => mainDirectory
const srilankaMDBlogBase = '/lk/blog';
export const srilankaMDData = {
  breadcrumb: 'LK',
  code: 'lk',
  pageTitle:
    'Srilanka Visa Entry requirements and travel information for Srilanka',
  pageDescription: null,
  pageContent: <SrilankaHomePage />,
  applyNow: '/lk/slvisa/tourist-eta/apply-individual',
  faq: srilankaMDHomePageFaq,
  blogs: [
    {
      metadata: {
        title: `Sri Lanka Visa Requirements for Canadian Citizens`,
        description: ``,
        metadataBase: new URL('https://visacollect.com'),

        alternates: {
          canonical: `${srilankaMDBlogBase}/sri-lankan-visa-requirements-for-canadian-citizens`,
        },

        openGraph: {
          url: `${srilankaMDBlogBase}/sri-lankan-visa-requirements-for-canadian-citizens`,
        },
      },
      slug: 'sri-lankan-visa-requirements-for-canadian-citizens',
      pageTitle: '',
      content: <SriLankanVisaRequirementsForCanadianCitizens />,
      img: sriLankanVisaRequirementsForCanadianCitizens,
      alt: '',
      imgUrl:
        '/assets/images/srilanka/blog/sri-lankan-visa-requirements-for-canadian-citizens.webp',
      linkText: 'Read more',
      href: `${srilankaMDBlogBase}/sri-lankan-visa-requirements-for-canadian-citizens`,
    },
  ],
};
