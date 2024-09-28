
import { CaroneConfig } from 'carone-react';

export const config: CaroneConfig = {
	colors: {
		main: '#007ced',
		secondary: '#fff',
		error: 'red',
		success: 'green',
		font: '#007ced',
		fontOnMain: '#fff',
	},
	fonts: {
		mainFont: 'Arial',
		titleFont: 'Arial',
		sizes: {
			small: '0.8rem',
			default: '1rem',
			large: '1.5rem',
			subtitle: '1.8rem',
			title: '3rem',
		}
	},
	sizes: {
		padding: {
			xxs: '0.1rem',
			xs: '0.2rem',
			sm: '0.5rem',
			md: '1rem',
			lg: '1.5rem',
			xl: '2rem',
			xxl: '3rem',
		},
		borderRadius: {
			small: '0.2rem',
			medium: '0.5rem',
			large: '1rem',
		}
	},
	maxContentWidth: '1200px'
};
