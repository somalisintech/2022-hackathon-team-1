import Link from 'next/link';

import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Contribute to your community and uplift your people"
      subtitle="Start your First Donation now."
      button={
        <Link href="/">
          <a>
            <button className="py-1 px-4 bg-orange-500 text-white text-base font-semibold rounded-lg shadow-md hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              Get Started
            </button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
