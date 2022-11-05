import axios from 'axios';

interface Campaign {
  id?: number;
  titel: string;
  amount: number;
  description: string;
  location: string;
  status: string;
  image: string;
  startDate: Date;
  endDate: Date;
  category: string;
  purpose: string;
}

const campaignItem: Campaign = {
  amount: 200000,
  category: 'Donation',
  description: 'New campaign',
  titel: 'Mosque Donation',
  endDate: new Date('2022-12-31'),
  location: 'Somalia',
  image: 'url',
  purpose: 'Helping',
  startDate: new Date('2022-11-05'),
  status: 'OnGoing',
};
// GetAllCampigns
export const getAllCampaigns = () =>
  axios.get<Campaign[]>('https://localhost:7141/Campaign/');

export const getSingleCampaign = (id: number) =>
  axios.get<Campaign>(`https://localhost:7141/Campaign/${id}`);

export const postCampaign = () =>
  axios.post<Campaign>('https://localhost:7141/Campaign/', campaignItem);

// enum Category {
//   Donation,
//   Fundraising,
// }
