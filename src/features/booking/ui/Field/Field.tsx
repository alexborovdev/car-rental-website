import { useField } from 'formik'
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

  const [field, meta] = useField(id)

  const isSelect = entities && entities.length > 0
  const hasError = meta.touched && Boolean(meta.error)

  return (
    <div className={styles.field}>
      <label
        className={styles.label}
        htmlFor={id}
      >
        {label}
      </label>
      {isSelect ? (
        <select
          className={styles.select}
          id={id}
          aria-invalid={hasError}
          {...field}
        >
          <option value="" disabled>
            {label}
          </option>
          {entities.map((entity) => (
            <option
              key={entity.id}
              value={entity.id}
            >
              {entity.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          className={styles.input}
          id={id}
          type={type}
          min={type === 'date'
            ? new Date().toISOString().split('T')[0]
            : undefined}
          {...field}
        />
      )}
      {hasError && (
        <span className={styles.error}>
          {String(meta.error)}
        </span>
      )}
    </div>
  )
}

export default Field