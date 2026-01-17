type Car = {
  id: string
  label: string
}

export type CarTypes = Car[]

export const CAR_TYPES: CarTypes = [
  { id: 'sedan', label: 'Sedan' },
  { id: 'sport', label: 'Sport' },
  { id: 'suv', label: 'SUV' },
  { id: 'van', label: 'Van' },
]