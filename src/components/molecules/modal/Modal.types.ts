export type TContentComponent = React.FunctionComponent;

export type TContentProps = object;

export type TModalProps = {
	disableEscapeKeyDown?: boolean;
	fullScreen?: boolean;
	size?: string;
	type?: string;
};

export type TModal = {
	show: boolean;
	children: TContentComponent | null;
	childrenProps: TContentProps | null;
	modalProps: TModalProps | null;
};

export type IStyledModal = {
	$whatever: string;
};
