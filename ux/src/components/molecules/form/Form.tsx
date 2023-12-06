import React from 'react';
import { useForm, useFormState } from 'react-hook-form';

import { TForm, TFormStories } from './Form.types';

export const Form = ({
	id,
	className = '',
	validationMode = 'onChange',
	defaultValues,
	onSubmit,

	format,
	errorCallback,

	content: Content,
	...props
}: TForm) => {
	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting, isValid, isDirty },
		...useFormProps
	} = useForm({
		mode: validationMode,
		defaultValues: defaultValues,
	});
	const useFormStateProps = useFormState({ control });

	return (
		<form id={id} className={className} onSubmit={handleSubmit(onSubmit)}>
			<Content
				{...props}
				{...useFormProps}
				control={control}
				{...useFormStateProps}
				errors={errors}
				isSubmitting={isSubmitting}
				isValid={isValid}
				isDirty={isDirty}
			/>
		</form>
	);
};

// Create Form provider for set up validationMode and the Buttons Template and format function for data coming from BE

// To use FormStories in other components stories for automatically show the values of the Form
export const FormStories = ({ onSubmit, content: Content }: TFormStories) => (
	<Form
		onSubmit={onSubmit}
		content={({
			watch,
			errors,
			isSubmitting,
			isValid,
			isDirty,
			...props
		}) => {
			return (
				<>
					<Content
						{...props}
						watch={watch}
						errors={errors}
						isSubmitting={isSubmitting}
						isValid={isValid}
						isDirty={isDirty}
					/>
					<br />
					<br />
					<br />
					watch(): {JSON.stringify(watch(), null, '\t')}
					<br />
					<br />
					<br />
					isDirty: {JSON.stringify(isDirty, null, '\t')}
					<br />
					<br />
					isSubmitting: {JSON.stringify(isSubmitting, null, '\t')}
					<br />
					<br />
					isValid: {JSON.stringify(isValid, null, '\t')}
					<br />
					<br />
					errors: {JSON.stringify(errors, null, '\t')}
				</>
			);
		}}
	/>
);
