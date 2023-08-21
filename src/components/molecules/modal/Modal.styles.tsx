import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';

import { IStyledModal } from './Modal.types';

export const StyledModal = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
}));
