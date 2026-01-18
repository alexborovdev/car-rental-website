import Intro from '@/widgets/hero/ui/Intro'
import CarImage from '@/widgets/hero/ui/CarImage'
import BookingCard from '@/features/booking'
import styles from './HeroSection.module.scss'

const HeroSection = () => {
  return (
    <section
      className="container-big"
      aria-labelledby="hero-title"
    >
      <div className={`surface ${styles.wrapper}`}>
        <Intro />
        <CarImage />
        <BookingCard />
      </div>
    </section>
  )
}

export default HeroSection