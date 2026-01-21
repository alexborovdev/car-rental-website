import { useHelpContactOutsideClick } from '@/widgets/header'
import ToggleButton from '@/widgets/header/ui/HelpContact/ToggleButton'
import ContactPanel from '@/widgets/header/ui/HelpContact/ContactPanel'
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