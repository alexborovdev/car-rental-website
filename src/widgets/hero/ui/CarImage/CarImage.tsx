import carImage from '@/shared/assets/images/hero-car.webp'
import styles from './CarImage.module.scss'

const CarImage = () => {
  return (
    <img
      className={styles.image}
      src={carImage}
      alt=""
      width="700"
      height="420"
      loading="eager"
      fetchPriority="high"
      aria-hidden="true"
    />
  )
}

export default CarImage