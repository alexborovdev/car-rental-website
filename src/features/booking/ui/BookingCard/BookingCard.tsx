import Form from '@/features/booking/ui/Form'
import styles from './BookingCard.module.scss'

const BookingCard = () => {
  return (
    <aside
      className={styles.card}
      aria-labelledby="booking-title"
      role="complementary"
    >
      <h2
        id="booking-title"
        className={styles.title}
      >
        Book your car
      </h2>
      <Form />
    </aside>
  )
}

export default BookingCard