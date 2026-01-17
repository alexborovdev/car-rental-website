import { useEffect, useState } from 'react'
import { navigation } from '@/widgets/header'
import BurgerButton from '@/widgets/header/ui/BurgerButton'
import NavigationItem from '@/widgets/header/ui/Navigation/NavigationItem'
import ModalWindow from '@/widgets/header/ui/ModalWindow'
import styles from './Navigation.module.scss'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const onBurgerButtonClick = () => setIsOpen(true)
  const onCloseModalButtonClick = () => setIsOpen(false)

  return (
    <nav
      className={styles.navigation}
      aria-label="Main navigation"
    >
      <BurgerButton
        isOpen={isOpen}
        onClick={onBurgerButtonClick}
      />
      <ul className={styles.list}>
        {navigation.map(({ label, href, description }) => (
          <NavigationItem
            key={href}
            href={href}
            label={label}
            description={description}
          />
        ))}
      </ul>
      {isOpen && <ModalWindow
        onClick={onCloseModalButtonClick}
        navigation={navigation}
      />}
    </nav>
  )
}

export default Navigation