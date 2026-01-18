import { MEDIA_QUERIES, useMediaQuery } from '@/shared/lib/hooks/useMediaQuery'
import Logo from '@/widgets/header/ui/Logo'
import Navigation from '@/widgets/header/ui/Navigation'
import HelpContact from '@/shared/ui/HelpContact'
import styles from './Header.module.scss'

const Header = () => {
  const isTablet = useMediaQuery(MEDIA_QUERIES.tablet)

  return (
    <header className={`container-big ${styles.header}`}>
      <Logo isTablet={isTablet} />
      <Navigation />
      <HelpContact isTablet={isTablet} />
    </header>
  )
}

export default Header