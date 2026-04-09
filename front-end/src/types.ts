export type Screen = 'home' | 'chat' | 'finding-driver';

export interface Vehicle {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  type: 'taxi' | 'luxury' | 'bike';
}

export interface TripData {
  pickup: string;
  destination: string;
  selectedVehicle?: Vehicle;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  type?: 'text' | 'vehicle-selection' | 'trip-summary';
  data?: any;
  disabled?: boolean;
}
