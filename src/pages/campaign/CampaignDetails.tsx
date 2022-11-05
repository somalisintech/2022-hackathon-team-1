import Link from 'next/link';

import { Background } from '../../background/Background';
import { Button } from '../../button/Button';
import { Section } from '../../layout/Section';
import { NavbarTwoColumns } from '../../navigation/NavbarTwoColumns';
import { Logo } from '../../templates/Logo';
import InputFeild from './Input';

const CampaignDetails = () => {
  return (
    <Background color="bg-yellow-100">
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
        <div className="flex justify-center py-5">
          <h1 className="text-primary-400 text-xl">
            Please Enter Your Campaign Details{' '}
          </h1>
        </div>
        <form className="flex justify-center align-">
          <div>
            <div>
              <h2>What&#39;s The Campaign Title</h2>
              <InputFeild />
            </div>
            <br />
            <div>
              <h2>Campaign Description</h2>
              <textarea name="message" rows={5} cols={30}></textarea>
            </div>
            <br />
            <div>
              <h2>What&#39;s The Goal Amount?</h2>
              <InputFeild />
            </div>
            <br />
            <div>
              <h2 className="py-2">Who Are You Raising Funds For?</h2>
              <input type="checkbox" className="border-solid" />
              <label>Myself/Someone else</label>
              <br />
              <input type="checkbox" className="border-solid" />
              <label>My organisation</label>
            </div>
            <br />
            <div>
              <h2>Feature Image</h2>
              <input
                type="image"
                id="image"
                alt="Upload img"
                src="/media/examples/login-button.png"
              />
            </div>
            <br />
            <div>
              <h2>Add Tagline</h2>
              <InputFeild />
            </div>
            <br />
            <div>
              <label>Select Category</label>
              <br />
              <select name="reason" className="px-5">
                <option value="reason1">Droughts</option>
                <option value="reason2">Famine</option>
                <option value="reason3">Sadaqah</option>
              </select>
            </div>
            <br />
            <div>
              <h2>Add Location</h2>
              <InputFeild />
            </div>
            <br />
            <div>
              <h2 className="py-2">Funding Type</h2>
              <input type="checkbox" className="border-solid" />
              <label>Type A </label>
              <br />
              <input type="checkbox" className="border-solid" />
              <label>Type B </label>
            </div>
            <br />
            <div>
              <h2>End Date</h2>
              <InputFeild />
            </div>
            <br />
            <Button>Submit</Button>
          </div>
        </form>
      </Section>
    </Background>
  );
};

export default CampaignDetails;
