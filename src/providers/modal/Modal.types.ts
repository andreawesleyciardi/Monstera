export type TContentComponent = React.FunctionComponent | null;

export type TContentProps = object;

export type TOpenModalProps = {
	type?: string;
	size?: string | ((contentProps?: TContentProps) => void);
};

export type TModalProps = object;

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
	children: any;
};
