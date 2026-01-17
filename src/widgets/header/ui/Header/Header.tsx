import Logo from '@/widgets/header/ui/Logo'
import Navigation from '@/widgets/header/ui/Navigation'
import HelpContact from '@/shared/ui/HelpContact'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={`container-big ${styles.header}`}>
      <Logo />
      <Navigation />
      <HelpContact />
    </header>
  )
}

export default Header