import { MEDIA_QUERIES, useMediaQuery } from '@/shared/lib/hooks/useMediaQuery'
import Logo from '@/shared/ui/Logo'
import FacebookIcon from '@/shared/assets/icons/socials/facebook.svg?react'
import InstagramIcon from '@/shared/assets/icons/socials/instagram.svg?react'
import XIcon from '@/shared/assets/icons/socials/x.svg?react'
import YoutubeIcon from '@/shared/assets/icons/socials/youtube.svg?react'
import DownloadsLinks from '@/shared/ui/DownloadsLinks'
import styles from './Footer.module.scss'

const Footer = () => {
  const isTablet = useMediaQuery(MEDIA_QUERIES.tablet)

  return (
    <footer className={`container-big ${styles.footer}`}>
      <div>
        <Logo isTablet={isTablet} />
        <address className={styles.contacts}>
          <ul>
            <li>
              <div>Address</div>
              Oxford Ave, Cary, NC 27511
            </li>
            <li>
              <div>Email</div>
              <a href="mailto:example@yahoo.com">example@yahoo.com</a>
            </li>
            <li>
              <div>Phone</div>
              <a href="tel:+9999999999">+ (999) 999-9999</a>
            </li>
          </ul>
        </address>
      </div>
      <div>
        <p>
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
        <nav>
          <h3>Useful links</h3>
          <ul>
            <li><a href="/vehicles">All vehicles</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/contact">Contact us</a></li>
          </ul>
        </nav>
        <nav>
          <h3>Vehicles</h3>
          <ul>
            <li><a href="/">Sedan</a></li>
            <li><a href="/">Sport</a></li>
            <li><a href="/">SUV</a></li>
            <li><a href="/">Van</a></li>
          </ul>
        </nav>
        <div>
          <h3>Download App</h3>
          <DownloadsLinks />
        </div>
      </div>
    </footer>
  )
}

export default Footer