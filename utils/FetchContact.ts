import { ContactType } from '../typings';

export const fetchContact = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getContact`
    );

    const data = await res.json();
    const contact: ContactType = data.contact;
    return contact;
  } catch (err) {
    console.log(err);
  }
};
