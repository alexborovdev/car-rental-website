import { useHelpContactOutsideClick } from '@/shared/ui/HelpContact'
import ToggleButton from '@/shared/ui/HelpContact/ToggleButton'
import ContactPanel from '@/shared/ui/HelpContact/ContactPanel'
import styles from './HelpContact.module.scss'

type Props = {
  isTablet: boolean
}

const HelpContact = (props: Props) => {
  const { isTablet } = props

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
        isTablet={isTablet}
        onClick={toggle}
      />
      <ContactPanel
        isOpen={isOpen}
        isTablet={isTablet}
      />
    </address>
  )
}

export default HelpContact