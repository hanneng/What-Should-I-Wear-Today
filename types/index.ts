export interface Outfit {
  top: string;
  bottom: string;
  shoes: string;
  accessories: string[];
  explanation: string;
}

export interface WaitlistEntry {
  email: string;
  timestamp: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type Weather = 'Sunny' | 'Rain' | 'Cloudy' | 'Hot' | 'Cold';

export type Occasion =
  | 'Office'
  | 'Date'
  | 'Wedding'
  | 'Business Meeting'
  | 'Casual'
  | 'Travel';

export type Style =
  | 'Minimal'
  | 'Classic'
  | 'Smart Casual'
  | 'Streetwear'
  | 'Business';

export type Gender = 'Male' | 'Female' | 'Non-Binary';

export type AgeRange = '18-24' | '25-34' | '35-44' | '45-54' | '55+';
