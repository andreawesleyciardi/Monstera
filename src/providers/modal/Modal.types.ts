export type TModalContext = {};

export type TModalProvider = {};

export type TModalOpen = (
	content: React.FunctionComponent,
	contentProps: object,
	onResolve?: () => void,
	onReject?: () => void
) => void;

export type TModalClose = (
	successful: boolean,
	result: object,
	params: object
) => void;
