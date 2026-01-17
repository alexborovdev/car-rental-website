export type NavItem = {
  label: string
  href: string
  description: string
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '/', description: 'Go to Home page' },
  { label: 'Vehicles', href: '/vehicles', description: 'Go to Vehicles page' },
  { label: 'Details', href: '/details', description: 'Go to Details page' },
  { label: 'About Us', href: '/about', description: 'Go to About Us page' },
  { label: 'Contact Us', href: '/contacts', description: 'Go to Contact Us page' },
]