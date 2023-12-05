import React from 'react';
import { ControllerProps } from 'react-hook-form';

import { TRecipients as TRecipientsUI } from 'monstera-ui';

export type TRecipients = TRecipientsUI &
	ControllerProps & {
		name: string;
		isLoading?: boolean;
		onChangeValue?: (value: string[] | null) => void;
	};
