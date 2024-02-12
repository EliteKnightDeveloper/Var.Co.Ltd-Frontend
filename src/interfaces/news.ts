import { StaticImageData } from 'next/image';

export interface INews {
  image: StaticImageData;
  date: string;
  content: string;
  badgeColor: string;
  badgeContent: string;
}
