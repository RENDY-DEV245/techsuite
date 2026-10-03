import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

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
