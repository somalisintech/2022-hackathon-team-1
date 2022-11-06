import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Recent Projects"
    description="These are some of the campaigns hosted on Olole in the past few months."
  >
    <VerticalFeatureRow
      title="Raising Funds For Families"
      description="The catastrophic drought ravaging Somalia is putting communities on the brink of famine. Refugees and displaced people are on the frontline of this crisis. "
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Build A Masjid"
      description="“Whoever builds a mosque, desiring thereby Allah’s pleasure, Allah builds for him the like of it in paradise.” [Bukhari]"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="School For Girls"
      description="We focus on building schools in Somalia, because education is the key to reducing poverty and inequality.  With schooling and education, children learn to read and become aware of their rights and opportunities, to take care of themselves and create a life based on self-respect, respect for their fellow human beings and surroundings, for the benefit of the individual, Somalia and the rest of the world."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
