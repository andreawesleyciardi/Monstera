export type TContentComponent = React.FunctionComponent;

export type TContentProps = object;

export type TOpenModalProps = {
	type?: string;
	size?: string | ((contentProps?: TContentProps) => string);
	whatever?: any;
};

export type TModalProps = {
	type: string;
	size: string;
};

export type TModalOpen = (
	content: TContentComponent,
	props: TOpenModalProps,
	onResolve?: () => void,
	onReject?: () => void
) => void;

export type TModalClose = (
	successful: boolean,
	result?: object,
	params?: object
) => void;

export type TModalContext = {
	open: TModalOpen;
	close: TModalClose;
};

export type TModalProvider = {
	children: React.ReactNode;
};

export type THandleResult = (result?: object, params?: object) => void;
