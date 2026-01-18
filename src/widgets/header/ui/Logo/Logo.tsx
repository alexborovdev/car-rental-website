import { Link } from 'react-router-dom'
import LogoIcon from '@/shared/assets/icons/logo.svg?react'
import LogoIconPartial from '@/shared/assets/icons/logo-partial.svg?react'
import styles from './Logo.module.scss'

type Props = {
  isTablet: boolean
}

const Logo = (props: Props) => {
  const { isTablet } = props

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