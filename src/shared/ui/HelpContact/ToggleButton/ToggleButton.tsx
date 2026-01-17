import PhoneIcon from '@/shared/icons/phone.svg?react'
import styles from './ToggleButton.module.scss'

type Props = {
  isOpen: boolean
  onClick: () => void
}

const ToggleButton = (props: Props) => {
  const {
    isOpen,
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
    >
      <PhoneIcon aria-hidden="true" />
    </button>
  )
}

export default ToggleButton