import { schema } from '@/features/booking'
import { initialValues } from '@/features/booking'

export const useBookingForm = () => {
  const onFormSubmit = (values: typeof initialValues) => {
    console.log(values)
  }

  return {
    initialValues,
    schema,
    onFormSubmit
  }
}