import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from './lib/registry';
import { Sidebar } from './components/layout/sidebar';
import { Header } from './components/layout/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Financial Dashboard',
	description: 'A modern financial dashboard application',
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
					<div className='flex h-screen'>
						<Sidebar />
						<div className='flex flex-col flex-1'>
							<Header />
							{children}
						</div>
					</div>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
