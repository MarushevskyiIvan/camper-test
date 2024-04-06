import { Formik } from 'formik'
import {
	FormBtn,
	FormWrap,
	Forma,
	H3Title,
	Input,
	P,
	Textarea,
} from './ModalFormStyled'

export const ModalForm = () => {
	return (
		<FormWrap>
			<H3Title>Book your campervan now</H3Title>
			<P>Stay connected! We are always ready to help you.</P>
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
				<Forma>
					<label>
						<Input name='firstName' placeholder='Name' type='text' />
					</label>

					<label>
						<Input name='email' placeholder='Email' type='email' />
					</label>

					<label>
						<Input name='BookingDate' placeholder='Booking date' type='date' />
					</label>

					<label>
						<Textarea name='Comments' placeholder='Comments' type='text' />
					</label>

					<FormBtn type='submit'>Send</FormBtn>
				</Forma>
			</Formik>
		</FormWrap>
	)
}
