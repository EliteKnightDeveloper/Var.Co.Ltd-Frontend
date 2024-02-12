import { StaticImageData } from 'next/image';

export interface IService {
  id: number;
  image: StaticImageData;
  title1: string;
  title2?: string;
  content: string;
}
