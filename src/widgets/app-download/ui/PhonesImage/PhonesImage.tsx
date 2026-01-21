import phonesImage from '@/shared/assets/images/phones.webp'
import styles from './PhonesImage.module.scss'

const PhonesImage = () => {
  return (
    <img
      className={styles.image}
      src={phonesImage}
      alt=""
      width="440"
      height="580"
      loading="lazy"
      aria-hidden="true"
    />
  )
}

export default PhonesImage