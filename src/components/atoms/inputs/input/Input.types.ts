import React from 'react';
import { TextFieldProps } from '@mui/material/TextField';

export type TInput = TextFieldProps & {
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
