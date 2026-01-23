import { MEDIA_QUERIES, useMediaQuery } from '@/shared/lib/hooks/useMediaQuery'
import Logo from '@/shared/ui/Logo'
import FacebookIcon from '@/shared/assets/icons/socials/facebook.svg?react'
import InstagramIcon from '@/shared/assets/icons/socials/instagram.svg?react'
import XIcon from '@/shared/assets/icons/socials/x.svg?react'
import YoutubeIcon from '@/shared/assets/icons/socials/youtube.svg?react'
import AddressIcon from '@/shared/assets/icons/contacts/address.svg?react'
import EmailIcon from '@/shared/assets/icons/contacts/email.svg?react'
import PhoneIcon from '@/shared/assets/icons/contacts/phone.svg?react'
import DownloadsLinks from '@/shared/ui/DownloadsLinks'
import styles from './Footer.module.scss'

const Footer = () => {
  const isTablet = useMediaQuery(MEDIA_QUERIES.tablet)

  return (
    <footer className={`container-big ${styles.footer}`}>
      <div className={styles.topWrapper}>
        {isTablet && <Logo isTablet={isTablet} />}
        <address className={styles.contacts}>
          <ul className={styles.contactsList}>
            <li className={styles.contactsItem}>
              <AddressIcon />
              <div className={styles.contactsItemInner}>
                <span>Address</span>
                Oxford Ave, Cary, NC 27511
              </div>
            </li>
            <li className={styles.contactsItem}>
              <EmailIcon />
              <div className={styles.contactsItemInner}>
                <span>Email</span>
                <a href="mailto:example@yahoo.com">example@yahoo.com</a>
              </div>
            </li>
            <li className={styles.contactsItem}>
              <PhoneIcon />
              <div className={styles.contactsItemInner}>
                <span>Phone</span>
                <a href="tel:+9999999999">+ (999) 999-9999</a>
              </div>
            </li>
          </ul>
        </address>
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.inner}>
          <p className={styles.description}>
            Rent the perfect car for any occasion - from city rides to long road trips.
            Transparent pricing, well-maintained vehicles, and support you can trust.
          </p>
          <ul className={styles.socials}>
            <li>
              <a
                href="https://www.facebook.com/"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/"
                aria-label="X"
              >
                <XIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
            </li>
          </ul>
        </div>
        <nav className={styles.navigation}>
          <h3>Useful links</h3>
          <ul className={styles.navigationList}>
            <li><a href="/vehicles">All vehicles</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/contact">Contact us</a></li>
          </ul>
        </nav>
        <nav className={styles.navigation}>
          <h3>Vehicles</h3>
          <ul className={styles.navigationList}>
            <li><a href="/">Sedan</a></li>
            <li><a href="/">Sport</a></li>
            <li><a href="/">SUV</a></li>
            <li><a href="/">Van</a></li>
          </ul>
        </nav>
        <div className={`${styles.navigation} ${styles.download}`}>
          <h3>Download App</h3>
          <DownloadsLinks
            isColumn={true}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer