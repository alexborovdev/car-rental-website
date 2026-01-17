import type { HTMLInputTypeAttribute } from 'react'
import type { CarTypes, CitiesTypes } from '@/features/booking'
import styles from './Field.module.scss'

type Props = {
  id: string
  label: string
  type?: HTMLInputTypeAttribute
  entities?: CarTypes | CitiesTypes
}

const Field = (props: Props) => {
  const {
    id,
    label,
    type = 'text',
    entities
  } = props

  const isSelect = entities && entities.length > 0

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {isSelect ? (
        <select className={styles.select} id={id} name={id}>
          <option value="" disabled selected>{label}</option>
          {entities.map((entity) => (
            <option key={entity.id} value={entity.id}>
              {entity.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          className={styles.input}
          id={id}
          name={id}
          type={type}
        />
      )}
    </div>
  )
}

export default Field