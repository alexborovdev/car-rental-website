import styles from './ContactPanel.module.scss'

type Props = {
  isOpen: boolean
}

const ContactPanel = (props: Props) => {
  const { isOpen } = props

  return (
    <a
      id="help-contact-panel"
      href="tel:+9999999999"
      className={styles.panel}
      title="Call us for help at +999 999 9999"
      aria-label="Call us for help at +9999999999"
      data-open={isOpen}
      role="dialog"
      tabIndex={isOpen ? 0 : -1}
    >
        <span className={styles.text}>
            <span className={styles.label}>Need help?</span>
            <span className={styles.phone}>+ (999) 999-9999</span>
        </span>
    </a>
  )
}

export default ContactPanel