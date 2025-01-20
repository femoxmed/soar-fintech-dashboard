import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from './lib/registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Financial Dashboard',
	description: 'A modern financial dashboard',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<StyledComponentsRegistry>
					<div className='flex h-screen'>{children}</div>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
