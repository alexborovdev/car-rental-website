import type { Car, City } from '@/features/booking'

export type CarTypes = Car[]

export const CAR_TYPES: CarTypes = [
  { id: 'sedan', label: 'Sedan' },
  { id: 'sport', label: 'Sport' },
  { id: 'suv', label: 'SUV' },
  { id: 'van', label: 'Van' },
]

export type CitiesTypes = City[]

export const CITIES: CitiesTypes = [
  { id: 'new-york', label: 'New York' },
  { id: 'los-angeles', label: 'Los Angeles' },
  { id: 'chicago', label: 'Chicago' },
  { id: 'san-francisco', label: 'San Francisco' },
]