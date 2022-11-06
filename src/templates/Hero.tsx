import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-white-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/campaign">
            <a className="text-white">Campaign</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="text-white">Contribute</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pb-20">
      <HeroOneButton
        title={
          <div>
            <h1 className="text-left text-7xl leading-tight font-extrabold">
              {'Every act of goodness is a charity\n'}
            </h1>
            <h1 className="text-left py-5 leading-10 text-2xl">
              Helping to make fundraising easy for Somalis across the world.
            </h1>
            <div className="flex flex-col items-start gap-4">
              {
                <Link href="/campaign">
                  <a>
                    <button className=" px-4 bg-orange-500 text-white text-base font-semibold rounded-lg shadow-md hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                      Start a campaign now
                    </button>
                  </a>
                </Link>
              }
              {
                <Link href="/">
                  <a>
                    <button className=" px-4 bg-white-500 text-orange-500 border-2 border-orange-500 text-base font-semibold rounded-lg shadow-md hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                      Browse campaigns
                    </button>
                  </a>
                </Link>
              }
            </div>
          </div>
        }
      />
    </Section>
  </Background>
);

export { Hero };
