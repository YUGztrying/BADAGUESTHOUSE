
export interface Feature {
  icon: string;
  label: string;
}

export interface RoomDetails {
  installations: string[];
  options: string[];
  important: string[];
}

export interface Room {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  price: number;
  size: string;
  capacity: string;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  features: Feature[];
  details?: RoomDetails;
}
