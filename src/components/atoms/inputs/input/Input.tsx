import React, { useEffect } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

import { TInput } from './Input.types';

export const Input = React.memo(
	React.forwardRef((props: TInput, ref?: React.Ref<HTMLInputElement>) => {
		return <TextField {...props} fullWidth={true} inputRef={ref} />;
	})
);

// To refactor based on this:

// import React from 'react';
// import { Controller } from 'react-hook-form';
// import TextField from '@mui/material/TextField';

// import { Translate } from '../../components/translate/Translate';

// export const Input = React.forwardRef((props, ref) => {
// 	let {
// 		type = 'text',
// 		control,
// 		validate: customValidate,
// 		placeholder,
// 		...otherProps
// 	} = props;

// 	const validations = {
// 		email: (v) => {
// 			// debugger;
// 			return /^((([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))|((([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))+[;,]{1,1})$/.test(
// 				v != null ? v : ''
// 			);
// 		},
// 	};

// 	const validate = customValidate ?? validations[type] ?? {};

// 	return (
// 		<Controller
// 			name={otherProps.name}
// 			control={control}
// 			rules={{ validate: validate }}
// 			render={({
// 				field: { onChange, value, ref },
// 				fieldState: { error, invalid, isDirty },
// 				formState,
// 			}) => {
// 				return (
// 					<TextField
// 						{...otherProps}
// 						type={type}
// 						placeholder={Translate({
// 							value: placeholder,
// 							hasToExist: true,
// 						})}
// 						onChange={(e) => {
// 							onChange(e.target.value);
// 						}}
// 						error={!!error}
// 						value={value}
// 						inputRef={ref}
// 						helperText={error ? error.message : null}
// 					/>
// 				);
// 			}}
// 		/>
// 	);
// });
