import { type NavItem } from '@/widgets/header'
import NavigationItem from '@/widgets/header/ui/Navigation/NavigationItem'
import styles from './ModalWindow.module.scss'

type Props = {
  onClick: () => void
  navigation: NavItem[]
}

const ModalWindow = (props: Props) => {
  const {
    onClick,
    navigation
  } = props

  return (
    <div
      id="mobile-navigation"
      className={styles.modal}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        className={styles.close}
        aria-label="Close menu"
        onClick={onClick}
      >
        ✕
      </button>
      <ul className={styles.modalList}>
        {navigation.map(({ label, href, description }) => (
          <NavigationItem
            key={href}
            href={href}
            label={label}
            description={description}
            onClick={onClick}
          />
        ))}
      </ul>
    </div>
  )
}

export default ModalWindow