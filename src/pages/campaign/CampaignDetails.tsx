import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { Background } from '../../background/Background';
import { Section } from '../../layout/Section';
import { NavbarTwoColumns } from '../../navigation/NavbarTwoColumns';
import { Logo } from '../../templates/Logo';

const CampaignDetails = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  // useEffect(() => {
  //   getAllCampaigns().then((response) => {
  //     console.log('getAllCampaigns:', response.data);
  //   });
  //   getSingleCampaign(1).then((response) => {
  //     console.log('GetsingleCmapaign:', response.data);
  //   });
  //   postCampaign().then((response) => {
  //     console.log('PostCmapaign:', response.data);
  //   });
  // }, []);

  return (
    <Background color="bg-white-100">
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-center align-"
        >
          <div>
            <div>
              <h2>What&#39;s The Campaign Title</h2>
              <input
                {...register('title', { required: true })}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </div>
            <br />
            <div>
              <h2>Campaign Description</h2>
              <textarea
                {...register('description')}
                name="description"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                rows={5}
                cols={30}
              ></textarea>
            </div>
            <br />
            <div>
              <h2>What&#39;s The Goal Amount?</h2>
              <input
                {...register('amount')}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </div>
            <br />
            <div>
              <h2 {...register('organisation')} className="py-2">
                Who Are You Raising Funds For?
              </h2>
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
                {...register('image')}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                type="file"
                id="image"
                alt="Upload imgage"
                src="url"
              />
            </div>
            <br />
            <div>
              <h2>Add Tagline</h2>
              <input
                {...register('tagline')}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </div>
            <br />
            <div>
              <label>Select Category</label>
              <br />
              <select {...register('reason')} name="reason" className="px-5">
                <option value="Droughts">Droughts</option>
                <option value="Famine">Famine</option>
                <option value="Sadaqah">Sadaqah</option>
              </select>
            </div>
            <br />
            <div>
              <h2>Add Location</h2>
              <input
                {...register('location')}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
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
              <input
                {...register('endDate')}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </div>
            <br />
            <input
              type="submit"
              value={'submit'}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </div>
        </form>
      </Section>
    </Background>
  );
};

export default CampaignDetails;
