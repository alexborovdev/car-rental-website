import carImage from '@/shared/assets/images/car-shadow-1.webp'
import styles from './CarImage.module.scss'

const CarImage = () => {
  return (
    <img
      className={styles.image}
      src={carImage}
      alt=""
      width="800"
      height="480"
      loading="lazy"
      aria-hidden="true"
    />
  )
}

export default CarImage