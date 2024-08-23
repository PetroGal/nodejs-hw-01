import { PATH_DB } from '../constants/contacts.js';
import createFakeContact from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const newContactList = Array(number).fill(0).map(createFakeContact);
  console.log(newContactList);
};

generateContacts(5);
