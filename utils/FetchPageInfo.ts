import { PageInfo } from '../typings';

export const fetchPageInfo = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
    );

    const data = await res.json();
    const pageInfo: PageInfo = data;

    return pageInfo;
  } catch (err) {
    console.log(err);
  }
};
