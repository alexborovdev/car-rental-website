import type { ComponentType, SVGProps } from 'react'
import LocationIcon from '@/shared/assets/icons/benefits/location.svg?react'
import CarIcon from '@/shared/assets/icons/benefits/car.svg?react'
import WalletIcon from '@/shared/assets/icons/benefits/wallet.svg?react'

type Benefit = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  description: string
}

export type Benefits = Benefit[]

export const benefits: Benefits = [
  {
    icon: LocationIcon,
    title: 'Availability',
    description: 'Wide selection of vehicles always ready for booking. Choose the right car for any trip, anytime you need it.'
  },
  {
    icon: CarIcon,
    title: 'Comfort',
    description: 'Clean, modern, and well-maintained cars designed to make every journey smooth and enjoyable.'
  },
  {
    icon: WalletIcon,
    title: 'Savings',
    description: 'Transparent pricing with no hidden fees. Get the best value for your money every time.'
  }
]