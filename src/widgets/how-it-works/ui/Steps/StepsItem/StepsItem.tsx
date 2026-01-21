import type { Step } from '@/widgets/how-it-works'
import styles from './StepsItem.module.scss'

const StepsItem = (props: Step) => {
  const {
    icon: Icon,
    title,
    description
  } = props

  return (
    <li>
      <div className={styles.wrapper}>
        <Icon aria-hidden="true" />
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
    </li>
  )
}

export default StepsItem