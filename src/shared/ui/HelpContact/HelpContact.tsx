import { useHelpContactOutsideClick } from '@/shared/ui/HelpContact'
import { MEDIA_QUERIES, useMediaQuery } from '@/shared/lib/hooks/useMediaQuery'
import ToggleButton from '@/shared/ui/HelpContact/ToggleButton'
import ContactPanel from '@/shared/ui/HelpContact/ContactPanel'
import styles from './HelpContact.module.scss'

const HelpContact = () => {
  const {
    ref,
    isOpen,
    toggle,
  } = useHelpContactOutsideClick()

  const isTablet = useMediaQuery(MEDIA_QUERIES.tablet)

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