import React from 'react';
import { Controller } from 'react-hook-form';

import { Recipients as RecipientsUI } from 'monstera-ui';

import { TRecipients } from './Recipients.types';

export const Recipients = React.forwardRef(
	(
		{
			control,
			required,
			onBlur,
			isLoading,
			onChangeValue,
			...props
		}: TRecipients,
		ref?: React.Ref<HTMLInputElement>
	) => {
		return (
			<Controller
				name={props.name}
				control={control}
				rules={{ required: required }}
				render={({ field }) => {
					return (
						<RecipientsUI
							{...props}
							ref={field.ref}
							onChange={(value: string[] | null) => {
								field.onChange(value);
								if (onChangeValue != null) {
									onChangeValue(value);
								}
							}}
						/>
					);
				}}
			/>
		);
	}
);
