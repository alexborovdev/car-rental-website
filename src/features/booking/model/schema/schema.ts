import * as Yup from 'yup'

const today = new Date()
today.setHours(0, 0, 0, 0)

export const schema = Yup.object({
  carType: Yup.string()
    .required('Please select a car type'),

  rentalPlace: Yup.string()
    .required('Please select a rental location'),

  returnPlace: Yup.string()
    .required('Please select a return location'),

  rentalDate: Yup.date()
    .typeError('Please select a valid rental date')
    .min(today, 'Rental date cannot be in the past')
    .required('Please select a rental date'),

  returnDate: Yup.date()
    .typeError('Please select a valid return date')
    .min(
      Yup.ref('rentalDate'),
      'Return date must be after rental date')
    .required('Please select a return date')
})