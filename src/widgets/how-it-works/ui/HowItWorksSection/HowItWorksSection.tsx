import WomanImage from '@/widgets/how-it-works/ui/WomanImage'
import Steps from '@/widgets/how-it-works/ui/Steps'
import styles from './HowItWorksSection.module.scss'

const HowItWorksSection = () => {
  return (
    <section
      className={`container-small ${styles.howItWorks}`}
      aria-labelledby="how-it-works-title"
    >
      <div className={styles.inner}>
        <h2
          id="how-it-works-title"
          className="visually-hidden"
        >
          How it Works
        </h2>
        <WomanImage />
        <Steps />
      </div>
    </section>
  )
}

export default HowItWorksSection