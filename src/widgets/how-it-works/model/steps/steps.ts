import type { ComponentType, SVGProps } from 'react'
import OneIcon from '@/shared/assets/icons/steps/1.svg?react'
import TwoIcon from '@/shared/assets/icons/steps/2.svg?react'
import ThreeIcon from '@/shared/assets/icons/steps/3.svg?react'
import FourIcon from '@/shared/assets/icons/steps/4.svg?react'

type Step = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  description: string
}

export type Steps = Step[]

export const steps: Steps = [
  {
    icon: OneIcon,
    title: 'Choose your car',
    description: 'Browse our wide range of vehicles and select the one that fits your needs.'
  },
  {
    icon: TwoIcon,
    title: 'Pick dates and location',
    description: 'Select rental and return locations with flexible dates.'
  },
  {
    icon: ThreeIcon,
    title: 'Book online',
    description: 'Complete your booking in just a few clicks.'
  },
  {
    icon: FourIcon,
    title: 'Enjoy your ride',
    description: 'Pick up your car and enjoy the journey.'
  },
]