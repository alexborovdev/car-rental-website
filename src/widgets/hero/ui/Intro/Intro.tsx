import Button from '@/shared/ui/Button'
import styles from './Intro.module.scss'

const Intro = () => {
  return (
    <div className={styles.intro}>
      <h1
        id="hero-title"
        className={styles.title}
      >
        Experience the road like never before</h1>
      <p className={styles.description}>
        Choose from a wide range of modern vehicles for every journey.
        Flexible rental terms, transparent pricing, and comfort you can rely on
      </p>
      <Button
        label="Go to Vehicles page"
        to="/vehicles"
      >
        View all cars
      </Button>
    </div>
  )
}

export default Intro