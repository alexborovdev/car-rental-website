import { facts } from '@/widgets/facts-in-numbers'
import FactsItem from '@/widgets/facts-in-numbers/ui/Facts/FactsItem'
import styles from './Facts.module.scss'

const Facts = () => {
  return (
    <dl className={styles.list}>
      {facts.map(({ icon, value, label }) => {
        return (
          <FactsItem
            key={label}
            icon={icon}
            value={value}
            label={label}
          />
        )
      })}
    </dl>
  )
}

export default Facts