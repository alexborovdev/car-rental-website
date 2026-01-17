import { useHelpContactOutsideClick } from '@/shared/ui/HelpContact'
import ToggleButton from '@/shared/ui/HelpContact/ToggleButton'
import ContactPanel from '@/shared/ui/HelpContact/ContactPanel'
import styles from './HelpContact.module.scss'

const HelpContact = () => {
  const {
    ref,
    isOpen,
    toggle,
  } = useHelpContactOutsideClick()

  return (
    <address
      ref={ref}
      className={styles.helpContact}
    >
      <ToggleButton
        isOpen={isOpen}
        onClick={toggle}
      />
      <ContactPanel isOpen={isOpen} />
    </address>
  )
}

export default HelpContact