'use client';
import { roboto } from '@/constant/fonts';
import { parseLink } from '@/lib/parseLink';
export default function SectionParagraph({ text, href, linkText, isEmail }) {
  return (
    <p className={`pt-4 text-left ${roboto.className}`}>
      {isEmail
        ? parseLink(text, linkText, href, 'email-link')
        : parseLink(text, linkText, href, 'link')}
    </p>
  );
}
