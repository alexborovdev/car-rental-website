import WomanImg from '@/shared/assets/images/how-it-works-woman.webp'
import styles from './WomanImage.module.scss'

const WomanImage = () => {
  return (
    <figure className={styles.media}>
      <img
        className={styles.image}
        src={WomanImg}
        alt="Customer receiving car keys after booking"
        width="550"
        height="550"
        loading="lazy" />
    </figure>
  )
}

export default WomanImage