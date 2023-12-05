import React from 'react';
import { SubmitHandler } from 'react-hook-form';

export type TForm = {
	className?: string;
	content: React.FC<any>;
	defaultValues?: object;
	errorCallback?: (error: object) => void;
	format?: (result: object) => void;
	id?: string;
	isLoading?: boolean;
	onSubmit: SubmitHandler<any>;
	validationMode?:
		| 'onBlur'
		| 'onChange'
		| 'onSubmit'
		| 'onTouched'
		| 'all'
		| undefined;
};
