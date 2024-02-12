import { StaticImageData } from 'next/image';

export interface IContent {
  id: number;
  image: StaticImageData;
  title: string;
  subTitle?: string;
  content: string;
}

export interface IService {
  title: string;
  subTitle: string;
  content: IContent[];
}
