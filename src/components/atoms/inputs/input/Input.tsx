import React, { useEffect } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

import { TInput } from './Input.types';

export const Input = React.memo(
	React.forwardRef((props: TInput, ref?: React.Ref<HTMLInputElement>) => {
		return <TextField {...props} fullWidth={true} inputRef={ref} />;
	})
);
