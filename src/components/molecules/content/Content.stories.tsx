import type { Meta, StoryObj } from '@storybook/react';

import {
	Content as ContentComponent,
	ContentHeader as ContentHeaderComponent,
} from './Content';
import {
	TContent,
	TContentHeader,
	TContentBody,
	TContentFooter,
} from './Content.types';
import { ThemeProvider } from '../../../providers/theme/Theme';

type TContentStory = TContent & TContentHeader & TContentBody & TContentFooter;
const ContentStory = (props: TContentStory) => {
	return props.children;
};

const Template = (args) => {
	let { align, variant, ...others } = args;

	return (
		<ContentComponent>
			<ContentHeaderComponent align={align} variant={variant}>
				<p>Header</p>
			</ContentHeaderComponent>
		</ContentComponent>
	);
};

const meta: Meta<typeof ContentStory> = {
	title: 'Components/Molecules',
	component: ContentComponent,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
	argTypes: {
		variant: {
			description: 'Defines the color of the alert',
			defaultValue: 'success',
			table: {
				defaultValue: {
					summary: 'success',
				},
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof ContentComponent>;

export const Content = Template.bind({});
