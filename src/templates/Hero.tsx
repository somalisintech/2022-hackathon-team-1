import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/campaign">
            <a>campaign</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Contribute</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Serve Humanity \n'}
            <span className="text-primary-400 text-xl">
              make a difference to people&#39;s lives
            </span>
          </>
        }
        description="The easiest way to build a a better community in seconds."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>Discover ongoing campaigns</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
