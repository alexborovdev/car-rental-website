import { benefits } from '@/widgets/benefits'
import BenefitsItem from '@/widgets/benefits/ui/Benefits/BenefitsItem'
import styles from './Benefits.module.scss'

const Benefits = () => {
  return (
    <ul className={styles.list}>
      {benefits.map(({ icon, title, description }) => {
        return (
          <BenefitsItem
            key={title}
            icon={icon}
            title={title}
            description={description}
          />
        )
      })}
    </ul>
  )
}

export default Benefits