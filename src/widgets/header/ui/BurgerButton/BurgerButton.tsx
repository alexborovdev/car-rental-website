import styles from './BurgerButton.module.scss'

type Props = {
  isOpen: boolean
  onClick: () => void
}

const BurgerButton = (props: Props) => {
  const {
    isOpen,
    onClick
  } = props

  return (
    <button
      type="button"
      className={styles.burger}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      title={isOpen ? 'Close menu' : 'Open menu'}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      onClick={onClick}
    >
      <span />
      <span />
      <span />
    </button>
  )
}

export default BurgerButton