import { Formik, Form as FormikForm } from 'formik'
import { CAR_TYPES, CITIES } from '@/features/booking'
import { useBookingForm } from '@/features/booking'
import Field from '@/features/booking/ui/Field'
import Button from '@/shared/ui/Button'
import styles from './Form.module.scss'

const Form = () => {
  const {
    initialValues,
    schema,
    onFormSubmit
  } = useBookingForm()

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onFormSubmit}
    >
      {({ isValid, dirty }) => (
        <FormikForm className={styles.form}>
          <Field
            id="carType"
            label="Car Type"
            entities={CAR_TYPES}
          />
          <Field
            id="rentalPlace"
            label="Place of rental"
            entities={CITIES}
          />
          <Field
            id="returnPlace"
            label="Place of return"
            entities={CITIES}
          />
          <Field
            id="rentalDate"
            label="Rental date"
            type="date"
          />
          <Field
            id="returnDate"
            label="Return date"
            type="date"
          />
          <Button
            type="submit"
            color="yellow"
            label="Book your car"
            disabled={!dirty || !isValid}
          >
            Book now
          </Button>
        </FormikForm>
      )}
    </Formik>
  )
}

export default Form