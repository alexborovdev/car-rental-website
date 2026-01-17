import PhoneIcon from '@/shared/assets/icons/phone.svg?react'
import styles from './ToggleButton.module.scss'

type Props = {
  isOpen: boolean
  isTablet: boolean
  onClick: () => void
}

const ToggleButton = (props: Props) => {
  const {
    isOpen,
    isTablet,
    onClick
  } = props

  return (
    <button
      type="button"
      className={styles.toggle}
      aria-expanded={isOpen}
      aria-label={isOpen ? 'Close contact panel' : 'Open contact panel'}
      aria-controls="help-contact-panel"
      onClick={onClick}
      tabIndex={!isTablet ? 0 : -1}
    >
      <PhoneIcon aria-hidden="true" />
    </button>
  )
}

export default ToggleButton