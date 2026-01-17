import { Link } from 'react-router-dom'
import { MEDIA_QUERIES, useMediaQuery } from '@/shared/lib/hooks/useMediaQuery'
import LogoIcon from '@/shared/assets/icons/logo.svg?react'
import LogoIconPartial from '@/shared/assets/icons/logo-partial.svg?react'
import styles from './Logo.module.scss'

const Logo = () => {
  const isTablet = useMediaQuery(MEDIA_QUERIES.tablet)

  return (
    <Link
      to="/"
      className={styles.logo}
      title="Go to Home page"
      aria-label="Go to Home page"
    >
      {isTablet ? <LogoIcon aria-hidden="true" /> : <LogoIconPartial aria-hidden="true" />}
    </Link>
  )
}

export default Logo