import type { ComponentType, SVGProps } from 'react'
import IconOne from '@/shared/assets/icons/facts/1.svg?react'
import IconTwo from '@/shared/assets/icons/facts/2.svg?react'
import IconThree from '@/shared/assets/icons/facts/3.svg?react'
import IconFour from '@/shared/assets/icons/facts/4.svg?react'

export type Fact = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  value: string
  label: string
}

export const facts: Fact[] = [
  {
    icon: IconOne,
    value: '500+',
    label: 'Cars'
  },
  {
    icon: IconTwo,
    value: '20k+',
    label: 'Customers'
  },
  {
    icon: IconThree,
    value: '25+',
    label: 'Years'
  },
  {
    icon: IconFour,
    value: '20m+',
    label: 'Miles'
  }
]