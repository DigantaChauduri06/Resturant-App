import { collection } from 'firebase/firestore';
import { db } from './firebase-config';

const burgers = collection(db, 'burgers');
export {
    burgers,
}