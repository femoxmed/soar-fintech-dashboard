'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import Image from 'next/image';
import { X } from 'lucide-react';

const SidebarContainer = styled.aside.attrs({
	className:
		'fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out md:relative md:transform-none',
})<{ $isOpen: boolean }>`
	${({ $isOpen }) =>
		!$isOpen &&
		`
    @media (max-width: 767px) {
      transform: translateX(-100%);
    }
  `}
`;

const NavItem = styled(Link)<{ active?: boolean }>`
	${({ active }) => `
    @apply flex items-center px-4 py-2 md:px-6 md:py-3 hover:bg-gray-50;
    color: ${active ? '#232323' : '#B1B1B1'};
    ${active ? '@apply bg-blue-50' : ''}
  `}
`;

const LabelText = styled.span`
	font-family: Inter, sans-serif;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.2;
	text-align: left;
	color: inherit;
	@media (min-width: 768px) {
		font-size: 18px;
		line-height: 21.78px;
	}
`;

interface MenuItem {
	icon: string;
	label: string;
	href: string;
}

interface SidebarProps {
	isOpen: boolean;
	toggleSidebar: () => void;
	setActiveItem: (label: string) => void;
	menuItems: MenuItem[];
}

export function Sidebar({
	isOpen,
	toggleSidebar,
	setActiveItem,
	menuItems,
}: SidebarProps) {
	const pathname = usePathname();

	return (
		<>
			<SidebarContainer $isOpen={isOpen}>
				<div className='px-4 md:px-6 py-4 md:py-9 flex justify-between items-center'>
					<h1 className='text-lg md:text-xl font-bold text-gray-800 flex flex-row gap-2 md:gap-4'>
						<Image
							width={23.33}
							height={31.81}
							src={'/soar-icon.svg'}
							alt='Soar icon'
						/>
						<p>Soar Task</p>
					</h1>
					<button onClick={toggleSidebar} className='md:hidden'>
						<X size={24} />
					</button>
				</div>
				<nav className='space-y-1'>
					{menuItems.map((item) => (
						<NavItem
							key={item.href}
							href={item.href}
							active={pathname === item.href}
							className='flex flex-row gap-2 md:gap-4 p-3 md:p-5'
							onClick={() => setActiveItem(item.label)}>
							<Image
								width={20}
								height={20}
								src={item.icon || '/placeholder.svg'}
								alt={`${item.label} icon`}
								className='md:w-[25px] md:h-[25px]'
							/>
							<LabelText>{item.label}</LabelText>
						</NavItem>
					))}
				</nav>
			</SidebarContainer>
			{isOpen && (
				<div
					className='fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden'
					onClick={toggleSidebar}
				/>
			)}
		</>
	);
}
