import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB_H3cVrzvqNxPyRBYBgK5JDwpeSK_u7hw',
  authDomain: 'lead-capture-605bc.firebaseapp.com',
  projectId: 'lead-capture-605bc',
  storageBucket: 'lead-capture-605bc.firebasestorage.app',
  messagingSenderId: '570274412418',
  appId: '1:570274412418:web:141b27fc45d474d5eb419b',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export interface LeadInput {
  name: string;
  phone: string;
  services: string[];
}

export function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.startsWith('62')) return digits;
  if (digits.startsWith('0')) return '62' + digits.slice(1);
  if (digits.startsWith('8')) return '62' + digits;
  return digits;
}

export async function saveLead({ name, phone, services }: LeadInput) {
  await addDoc(collection(db, 'leads'), {
    name: name.trim(),
    phone: normalizePhone(phone),
    services,
    source: 'portfolio-modal',
    createdAt: serverTimestamp(),
  });
}
