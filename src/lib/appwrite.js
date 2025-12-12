import {Account, Client , Databases , ID } from 'appwrite';

const c = new Client();
c.setEndpoint('https://sgp.cloud.appwrite.io/v1').setProject('6934033e0034f10ffc4a');
const db = new Databases(c);
const acc = new Account(c);

export { acc ,db, ID }