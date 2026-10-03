import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
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
  try {
    await addDoc(collection(db, 'leads'), {
      name: name.trim(),
      phone: normalizePhone(phone),
      services,
      source: 'portfolio-modal',
      createdAt: serverTimestamp(),
    });

    console.log('LEAD BERHASIL DISIMPAN');
  } catch (error) {
    console.error('FIREBASE ERROR:', error);
    alert('Gagal menyimpan lead: ' + String(error));
    throw error;
  }
}
