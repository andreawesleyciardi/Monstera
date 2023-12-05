import React from 'react';
import { useForm, useFormState } from 'react-hook-form';

import { TForm } from './Form.types';

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
	const { handleSubmit, control, formState, ...useFormProps } = useForm({
		mode: validationMode,
		defaultValues: defaultValues,
	});

	const { dirtyFields } = useFormState({ control });

	return (
		<form id={id} className={className} onSubmit={handleSubmit(onSubmit)}>
			<Content
				{...props}
				{...useFormProps}
				{...formState}
				control={control}
			/>
		</form>
	);
};

// Create Form provider for set up validationMode and the Buttons Template and format function for data coming from BE
