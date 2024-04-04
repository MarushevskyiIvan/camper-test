import { Formik, Field, Form } from 'formik'
import { FormWrap } from './ModalFormStyled'

export const ModalForm = () => {
	return (
		<FormWrap>
			<h3>Book your campervan now</h3>
			<p>Stay connected! We are always ready to help you.</p>
			<Formik
				initialValues={{
					firstName: '',
					email: '',
					BookingDate: '',
					Comments: '',
				}}
				onSubmit={async values => {
					console.log(values)
				}}
			>
				<Form>
					<label>
						<Field name='firstName' placeholder='Name' />
					</label>

					<label>
						<Field name='email' placeholder='Email' type='email' />
					</label>

					<label>
						<Field name='BookingDate' placeholder='Booking date' />
					</label>

					<label>
						<Field name='Comments' placeholder='Comments' />
					</label>

					<button type='submit'>Send</button>
				</Form>
			</Formik>
		</FormWrap>
	)
}
