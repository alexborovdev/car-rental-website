import { steps } from '@/widgets/how-it-works'
import StepsItem from '@/widgets/how-it-works/ui/Steps/StepsItem'
import styles from './Steps.module.scss'

const Steps = () => {
  return (
    <ol className={styles.list}>
      {steps.map(({ icon, title, description }) => {
        return (
          <StepsItem
            key={title}
            icon={icon}
            title={title}
            description={description}
          />
        )
      })}
    </ol>
  )
}

export default Steps