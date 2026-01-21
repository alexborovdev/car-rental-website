import type { ComponentType, SVGProps } from 'react'
import AppStoreIcon from '@/shared/assets/icons/app-store.svg?react'
import GooglePlayIcon from '@/shared/assets/icons/google-play.svg?react'

export type DownloadLink = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  href: string
  label: string
}

export const downloadLinks: DownloadLink[] = [
  {
    icon: AppStoreIcon,
    href: 'https://apps.apple.com',
    label: 'Download our app from AppStore'
  },
  {
    icon: GooglePlayIcon,
    href: 'https://play.google.com',
    label: 'Download our app from GooglePlay'
  }
]