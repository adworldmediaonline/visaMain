import { CambodiaHomePage } from '../mainDirectoryHomePages';
import { khMDHomePageFaq } from '../mainDirectoryHomePagesFaq/khMDHomePageFaq';

// MD => mainDirectory
const khMDBlogBase = '/kh/blog';
export const khMDData = {
  breadcrumb: 'KH',
  code: 'kh',
  pageTitle:
    'Cambodia Visa Entry requirements and travel information for Cambodia',
  pageDescription: null,
  pageContent: <CambodiaHomePage />,
  applyNow: '/kh/application',
  faq: khMDHomePageFaq,
  blogs: [],
};
