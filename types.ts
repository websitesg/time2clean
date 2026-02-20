
// Fix: Import React to provide access to the React namespace for types
import React from 'react';

export interface ServiceCard {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  area: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}
