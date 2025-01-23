'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import StyledComponentsRegistry from './lib/registry';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';

const inter = Inter({ subsets: ['latin'] });

const menuItems = [
	{ icon: 'home.svg', label: 'Dashboard', href: '/' },
	{ icon: 'transactions.svg', label: 'Transactions', href: '/transactions' },
	{ icon: 'account.svg', label: 'Accounts', href: '/accounts' },
	{
		icon: 'economic-investment.svg',
		label: 'Investments',
		href: '/investments',
	},
	{ icon: 'credit-card.svg', label: 'Credit Cards', href: '/cards' },
	{ icon: 'loan.svg', label: 'Loans', href: '/loans' },
	{ icon: 'service.svg', label: 'Services', href: '/services' },
	{ icon: 'settings.svg', label: 'Settings', href: '/settings' },
];

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [activeItem, setActiveItem] = useState('');
	const pathname = usePathname();

	useEffect(() => {
		const currentItem = menuItems.find((item) => item.href === pathname);
		if (currentItem) {
			setActiveItem(currentItem.label);
		}
	}, [pathname]);

	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

	return (
		<html lang='en'>
			<body className={inter.className}>
				<StyledComponentsRegistry>
					<div className='flex flex-col md:flex-row h-screen'>
						<Sidebar
							isOpen={isSidebarOpen}
							toggleSidebar={toggleSidebar}
							setActiveItem={setActiveItem}
							menuItems={menuItems}
						/>
						<div className='flex flex-col flex-1'>
							<Header toggleSidebar={toggleSidebar} title={activeItem} />
							<div className='bg-light-gray h-[calc(100vh-4rem)] md:h-[calc(100vh-6.25rem)] overflow-y-auto p-4'>
								{children}
							</div>
						</div>
					</div>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
